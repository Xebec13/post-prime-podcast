import Image from "next/image";

export default function YoutubePlayer() {
    // Mockup danych głównego filmu
    const mainVideo = {
        title: "GRAND FINALE: The Truth About Modern Defense Strategy | Post Prime #100",
        thumbnail: "/postprime-hero.png", // Placeholder z folderu public
    };

    return (
        <div className="w-full flex flex-col gap-4 mb-10 lg:mb-16">
            {/* Nagłówek sekcji */}
            <div className="flex items-center justify-end ">
                 <div className="bg-red-600 text-white px-3 py-1 font-bold uppercase text-xs tracking-widest">
                    Latest Episode
                </div>
            </div>

            {/* Kontener Wideo (Facade) */}
            <div className="relative w-full aspect-video bg-black border border-neutral-100/20 overflow-hidden cursor-pointer">
                <Image
                    src={mainVideo.thumbnail}
                    alt={mainVideo.title}
                    fill
                    className="object-cover "
                    priority
                />
                
                {/* Przycisk Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] transition-all duration-300">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Tytuł pod filmem */}
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mt-2">
                {mainVideo.title}
            </h3>
        </div>
    );
}