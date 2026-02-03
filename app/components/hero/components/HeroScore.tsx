import Image from "next/image";

// === 1. TYPY DANYCH ===
export interface NBAGame {
    id: string;
    status: string; // np. "FINAL", "LIVE", "2:30 AM"
    awayTeam: {
        code: string; // np. "LAL"
        logo: string;
        score: number;
    };
    homeTeam: {
        code: string; // np. "BOS"
        logo: string;
        score: number;
    };
}

interface HeroScoreProps {
    games: NBAGame[];
    dateLabel?: string; // np. "TOMORROW 12/05"
}

export default function HeroScore({ games, dateLabel = "NBA Games" }: HeroScoreProps) {
    return (
        <div className="flex flex-col w-full h-full border-2 border-neutral-300/60 bg-neutral-900 overflow-hidden">

            {/* Nagłówek */}
            <div className="flex justify-between gap-1 px-3 py-1.5 bg-neutral-800 shrink-0 border-b border-neutral-700">
                <div className="flex items-center gap-1">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500">
                        {dateLabel}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500">League</span>
                </div>
            </div>

            <div className="flex flex-col items-start h-full overflow-hidden">
                {/* KONTENER POZIOMY */}
                <div className="flex gap-1 p-1 overflow-x-auto no-scrollbar h-full items-stretch w-full">
                    
                    {games.map((game) => (
                        <div 
                            key={game.id} 
                            className="flex flex-col justify-center items-center gap-1 min-w-30 md:min-w-40 px-2 border-r border-neutral-800 last:border-0"
                        >
                            <div className="text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase">
                                {game.status}
                            </div>
                            
                            <div className="flex items-center justify-between w-full gap-2">
                                {/* GOŚCIE */}
                                <div className="flex flex-col items-center flex-1">
                                    <div className="relative size-5 md:size-7 bg-neutral-800 rounded-full mb-1 overflow-hidden">
                                        <Image 
                                            src={game.awayTeam.logo} 
                                            alt={game.awayTeam.code} 
                                            fill 
                                            className="object-contain p-1"
                                        />
                                    </div>
                                    <span className="text-[9px] md:text-[11px] font-black">{game.awayTeam.code}</span>
                                </div>

                                {/* WYNIK */}
                                <div className="flex items-center gap-1 text-xs md:text-sm font-black tabular-nums">
                                    <span>{game.awayTeam.score}</span>
                                    <span className="text-orange-500">:</span>
                                    <span>{game.homeTeam.score}</span>
                                </div>

                                {/* GOSPODARZE */}
                                <div className="flex flex-col items-center flex-1">
                                    <div className="relative size-5 md:size-7 bg-neutral-800 rounded-full mb-1 overflow-hidden">
                                        <Image 
                                            src={game.homeTeam.logo} 
                                            alt={game.homeTeam.code} 
                                            fill 
                                            className="object-contain p-1"
                                        />
                                    </div>
                                    <span className="text-[9px] md:text-[11px] font-black">{game.homeTeam.code}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* SEPARATOR (Opcjonalny - można go też zautomatyzować jako element listy) */}
                    <div className="flex flex-col justify-center items-center min-w-15 md:min-w-20 border-l border-dashed border-neutral-600 bg-neutral-800/50 px-2">
                        <span className="text-[8px] md:text-[10px] font-black uppercase text-neutral-500 leading-none">TOMORROW</span>
                        <span className="text-[10px] md:text-xs font-bold text-orange-500">12/05</span>
                    </div>
                </div>
            </div>
        </div>
    );
}