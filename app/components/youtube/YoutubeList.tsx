import Image from "next/image";
import {SmartLinkLg} from "../ui/SmartLinks";

const recentVideos = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    title: `Episode ${101 + i}: Analysis of the Game and Future Prospects`,
    views: "12K views",
    date: "2 days ago",
    thumbnail: "/postprime-hero.png"
}));

export default function YoutubeList() {
    return (
        <div
            className="relative grid grid-cols-2 lg:grid-cols-3 gap-1.5 lg:gap-3 lg:pb-23">
            {recentVideos.map((video) => {
                return (
                    <div
                        key={video.id}
                        className="relative group flex flex-col gap-3 p-3 group cursor-pointer"
                    >
                        {/* tło animowane od środka */}
                        <span className="absolute inset-0 bg-inherit rounded-lg scale-93 group-hover:scale-100 group-hover:bg-orange-500/50 transition-all duration-300 ease-out z-0" />
                        {/* TREŚĆ */}
                        <div className="relative w-full aspect-video overflow-hidden bg-neutral-900 rounded-lg">
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative flex flex-col gap-1.5 px-2 text-neutral-900">
                            <h4 className="text-sm lg:text-base font-black text-current leading-tight tracking-tighter line-clamp-2">
                                {video.title}
                            </h4>
                            <div className="flex gap-3 text-[10px] font-medium uppercase tracking-wider">
                                <span>{video.views}</span>
                                <span>{video.date}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="hidden lg:block absolute bottom-3 right-7 text-neutral-900">
                <SmartLinkLg text="playlist" href="#" isExternal={false} />
            </div>
        </div>
    );
}