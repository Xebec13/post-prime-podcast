import Image from "next/image";

export default function InstagramLastPost() {
    const lastPost = {
        image: "/postprime-hero.png", // Placeholder
        content: "Behind the scenes of our latest photoshoot! 📸 The chemistry on set was unreal. Can't wait for you guys to see what we're cooking. Link in bio for the full gallery! #behindthescenes #podcastlife #postprime #nba",
        likes: 2450,
        comments: 89,
        date: "5 hours ago"
    };

    return (
        <div className="w-full flex flex-col text-orange-50">
           
            {/* Grid: 1 kolumna mobile, 3 kolumny desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 items-start">
                
                {/* 
                   1. ZDJĘCIE (2/3 szerokości) 
                   - aspect-square
                   - limity wysokości te same co w FB
                */}
                <div className="lg:col-span-2 relative w-full aspect-square min-h-[250px] max-h-[400px] lg:max-h-[60vh] border border-neutral-100/20 bg-black overflow-hidden">
                    <Image
                        src={lastPost.image}
                        alt="Latest Instagram Post"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* 2. TREŚĆ POSTA (1/3 szerokości) */}
                <div className="flex flex-col justify-center gap-6 py-4 h-full">
                    {/* Tekst posta */}
                    <p className="text-lg md:text-xl font-medium leading-relaxed font-serif">
                        {lastPost.content}
                    </p>

                    {/* Statystyki i Data */}
                    <div className="flex flex-col gap-2 mt-auto">
                        {/* ZMIANA KOLORU: text-pink-500 (Instagram Brand) */}
                        <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-pink-500">
                            <span className="flex items-center gap-2">
                                ❤️ {lastPost.likes} Likes
                            </span>
                            <span className="flex items-center gap-2">
                                💬 {lastPost.comments} Comments
                            </span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                            Posted {lastPost.date}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}