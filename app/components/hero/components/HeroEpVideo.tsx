"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import PlayButton from "../../ui/PlayButton";
interface HeroEpVideoProps {
    videoId: string;
    thumbnail: string;
}


const videoVariants: Variants = {
    hidden: { scale: 0.7 },
    visible: {
        scale: 1,
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
                className="size-full overflow-hidden relative"
            >
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
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
            initial="hidden"             // Stan początkowy
            whileInView="visible"        // Stan po wejściu w widok
            viewport={{ once: true }}    // Animuj tylko raz
            // Kontener z tłem
            className="relative size-full overflow-hidden cursor-pointer group"
        >
            {/* Zdjęcie z efektem */}
            <Image
                src={thumbnail}
                alt="Ostatni odcinek - miniaturka"
                fill
                sizes="100vw"
                className="object-cover object-center brightness-50 transition-all duration-500 group-hover:brightness-75"
                priority
            />

            {/* Przycisk Play */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <PlayButton />
            </div>
        </motion.div>
    );
}