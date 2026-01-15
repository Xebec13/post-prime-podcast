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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-orange-50">
            {fbPosts.map((post, index) => {
                const showRightBase = (index + 1) % 2 !== 0;
                const showRightLg = (index + 1) % 3 !== 0;
                const showBottomBase = index < 4;
                const showBottomLg = index < 3;

                return (
                    <div
                        key={post.id}
                        className="relative flex flex-col gap-4 p-5 group cursor-pointer"
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
                        <div className="relative w-full aspect-square bg-black overflow-hidden">
                            <Image
                                src={post.image}
                                alt="Post thumbnail"
                                fill
                                className="object-cover "
                            />
                        </div>

                        {/* Tekst i Statystyki */}
                        <div className="flex flex-col gap-3 ">
                            <p className="text-sm leading-relaxed line-clamp-3 ">
                                {post.content}
                            </p>

                            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white mt-1">
                                <div className="flex gap-3 ">
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