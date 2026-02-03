import Image from "next/image";

// Typy
export interface NBAGameData {
    id: string;
    status: string;
    awayTeam: { code: string; logo: string; score: number };
    homeTeam: { code: string; logo: string; score: number };
}

interface HeroScoreProps {
    yesterdayGames: NBAGameData[];
    todayGames: NBAGameData[];
    tomorrowGames: NBAGameData[];
    labels: { yesterday: string; tomorrow: string };
}

// Sub-komponent karty meczu
const GameCard = ({ game, isResult }: { game: NBAGameData; isResult?: boolean }) => (
    <div className="flex flex-col justify-center items-center gap-1 min-w-30 md:min-w-40 px-2 border-r border-neutral-800 last:border-0 shrink-0">
        <div className={`text-[9px] md:text-[10px] font-bold uppercase whitespace-nowrap ${game.status === 'FINAL' ? 'text-neutral-500' : 'text-orange-500'}`}>
            {game.status}
        </div>
        
        <div className="flex items-center justify-between w-full gap-2">
            {/* GOŚCIE */}
            <div className="flex flex-col items-center flex-1">
                <div className="relative size-7 md:size-8 lg:size-10 bg-orange-50/10 rounded-full mb-1 overflow-hidden">
                    <Image src={game.awayTeam.logo} alt={game.awayTeam.code} fill sizes="32px" className="object-cover p-0.5" />
                </div>
                <span className={`text-[9px] md:text-[11px] font-black ${game.awayTeam.score > game.homeTeam.score && isResult ? 'text-white' : 'text-neutral-400'}`}>
                    {game.awayTeam.code}
                </span>
            </div>

            {/* WYNIK / VS */}
            <div className="flex items-center gap-1 text-xs md:text-sm font-black tabular-nums text-neutral-200">
                {(game.status.includes("PM") || game.status.includes("AM")) && game.awayTeam.score === 0 ? (
                    <span className="text-neutral-500 text-[10px]">vs</span>
                ) : (
                    <>
                        <span className={game.awayTeam.score > game.homeTeam.score && isResult ? "text-white" : "text-neutral-400"}>
                            {game.awayTeam.score}
                        </span>
                        <span className="text-orange-500">:</span>
                        <span className={game.homeTeam.score > game.awayTeam.score && isResult ? "text-white" : "text-neutral-400"}>
                            {game.homeTeam.score}
                        </span>
                    </>
                )}
            </div>

            {/* GOSPODARZE */}
            <div className="flex flex-col items-center flex-1">
                <div className="relative size-7 md:size-8 lg:size-10 bg-orange-50/10 rounded-full mb-1 overflow-hidden">
                    <Image src={game.homeTeam.logo} alt={game.homeTeam.code} sizes="32px" fill className="object-cover p-0.5" />
                </div>
                <span className={`text-[9px] md:text-[11px] font-black ${game.homeTeam.score > game.awayTeam.score && isResult ? 'text-white' : 'text-neutral-400'}`}>
                    {game.homeTeam.code}
                </span>
            </div>
        </div>
    </div>
);

// Separator
const Separator = ({ label, subLabel }: { label: string; subLabel: string }) => (
    <div className="flex flex-col justify-center items-center min-w-16 md:min-w-20 border-l border-r border-dashed border-neutral-700 bg-neutral-600 px-2 shrink-0">
        <span className="text-[8px] md:text-[9px] font-black text-orange-30 leading-none mb-1">{label}</span>
        <span className="text-[9px] md:text-[11px] font-bold text-orange-500">{subLabel}</span>
    </div>
);

export default function HeroScore({ yesterdayGames, todayGames, tomorrowGames, labels }: HeroScoreProps) {
    if (yesterdayGames.length === 0 && todayGames.length === 0 && tomorrowGames.length === 0) return null;

    return (
        <div className="flex flex-col w-full h-full border-2 border-neutral-300/60 bg-neutral-900 overflow-hidden">
            <div className="flex justify-between gap-1 px-3 py-1.5 bg-neutral-800 shrink-0 border-b border-neutral-700">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500">NBA Center</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500">Live Scores</span>
            </div>

            <div className="flex flex-col items-start h-full overflow-hidden">
                <div className="flex gap-1 p-1 overflow-x-auto no-scrollbar h-full items-stretch w-full">
                    
                    {/* 1. WCZORAJ (Wyniki) */}
                    {yesterdayGames.length > 0 && (
                        <>
                            <Separator label="LAST NIGHT" subLabel={labels.yesterday} />
                            {yesterdayGames.map(game => <GameCard key={game.id} game={game} isResult={true} />)}
                        </>
                    )}

                    {/* 2. DZIŚ (Live) */}
                    {todayGames.length > 0 && (
                        <>
                            <Separator label="TONIGHT" subLabel="LIVE" />
                            {todayGames.map(game => <GameCard key={game.id} game={game} />)}
                        </>
                    )}

                    {/* 3. JUTRO (Terminarz) */}
                    {tomorrowGames.length > 0 && (
                        <>
                            <Separator label="UPCOMING" subLabel={labels.tomorrow} />
                            {tomorrowGames.map(game => <GameCard key={game.id} game={game} />)}
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}