import Image from "next/image";

// Generujemy 6 postów (zwiększono z 3)
const fbPosts = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    content: "The playoffs are around the corner. Who is your pick for the MVP this season? Let us know in the comments below! 🏀🏆",
    likes: 350 + (i * 20),
    comments: 12 + i,
    date: `${i + 1} days ago`,
    image: "/postprime-hero.png"
}));

export default function FacebookPostList() {
    return (
        // Grid: startujemy od grid-cols-2 (bez mobile grid-cols-1), potem lg:grid-cols-3
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {fbPosts.map((post, index) => {
                const showRightBase = (index + 1) % 2 !== 0;
                const showRightLg = (index + 1) % 3 !== 0;
                const showBottomBase = index < 4;
                const showBottomLg = index < 3;

                return (
                    <div
                        key={post.id}
                        className="relative flex flex-col gap-4 p-5 group cursor-pointer hover:bg-white/5 transition-colors duration-500"
                    >
                        {/* === SEPARATORY === */}

                        {/* PIONOWA */}
                        <div className={`absolute -right-3 lg:-right-4 top-4 bottom-4 w-0.5 bg-neutral-950/40
                            ${showRightBase ? 'block' : 'hidden'} 
                            ${showRightLg ? 'lg:block' : 'lg:hidden'}
                        `} />

                        {/* POZIOMA */}
                        <div className={`absolute -bottom-3 lg:-bottom-4 left-4 right-4 h-0.5 bg-neutral-950/40
                            ${showBottomBase ? 'block' : 'hidden'}
                            ${showBottomLg ? 'lg:block' : 'lg:hidden'} 
                        `} />

                        {/* === TREŚĆ === */}

                        {/* Zdjęcie (Kwadratowe) */}
                        <div className="relative w-full aspect-square border border-neutral-100/20 bg-black overflow-hidden">
                            <Image
                                src={post.image}
                                alt="Post thumbnail"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            />
                        </div>

                        {/* Tekst i Statystyki */}
                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-serif leading-relaxed line-clamp-3 group-hover:text-blue-500 transition-colors">
                                {post.content}
                            </p>

                            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-500 mt-1">
                                <div className="flex gap-3 group-hover:text-blue-500 transition-colors">
                                    <span>👍 {post.likes}</span>
                                    <span>💬 {post.comments}</span>
                                </div>
                                <span>{post.date}</span>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}