"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PlayButton from "../ui/PlayButton";

interface YoutubePlayerProps {
    videoId?: string;
    thumbnail?: string;
    title?: string;
}

export default function YoutubePlayer({ 
    videoId = "dQw4w9WgXcQ", 
    thumbnail = "/postprime-hero.png", 
    title = "Video Player"
}: YoutubePlayerProps) {
    
    const [isPlaying, setIsPlaying] = useState(false);

    // Reset playera przy zmianie filmu
    // useEffect(() => {
    //     setIsPlaying(false);
    // }, [videoId]);

    
    const containerClasses = "relative w-full mx-auto aspect-video bg-neutral-950 rounded-xl overflow-hidden shadow-2xl z-10";

    // 1. WIDOK ODTWARZACZA (IFRAME)
    if (isPlaying) {
        return (
            <div className={containerClasses}>
                <iframe
                    width="100%"
                    height="100%"
                    // src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="size-full"
                />
            </div>
        );
    }

    // 2. WIDOK FACADE (OKŁADKA)
    return (
        <div 
            onClick={() => setIsPlaying(true)}
            className={`${containerClasses} group cursor-pointer`}
        >
            {/* Zdjęcie z lekkim zoomem przy hoverze (zamiast tła pod spodem) */}
            <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
            />

            {/* Ciemna winieta dla lepszej widoczności przycisku */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

            {/* PRZYCISK PLAY (Wyśrodkowany) */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <PlayButton />
            </div>
        </div>
    );
}