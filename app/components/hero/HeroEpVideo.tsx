"use client";

import { useState } from "react";
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
            <div className="size-full min-h-100 overflow-hidden rounded-lg">
                <iframe
                    width="100%"
                    height="100%"
                    // src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        );
    }

    // 2. Widok Facade z Efektem i Przyciskiem Play
    return (
        <div
            onClick={() => setIsPlaying(true)}
            // Kontener z tłem potrzebnym do efektu mix-blend (zamiast #faaa00 użyłem orange-500 dla spójności)
            className="relative size-full min-h-100 overflow-hidden cursor-pointer group rounded-lg border-2"
        >
            {/* Zdjęcie z efektem mix-blend-darken */}
            <Image
                src={thumbnail}
                alt="Ostatni odcinek - miniaturka"
                fill
                sizes="(max-width: 1020px) 100vw, 50vw"
                className="mix-blend-darken"
                priority
            />

            {/* Przycisk Play (Absolute Center) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="size-20 lg:size-24 bg-orange-300 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg 
                        className="w-8 h-8 lg:w-10 lg:h-10 text-slate-950 ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}