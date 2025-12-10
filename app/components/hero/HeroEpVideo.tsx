"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroEpVideo() {
    // MOCK DATA (Później podmienimy na propsy z API)
    // Przykładowe ID filmu (np. jakiś highlight NBA)
    const videoId = "Iq5GNa7sPjY";
    // Twoje zdjęcie z folderu public
    const localThumbnail = "/postprime-hero.png";

    const [isPlaying, setIsPlaying] = useState(false);

    // 1. Widok Odtwarzacza (po kliknięciu)
    if (isPlaying) {
        return (
            <div className="size-full min-h-125 overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    // autoplay=1 sprawia, że film startuje od razu po załadowaniu iframe'a
                    // rel=0 ogranicza polecane filmy do tego samego kanału
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        );
    }

    // 2. Widok Facade (Zdjęcie + Przycisk Play)
    return (
        <div
            onClick={() => setIsPlaying(true)}
            className="relative size-full min-h-125 overflow-hidden cursor-pointer"
        >
            {/* Zdjęcie (Next/Image dla optymalizacji) */}
            <Image
                src={localThumbnail}
                alt="Ostatni odcinek - miniaturka"
                fill
                sizes="(max-width: 1020px) 100vw, 50vw"
                className="object-cover "
                priority // Ładujemy priorytetowo, bo to Hero section
            />
        </div>
    );
}