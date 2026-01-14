import Image from "next/image";

export default function FacebookLastPost() {
    const lastPost = {
        image: "/postprime-hero.png",
        content: "What a game last night! The energy in the arena was absolutely electric. We discussed the key defensive adjustments in our latest podcast episode. Check out the link in bio! #basketball #analysis #postprime",
        likes: 1240,
        comments: 45,
        date: "2 hours ago"
    };

    return (
        <div className="w-full flex flex-col">
           
            {/* Grid: 1 kolumna mobile, 3 kolumny desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 items-start">
                
                {/* 
                   1. ZDJĘCIE (2/3 szerokości) 
                   - col-span-2
                   - aspect-square (zawsze kwadrat)
                   - min-h-[300px]
                   - lg:max-h-[50vh] -> ograniczenie wysokości na desktopie, żeby nie było gigantyczne
                */}
                <div className="lg:col-span-2 relative w-full aspect-square min-h-62 max-h-100 lg:max-h-[60vh] border border-neutral-100/20 bg-black overflow-hidden">
                    <Image
                        src={lastPost.image}
                        alt="Latest Facebook Post"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* 2. TREŚĆ POSTA (1/3 szerokości) */}
                <div className="flex flex-col justify-center gap-6 py-4 h-full">
                    {/* Tekst posta */}
                    <p className="text-lg md:text-xl font-medium leading-relaxed  font-serif">
                        {lastPost.content}
                    </p>

                    {/* Statystyki i Data */}
                    <div className="flex flex-col gap-2 mt-auto">
                        <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-blue-500">
                            <span className="flex items-center gap-2">
                                👍 {lastPost.likes} Likes
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