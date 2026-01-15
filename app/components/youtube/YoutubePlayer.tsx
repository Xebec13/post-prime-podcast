import Icon from "../ui/Icon"
import Image from "next/image";

export default function YoutubePlayer() {
    // Mockup danych głównego filmu
    const mainVideo = {
        title: "GRAND FINALE: The Truth About Modern Defense Strategy | Post Prime #100",
        thumbnail: "/postprime-hero.png", // Placeholder z folderu public
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">

            {/* Kontener Wideo (Facade) */}
            <div className="relative w-full aspect-video bg-neutral-950 rounded-lg overflow-hidden cursor-pointer">
                <Image
                    src={mainVideo.thumbnail}
                    alt={mainVideo.title}
                    fill
                    className="object-cover "
                    priority
                />

                {/* Przycisk Play */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="py-5 px-10 bg-orange-500/90 rounded-lg shadow-xl">
                        <Icon name="Play"  className="text-neutral-900 size-4 lg:size-8" />
                    </div>
                </div>
            </div>

            {/* Tytuł pod filmem */}
            <p className="w-full text-2xl md:text-3xl px-2 font-black uppercase tracking-tighter">
                {mainVideo.title}
            </p>
        </div>
    );
}