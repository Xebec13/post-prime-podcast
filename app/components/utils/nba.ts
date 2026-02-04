import { unstable_cache } from "next/cache";
import { NBAGameData } from "../hero/components/HeroScore";

// === TYPY (Bez zmian) ===
interface CDN_Today_Response {
  scoreboard: {
    gameDate: string; 
    games: {
      gameId: string;
      gameStatusText: string;
      homeTeam: { teamId: number; teamTricode: string; score: number };
      awayTeam: { teamId: number; teamTricode: string; score: number };
    }[];
  };
}

interface CDN_Schedule_Game {
  gameId: string;
  gameStatusText: string;
  homeTeam: { teamId: number; teamTricode: string; score?: number };
  awayTeam: { teamId: number; teamTricode: string; score?: number };
}

interface CDN_Schedule_Response {
  leagueSchedule: {
    gameDates: {
      gameDate: string;
      games: CDN_Schedule_Game[];
    }[];
  };
}

export interface NBADataPackage {
  yesterday: NBAGameData[];
  today: NBAGameData[];
  tomorrow: NBAGameData[];
  labels: {
    yesterday: string;
    today: string;      // Dodano label dla Dziś (żeby data się aktualizowała)
    tomorrow: string;
  }
}

const getLogo = (id: number) => `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`;

// === GŁÓWNA FUNKCJA ===
export async function getNBALiveScores(): Promise<NBADataPackage> {
  try {
    // 1. POBIERZ DANE LIVE (KOTWICA)
    const todayRes = await fetch("https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json", { 
        next: { revalidate: 60 } 
    });
    
    if (!todayRes.ok) throw new Error("Błąd live score");
    const todayData: CDN_Today_Response = await todayRes.json();

    // Przetwórz dane z pliku "today"
    const liveEndpointGames: NBAGameData[] = todayData.scoreboard.games.map(game => ({
      id: game.gameId,
      status: cleanStatus(game.gameStatusText),
      awayTeam: { code: game.awayTeam.teamTricode, logo: getLogo(game.awayTeam.teamId), score: game.awayTeam.score },
      homeTeam: { code: game.homeTeam.teamTricode, logo: getLogo(game.homeTeam.teamId), score: game.homeTeam.score }
    }));

    // === LOGIKA PRZESUWANIA DNIA (ROLLOVER) ===
    // Sprawdzamy, czy wszystkie mecze z tego pliku są już zakończone.
    const allFinished = liveEndpointGames.length > 0 && liveEndpointGames.every(g => g.status === 'FINAL');
    
    // Pobieramy datę z API (np. "2026-02-04")
    const anchorDate = new Date(todayData.scoreboard.gameDate);

    let yesterdayGames: NBAGameData[] = [];
    let todayGames: NBAGameData[] = [];
    let tomorrowGames: NBAGameData[] = [];
    
    let dateForYesterday: Date;
    let dateForToday: Date;
    let dateForTomorrow: Date;

    // Helper do formatowania daty dla szukarki JSON
    const formatNBA = (d: Date) => {
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const yyyy = d.getFullYear();
        return `${mm}/${dd}/${yyyy} 00:00:00`;
    };

    if (allFinished) {
        // SCENARIUSZ 1: WSZYSTKO SKOŃCZONE -> PRZESUWAMY DNI
        // Dane z "live endpoint" stają się WCZORAJSZE
        yesterdayGames = liveEndpointGames;
        
        // Daty przesuwamy w przód
        dateForYesterday = new Date(anchorDate); // To co API nazywa "dziś", dla nas jest "wczoraj"
        
        dateForToday = new Date(anchorDate);
        dateForToday.setDate(anchorDate.getDate() + 1); // Prawdziwe "dziś" (nadchodząca noc)

        dateForTomorrow = new Date(anchorDate);
        dateForTomorrow.setDate(anchorDate.getDate() + 2); // Prawdziwe "jutro"

        // Musimy pobrać terminarz dla NOWEGO Dziś i NOWEGO Jutro
        const scheduleData = await getFilteredScheduleData(formatNBA(dateForToday), formatNBA(dateForTomorrow));
        
        // Przypisujemy wyniki z terminarza (scheduleData zwraca mapę { [date]: games })
        todayGames = scheduleData[formatNBA(dateForToday)] || [];
        tomorrowGames = scheduleData[formatNBA(dateForTomorrow)] || [];

    } else {
        // SCENARIUSZ 2: MECZE TRWAJĄ LUB SIĘ NIE ZACZĘŁY (STANDARD)
        todayGames = liveEndpointGames;

        dateForToday = new Date(anchorDate);
        
        dateForYesterday = new Date(anchorDate);
        dateForYesterday.setDate(anchorDate.getDate() - 1);

        dateForTomorrow = new Date(anchorDate);
        dateForTomorrow.setDate(anchorDate.getDate() + 1);

        // Pobieramy terminarz dla Wczoraj i Jutro
        const scheduleData = await getFilteredScheduleData(formatNBA(dateForYesterday), formatNBA(dateForTomorrow));
        
        yesterdayGames = scheduleData[formatNBA(dateForYesterday)] || [];
        tomorrowGames = scheduleData[formatNBA(dateForTomorrow)] || [];
    }

    // Formatowanie etykiet (DD.MM)
    const formatLabel = (d: Date) => `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`;

    return {
      yesterday: yesterdayGames,
      today: todayGames,
      tomorrow: tomorrowGames,
      labels: {
        yesterday: formatLabel(dateForYesterday),
        today: formatLabel(dateForToday),
        tomorrow: formatLabel(dateForTomorrow)
      }
    };

  } catch (error) {
    console.error("Błąd NBA:", error);
    return { 
        yesterday: [], today: [], tomorrow: [], 
        labels: { yesterday: "", today: "", tomorrow: "" } 
    };
  }
}

