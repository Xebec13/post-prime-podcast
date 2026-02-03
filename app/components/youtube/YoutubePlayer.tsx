"use client";

import { useState } from "react";
import Image from "next/image";
import PlayButton from "../ui/PlayButton";

interface YoutubePlayerProps {
    videoId: string;
    thumbnail: string;
    title: string;
}

export default function YoutubePlayer({ videoId, thumbnail, title }: YoutubePlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // UWAGA: Nie potrzebujemy useEffect! 
    // Klucz 'key' w komponencie wyżej (YoutubeManager) załatwi reset stanu.

    const containerClasses = "relative w-full mx-auto aspect-video bg-neutral-950 rounded-xl overflow-hidden shadow-2xl z-10";

    return (
        <div className={containerClasses}>
            {isPlaying ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="size-full"
                />
            ) : (
                <div onClick={() => setIsPlaying(true)} className="group cursor-pointer size-full relative">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <PlayButton />
                    </div>
                </div>
            )}
        </div>
    );
}