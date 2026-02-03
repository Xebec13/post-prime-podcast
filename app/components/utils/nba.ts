import { unstable_cache } from "next/cache";
import { NBAGameData } from "../hero/components/HeroScore";

// === TYPY WEWNĘTRZNE API ===

// Dla todaysScoreboard_00.json
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

// Dla scheduleLeagueV2.json
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

// === TYP ZWRACANY ===
export interface NBADataPackage {
  yesterday: NBAGameData[];
  today: NBAGameData[];
  tomorrow: NBAGameData[];
  labels: {
    yesterday: string;
    tomorrow: string;
  }
}

const getLogo = (id: number) => `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`;

// === GŁÓWNA FUNKCJA ===
export async function getNBALiveScores(): Promise<NBADataPackage> {
  try {
    // 1. POBIERZ "DZIŚ" (KOTWICA)
    const todayRes = await fetch("https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json", { 
        next: { revalidate: 60 } 
    });
    
    if (!todayRes.ok) throw new Error("Błąd pobierania live score");
    const todayData: CDN_Today_Response = await todayRes.json();

    // 2. PRZETWÓRZ DZIŚ
    const todayGames: NBAGameData[] = todayData.scoreboard.games.map(game => ({
      id: game.gameId,
      status: cleanStatus(game.gameStatusText),
      awayTeam: { code: game.awayTeam.teamTricode, logo: getLogo(game.awayTeam.teamId), score: game.awayTeam.score },
      homeTeam: { code: game.homeTeam.teamTricode, logo: getLogo(game.homeTeam.teamId), score: game.homeTeam.score }
    }));

    // 3. OBLICZ DATY (WCZORAJ I JUTRO)
    const anchorDate = new Date(todayData.scoreboard.gameDate);
    
    const prevDate = new Date(anchorDate);
    prevDate.setDate(anchorDate.getDate() - 1);

    const nextDate = new Date(anchorDate);
    nextDate.setDate(anchorDate.getDate() + 1);

    // Formatowanie dat do szukania w JSON
    const formatNBA = (d: Date) => {
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const yyyy = d.getFullYear();
        return `${mm}/${dd}/${yyyy} 00:00:00`;
    };

    const yesterdayKey = formatNBA(prevDate);
    const tomorrowKey = formatNBA(nextDate);

    // 4. POBIERZ DANE Z CACHE'OWANEGO HELPERA
    const filteredSchedule = await getFilteredScheduleData(yesterdayKey, tomorrowKey);

    const formatLabel = (d: Date) => `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`;

    return {
      yesterday: filteredSchedule.yesterday,
      today: todayGames,
      tomorrow: filteredSchedule.tomorrow,
      labels: {
        yesterday: formatLabel(prevDate),
        tomorrow: formatLabel(nextDate)
      }
    };

  } catch (error) {
    console.error("Błąd NBA:", error);
    return { yesterday: [], today: [], tomorrow: [], labels: { yesterday: "", tomorrow: "" } };
  }
}

// === POMOCNIK CACHE ===
// Używamy unstable_cache, aby zapisać w pamięci tylko mały wycinek danych,
// a nie cały plik 10MB (który fetchujemy z flagą no-store).
const getFilteredScheduleData = unstable_cache(
    async (yesterdayKey: string, tomorrowKey: string) => {
        try {
            // Fetch z no-store omija błąd limitu 2MB w Next.js Data Cache
            const res = await fetch("https://cdn.nba.com/static/json/staticData/scheduleLeagueV2.json", { 
                cache: 'no-store' 
            });
            if (!res.ok) return { yesterday: [], tomorrow: [] };
            
            const data: CDN_Schedule_Response = await res.json();
            
            // Znajdź wczoraj
            const yEntry = data.leagueSchedule.gameDates.find(d => d.gameDate === yesterdayKey);
            const yesterdayGames = yEntry ? yEntry.games.map(mapScheduleGame) : [];

            // Znajdź jutro
            const tEntry = data.leagueSchedule.gameDates.find(d => d.gameDate === tomorrowKey);
            const tomorrowGames = tEntry ? tEntry.games.map(mapScheduleGame) : [];

            return { yesterday: yesterdayGames, tomorrow: tomorrowGames };

        } catch (error) {
            console.error("Błąd schedule:", error); // Używamy 'error', żeby linter nie krzyczał
            return { yesterday: [], tomorrow: [] };
        }
    },
    ['nba-schedule-filtered-v2'], // Unikalny klucz cache
    { revalidate: 3600 } // Odświeżaj co godzinę
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