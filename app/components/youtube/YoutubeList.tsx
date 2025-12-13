import Image from "next/image";

const recentVideos = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    title: `Episode ${101 + i}: Analysis of the Game and Future Prospects`,
    views: "12K views",
    date: "2 days ago",
    thumbnail: "/postprime-hero.png" // Placeholder
}));

export default function YoutubeList() {
    return (
        // ZMIANA: startujemy od grid-cols-2, potem lg:grid-cols-3
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentVideos.map((video, index) => {
                
                // === LOGIKA PIONOWA (RIGHT BORDER) ===
                // Base (2 kolumny): Pokaż dla indeksów parzystych (0, 2, 4...) -> czyli (index + 1) % 2 !== 0
                // LG (3 kolumny): Pokaż dla wszystkich OPRÓCZ co trzeciego (0, 1, 3, 4...) -> czyli (index + 1) % 3 !== 0
                const showRightBase = (index + 1) % 2 !== 0; 
                const showRightLg = (index + 1) % 3 !== 0;

                // === LOGIKA POZIOMA (BOTTOM BORDER) ===
                // Base (2 kolumny): Mamy 9 elementów. Ostatni rząd to tylko index 8. Pokaż dla < 8.
                // LG (3 kolumny): Ostatni rząd to indeksy 6, 7, 8. Pokaż dla < 6.
                const showBottomBase = index < 8; 
                const showBottomLg = index < 6;

                return (
                    <div 
                        key={video.id} 
                        className="relative flex flex-col gap-3 p-5 group cursor-pointer hover:bg-white/5 transition-colors duration-500"
                    >
                        {/* === SEPARATORY SIATKI === */}

                        {/* 1. LINIA PIONOWA (PO PRAWEJ) */}
                        <div className={`absolute -right-3 lg:-right-4 top-4 bottom-4 w-0.5 bg-zinc-100/20
                            ${showRightBase ? 'block' : 'hidden'} 
                            ${showRightLg ? 'lg:block' : 'lg:hidden'}
                        `} />

                        {/* 2. LINIA POZIOMA (NA DOLE) */}
                        <div className={`absolute -bottom-3 lg:-bottom-4 left-4 right-4 h-0.5 bg-zinc-100/20
                            ${showBottomBase ? 'block' : 'hidden'}
                            ${showBottomLg ? 'lg:block' : 'lg:hidden'}
                        `} />


                        {/* === TREŚĆ KAFELKA === */}
                        
                        {/* Miniaturka */}
                        <div className="relative w-full aspect-video overflow-hidden border border-white/10 bg-black">
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className="object-cover "
                            />
                            
                        </div>

                        {/* Dane filmu */}
                        <div className="flex flex-col gap-1 mt-1">
                            <h4 className="text-base font-bold text-current leading-tight uppercase line-clamp-2 group-hover:text-red-500 transition-colors">
                                {video.title}
                            </h4>
                            <div className="flex gap-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                <span>{video.views}</span>
                                <span>•</span>
                                <span>{video.date}</span>
                            </div>
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
}