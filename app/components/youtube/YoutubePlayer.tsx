import Icon from "../ui/Icon"
import Image from "next/image";

export default function YoutubePlayer() {
    // Mockup danych głównego filmu
    const mainVideo = {
        title: "GRAND FINALE: The Truth About Modern Defense Strategy | Post Prime #100",
        thumbnail: "/postprime-hero.png", // Placeholder z folderu public
    };

    return (
        <div className="relative group w-full flex flex-col justify-center items-center gap-4 p-3 rounded-lg bg-inherit text-gray-100 cursor-pointer">
            {/* tło animowane od środka */}
            <span className="absolute inset-0 bg-inherit rounded-lg scale-93 group-hover:scale-100 group-hover:bg-orange-500/50 transition-all duration-300 ease-out z-0"/>

            {/* Kontener Wideo (Facade) */}
            <div className="relative w-full aspect-video bg-neutral-950 rounded-lg overflow-hidden z-10">
                <Image
                    src={mainVideo.thumbnail}
                    alt={mainVideo.title}
                    fill
                    className="object-cover "
                    priority
                />

                {/* Przycisk Play */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="py-5 px-10 bg-orange-500/90 rounded-lg shadow-xl">
                        <Icon name="Play" className="text-neutral-100 size-4 lg:size-8" />
                    </div>
                </div>
            </div>
        </div>
    );
}