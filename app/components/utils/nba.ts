import { unstable_cache } from "next/cache";
import { NBAGameData } from "../hero/components/HeroScore";

// === ŚCISŁE TYPY API NBA ===
interface CDN_Team_Data {
  teamId: number;
  teamTricode: string;
  score: number;
}

interface CDN_Today_Game {
  gameId: string;
  gameStatusText: string;
  homeTeam: CDN_Team_Data;
  awayTeam: CDN_Team_Data;
}

interface CDN_Today_Response {
  scoreboard: {
    gameDate: string; // Format: "2026-02-04"
    games: CDN_Today_Game[];
  };
}

interface CDN_Schedule_Game {
  gameId: string;
  gameStatusText: string;
  homeTeam: { teamId: number; teamTricode: string; score?: number };
  awayTeam: { teamId: number; teamTricode: string; score?: number };
}

interface CDN_Schedule_Date_Entry {
  gameDate: string; // Format: "MM/DD/YYYY 00:00:00"
  games: CDN_Schedule_Game[];
}

interface CDN_Schedule_Response {
  leagueSchedule: {
    gameDates: CDN_Schedule_Date_Entry[];
  };
}

export interface NBADataPackage {
  yesterday: NBAGameData[];
  today: NBAGameData[];
  tomorrow: NBAGameData[];
  labels: { yesterday: string; today: string; tomorrow: string; }
}

const getLogo = (id: number) => `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`;

// Pomocnik do bezpiecznego parsowania daty z API NBA (YYYY-MM-DD)
function parseNBADate(dateStr: string): Date {
    const [year, month, day] = dateStr.split('-').map(Number);
    // Ustawiamy godzinę 12:00, żeby uniknąć przesunięć stref czasowych
    return new Date(year, month - 1, day, 12, 0, 0);
}

// Formatowanie daty pod klucz w terminarzu NBA (MM/DD/YYYY 00:00:00)
const formatNBAKey = (d: Date): string => {
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${mm}/${dd}/${yyyy} 00:00:00`;
};

export async function getNBALiveScores(): Promise<NBADataPackage> {
  try {
    const todayRes = await fetch("https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json", { 
        next: { revalidate: 60 } 
    });
    
    if (!todayRes.ok) throw new Error("Błąd live score");
    const todayData: CDN_Today_Response = await todayRes.json();

    // Kluczowa data z "dzisiejszego" pliku NBA
    const anchorDate = parseNBADate(todayData.scoreboard.gameDate);

    const liveEndpointGames: NBAGameData[] = todayData.scoreboard.games.map(game => ({
      id: game.gameId,
      status: cleanStatus(game.gameStatusText),
      awayTeam: { code: game.awayTeam.teamTricode, logo: getLogo(game.awayTeam.teamId), score: game.awayTeam.score },
      homeTeam: { code: game.homeTeam.teamTricode, logo: getLogo(game.homeTeam.teamId), score: game.homeTeam.score }
    }));

    // Czy wszystkie mecze z pliku "today" już się skończyły?
    const allFinished = liveEndpointGames.length > 0 && liveEndpointGames.every(g => g.status === 'FINAL');
    
    let dateForYesterday: Date;
    let dateForToday: Date;
    let dateForTomorrow: Date;

    if (allFinished) {
        // ROLLOVER: Jeśli mecze się skończyły, plik "today" z API traktujemy jako NASZE WCZORAJ
        dateForYesterday = new Date(anchorDate);
        dateForToday = new Date(anchorDate);
        dateForToday.setDate(anchorDate.getDate() + 1);
        dateForTomorrow = new Date(anchorDate);
        dateForTomorrow.setDate(anchorDate.getDate() + 2);
    } else {
        // STANDARD: Mecze trwają lub dopiero będą
        dateForYesterday = new Date(anchorDate);
        dateForYesterday.setDate(anchorDate.getDate() - 1);
        dateForToday = new Date(anchorDate);
        dateForTomorrow = new Date(anchorDate);
        dateForTomorrow.setDate(anchorDate.getDate() + 1);
    }

    // Pobieramy dane z terminarza (Schedule)
    const scheduleData = await getFilteredScheduleData(
        formatNBAKey(dateForYesterday), 
        formatNBAKey(dateForToday), 
        formatNBAKey(dateForTomorrow)
    );

    const formatLabel = (d: Date) => `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`;

    return {
      yesterday: allFinished ? liveEndpointGames : (scheduleData[formatNBAKey(dateForYesterday)] || []),
      today: allFinished ? (scheduleData[formatNBAKey(dateForToday)] || []) : liveEndpointGames,
      tomorrow: scheduleData[formatNBAKey(dateForTomorrow)] || [],
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

const getFilteredScheduleData = unstable_cache(
    async (d1: string, d2: string, d3: string): Promise<Record<string, NBAGameData[]>> => {
        try {
            const res = await fetch("https://cdn.nba.com/static/json/staticData/scheduleLeagueV2.json", { 
                next: { revalidate: 3600 } 
            });
            if (!res.ok) return {};
            
            const data: CDN_Schedule_Response = await res.json();
            const result: Record<string, NBAGameData[]> = {};

            [d1, d2, d3].forEach(key => {
                const entry = data.leagueSchedule.gameDates.find(d => d.gameDate === key);
                result[key] = entry ? entry.games.map(mapScheduleGame) : [];
            });

            return result;
        } catch (e) {
            console.error(e);
            return {};
        }
    },
    ['nba-schedule-v5-typed'], // Nowy klucz cache
    { revalidate: 3600 }
);

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
    const s = status.toUpperCase();
    if (s.includes("FINAL")) return "FINAL";
    // Czyści zbędne końcówki stref czasowych
    return status.replace(" pm ET", " PM").replace(" am ET", " AM").replace(" ET", "").trim();
}