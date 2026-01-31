"use client";

import { useState } from "react";
import Icon from "../../ui/Icon";
import Image from "next/image";
import { motion, Variants } from "motion/react";

interface HeroEpVideoProps {
    videoId: string;
    thumbnail: string;
}

// Te same warianty co w EpInfo dla spójności (wjazd z lewej)
const videoVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: { duration: 0.8, ease: "easeOut" } 
    }
};

export default function HeroEpVideo({ videoId, thumbnail }: HeroEpVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // 1. Widok Odtwarzacza (po kliknięciu)
    if (isPlaying) {
        return (
            <motion.div 
                variants={videoVariants}
                className="size-full overflow-hidden"
            >
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
            </motion.div>
        );
    }

    // 2. Widok Facade z Efektem i Przyciskiem Play
    return (
        <motion.div
            variants={videoVariants}
            onClick={() => setIsPlaying(true)}
            // Kontener z tłem
            className="relative size-full overflow-hidden cursor-pointer group"
        >
            {/* Zdjęcie z efektem */}
            <Image
                src={thumbnail}
                alt="Ostatni odcinek - miniaturka"
                fill
                sizes="(max-width: 1020px) 100vw, 50vw"
                className="object-cover object-center brightness-50 transition-all duration-500 group-hover:brightness-75"
                priority
            />

            {/* Przycisk Play */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="py-3 px-6 md:py-5 md:px-10 bg-orange-500/90 rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                    <Icon name="Play" className="text-white size-6 lg:size-8" />
                </div>
            </div>
        </motion.div>
    );
}