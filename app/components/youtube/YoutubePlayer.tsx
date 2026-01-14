import Icon from "../ui/Icon"
import Image from "next/image";

export default function YoutubePlayer() {
    // Mockup danych głównego filmu
    const mainVideo = {
        title: "GRAND FINALE: The Truth About Modern Defense Strategy | Post Prime #100",
        thumbnail: "/postprime-hero.png", // Placeholder z folderu public
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4 mb-5 lg:mb-13">

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
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="p-5 lg:p-10 bg-orange-300 rounded-full shadow-xl">
                        <Icon name="Play"  className="text-black size-4 lg:size-8" />
                    </div>
                </div>
            </div>

            {/* Tytuł pod filmem */}
            <h3 className="w-full text-2xl md:text-4xl font-black uppercase tracking-tighter mt-2">
                {mainVideo.title}
            </h3>
        </div>
    );
}