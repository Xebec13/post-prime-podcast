import Image from "next/image";

export default function HeroScore() {
    return (
        <div className="flex flex-col w-full h-full border-2 border-neutral-300/60 bg-neutral-900">

            {/* Nagłówek */}
            <div className="flex justify-between gap-1 px-3 py-1.5 bg-neutral-800 shrink-0 border-b border-neutral-700">
                <div className="flex items-center gap-1">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500">NBA Games</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500">League</span>
                </div>
            </div>

            <div className="flex flex-col items-start h-full overflow-y-hidden">
                {/* KONTENER POZIOMY */}
                <div className="flex gap-1 p-1 overflow-x-auto no-scrollbar h-full items-stretch">
                    
                    {/* PRZYKŁAD KAFLA PO ZMIANACH (MAPOWANY ELEMENT) */}
                    <div className="flex flex-col justify-center items-center gap-1 min-w-30 md:min-w-40 px-2 border-r border-neutral-800 last:border-0">
                        <div className="text-[9px] md:text-[10px] font-bold text-neutral-400">FINAL</div>
                        
                        <div className="flex items-center justify-between w-full gap-2">
                            {/* GOŚCIE */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="relative size-5 md:size-7 bg-neutral-800 rounded-full mb-1" />
                                <span className="text-[9px] md:text-[11px] font-black">LAL</span>
                            </div>

                            {/* WYNIK */}
                            <div className="flex items-center gap-1 text-xs md:text-sm font-black tabular-nums">
                                <span>112</span>
                                <span className="text-orange-500">:</span>
                                <span>105</span>
                            </div>

                            {/* GOSPODARZE */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="relative size-5 md:size-7 bg-neutral-800 rounded-full mb-1" />
                                <span className="text-[9px] md:text-[11px] font-black">BOS</span>
                            </div>
                        </div>
                    </div>

                    {/* SEPARATOR (TOMORROW) - Poprawiony na mniejszy */}
                    <div className="flex flex-col justify-center items-center min-w-15 md:min-w-20 border-x border-dashed border-neutral-600 bg-neutral-800/50 px-2">
                        <span className="text-[8px] md:text-[10px] font-black uppercase text-neutral-500 leading-none">
                            TOMORROW
                        </span>
                        <span className="text-[10px] md:text-xs font-bold text-orange-500">
                            12/05
                        </span>
                    </div>

                    {/* Tutaj reszta placeholderów/mapowania... */}
                </div>
            </div>
        </div>
    );
}