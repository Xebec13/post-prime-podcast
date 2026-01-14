"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import Image from "next/image";

interface HeroEpVideoProps {
    videoId: string;
    thumbnail: string;
}

export default function HeroEpVideo({ videoId, thumbnail }: HeroEpVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // 1. Widok Odtwarzacza (po kliknięciu)
    if (isPlaying) {
        return (
            <div className="size-full min-h-100 overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    // src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </div>
        );
    }

    // 2. Widok Facade z Efektem i Przyciskiem Play
    return (
        <div
            onClick={() => setIsPlaying(true)}
            // Kontener z tłem potrzebnym do efektu mix-blend (zamiast #faaa00 użyłem orange-500 dla spójności)
            className="relative size-full min-h-100 border-2 border-black overflow-hidden cursor-pointer group "
        >
            {/* Zdjęcie z efektem mix-blend-darken */}
            <Image
                src={thumbnail}
                alt="Ostatni odcinek - miniaturka"
                fill
                sizes="(max-width: 1020px) 100vw, 50vw"
                className="object-cover object-center brightness-50"
                priority
            />

            {/* Przycisk Play (Absolute Center) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="p-5 lg:p-10 bg-orange-300 rounded-full shadow-xl">
                    <Icon name="Play" className="text-black size-4 lg:size-8" />
                </div>
            </div>
        </div>
    );
}