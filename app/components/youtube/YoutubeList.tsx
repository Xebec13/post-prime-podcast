import Image from "next/image";
import YoutubeLink from "./YoutubeLink";

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
            className="relative grid grid-cols-2 lg:grid-cols-3 gap-1.5 lg:gap-3">
            {recentVideos.map((video) => {
                return (
                    <div
                        key={video.id}
                        className="relative flex flex-col gap-3 p-1.5 group  cursor-pointer"
                    >
                        {/* TREŚĆ */}
                        <div className="relative w-full aspect-video overflow-hidden bg-neutral-900 rounded-lg">
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 px-2">
                            <h4 className="text-base font-bold text-current leading-tight tracking-tighter uppercase line-clamp-2">
                                {video.title}
                            </h4>
                            <div className="flex gap-3 text-[10px] text-neutral-900 font-medium uppercase tracking-wider">
                                <span>{video.views}</span>
                                <span>{video.date}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
            {/* === DESKTOP BUTTON (Absolutny) === */}
            {/* Widoczny tylko na >= lg. Pozycjonowany w prawym dolnym rogu sekcji (tak jak w About) */}
            <div className="hidden lg:block absolute -bottom-10 right-10">
                <YoutubeLink className="text-sm text-white bg-red-600 px-4 py-1.5 rounded-md " text="Playlist" />
            </div>
            {/* === MOBILE BUTTON (Wewnątrz Grida) === */}
            {/* Widoczny tylko < lg. Wypełnia lukę 10 w siatce 2-kolumnowej */}
            <div className="lg:hidden flex items-center justify-center border-2 border-dashed border-neutral-700 p-5">
                <YoutubeLink className="text-sm text-neutral-400" text="More Videos" />
            </div>

        </div>
    );
}