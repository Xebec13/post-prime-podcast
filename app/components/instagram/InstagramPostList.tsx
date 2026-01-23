import Image from "next/image";
import Icon from "../ui/Icon";
import { IconLink, LargeScreenLink } from "../ui/Links";

// Generujemy 6 postów
const igPosts = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    content: "Sunday vibes in the studio. 🎧 Who are you watching today? #nba #sunday #vibes",
    likes: 850 + (i * 50),
    comments: 20 + i,
    date: `${i + 1} days ago`,
    image: "/postprime-hero.png"
}));

export default function InstagramPostList() {
    return (
        // Grid: startujemy od grid-cols-2, potem lg:grid-cols-3 (identycznie jak FB)
        <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-2 text-inherit lg:pb-23">
            {igPosts.map((post) => {

                return (
                    <div
                        key={post.id}
                        className="group relative flex flex-col gap-2 p-2 cursor-pointer"
                    >

                        {/* Zdjęcie (Kwadratowe) */}
                        <div className="relative w-full aspect-square bg-black overflow-hidden">
                            <Image
                                src={post.image}
                                alt="Post thumbnail"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Tekst i Statystyki */}
                        <div className="flex flex-col gap-2 px-1">
                            <p className="text-sm font-semibold leading-relaxed line-clamp-3">
                                {post.content}
                            </p>

                            <div className="flex items-center gap-3 px-2 text-xs font-bold mt-1 text-inherit">
                                <div className="flex justify-center items-center gap-1 transition-colors duration-300 group-hover:text-fuchsia-600/90">
                                    <Icon name="Play" />
                                    <span>{post.likes}</span>
                                </div>
                                <div className="flex justify-center items-center gap-1.5 transition-colors duration-300 group-hover:text-fuchsia-600/90">
                                    <Icon name="Comment" />
                                    <span>{post.comments}</span>
                                </div>
                                <div className="ml-auto flex justify-center items-center gap-1 overflow-hidden">
                                    <span className="origin-right opacity-0 translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap">{post.date}</span>
                                    <IconLink href="#" size={14} />
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="hidden lg:block absolute bottom-3 right-5 text-neutral-950">
                <LargeScreenLink text="reels" href="#" isExternal={false} />
            </div>
        </div>
    );
}