// === POMOCNIK CACHE ===
// Zmodyfikowany, by zwracał obiekt z kluczami dat, a nie sztywne yesterday/tomorrow
const getFilteredScheduleData = unstable_cache(
    async (dateKey1: string, dateKey2: string) => {
        try {
            const res = await fetch("https://cdn.nba.com/static/json/staticData/scheduleLeagueV2.json", { 
                cache: 'no-store' 
            });
            if (!res.ok) return {};
            
            const data: CDN_Schedule_Response = await res.json();
            const result: Record<string, NBAGameData[]> = {};

            // Szukamy obu dat
            [dateKey1, dateKey2].forEach(key => {
                const entry = data.leagueSchedule.gameDates.find(d => d.gameDate === key);
                if (entry) {
                    result[key] = entry.games.map(mapScheduleGame);
                } else {
                    result[key] = [];
                }
            });

            return result;

        } catch (error) {
            console.error("Błąd schedule:", error);
            return {};
        }
    },
    ['nba-schedule-dynamic-v3'], // Zmień wersję klucza cache dla pewności
    { revalidate: 3600 }
);

// Funkcje mapujące
function mapScheduleGame(game: CDN_Schedule_Game): NBAGameData {
  return {
    id: game.gameId,
    status: cleanStatus(game.gameStatusText.replace(" ET", "")),
    awayTeam: { 
        code: game.awayTeam.teamTricode, 
        logo: getLogo(game.awayTeam.teamId), 
        score: game.awayTeam.score ?? 0 
    },
    homeTeam: { 
        code: game.homeTeam.teamTricode, 
        logo: getLogo(game.homeTeam.teamId), 
        score: game.homeTeam.score ?? 0 
    }
  };
}

function cleanStatus(status: string): string {
  if (status.trim() === "Final") return "FINAL";
  if (status.includes("pm")) return status.replace(" pm ET", " PM");
  if (status.includes("am")) return status.replace(" am ET", " AM");
  return status;
}