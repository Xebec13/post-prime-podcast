"use client";

import { motion, Variants } from "motion/react";
import Icon from "../../ui/Icon";

interface HeroEpInfoProps {
    title: string;
    statistics: {
        viewCount: string;
        likeCount: string;
        commentCount: string;
    };
}

// 1. Animacja Rodzica (Główny kontener wjeżdża z lewej)
const containerVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { 
            duration: 0.8, 
            ease: "easeOut",
            // 'when: "beforeChildren"' informuje Motion, że dzieci mają czekać,
            // ale my użyjemy precyzyjnego delay w dziecku dla pełnej kontroli.
        }
    }
};

// 2. Animacja Piłki (Czeka na zakończenie rodzica)
const ballVariants: Variants = {
    hidden: { y: 100, rotate: -45 },
    visible: { 
        y: 0, 
        rotate: 0, 
        opacity: 0.7, // Docelowa przezroczystość
        transition: { 
            duration: 1,       // Powolny, leniwy wjazd piłki
            ease: "easeOut",
            delay: 0.8         // KLUCZOWE: Czeka 0.8s (czas trwania animacji rodzica)
        } 
    }
};

export default function HeroEpInfo({ title, statistics }: HeroEpInfoProps) {
    return (
        <motion.div
            // Rodzic dziedziczy stan 'visible' od ScrollReveal i przekazuje go dzieciom
            variants={containerVariants}
            className="relative size-full text-inherit flex flex-col justify-between gap-1 overflow-hidden"
        >
            
            {/* === TŁO (PIŁKA) === */}
            {/* Ustawiona absolutnie, pod spodem (z-0) */}
            <motion.div
                variants={ballVariants}
                className="absolute -left-16 -bottom-10 z-0 text-orange-500/30 pointer-events-none"
            >
                <Icon name="Basketball" className="text-[clamp(6rem,10rem+10vw,20rem)]" />
            </motion.div>


            {/* === TREŚĆ === */}
            {/* relative z-10 sprawia, że tekst jest NAD piłką */}
            <div className="relative z-10 p-5 text-gray-50">
                <p className="text-[clamp(1rem,1rem+0.9vw,3rem)] font-semibold leading-tight drop-shadow-md">
                    {title}
                </p>
            </div>

            {/* === STATYSTYKI === */}
            <div className="relative z-10 self-end inline-flex p-3 gap-3 text-sm font-medium text-gray-50">
                <div className="inline-flex justify-center items-center gap-1.5 p-1 bg-neutral-900/40 rounded-md backdrop-blur-sm shadow-sm">
                    <span><Icon name="Like" className="text-[10px] text-orange-500" /></span>
                    <p>{Number(statistics.viewCount).toLocaleString()}</p>
                </div>
                <div className="inline-flex justify-center items-center gap-1.5 p-1 bg-neutral-900/40 rounded-md backdrop-blur-sm shadow-sm">
                    <span><Icon name="View" className="text-[10px] text-orange-500" /></span>
                    <p>{Number(statistics.likeCount).toLocaleString()}</p>
                </div>
                <div className="inline-flex justify-center items-center gap-1.5 p-1 bg-neutral-900/40 rounded-md backdrop-blur-sm shadow-sm">
                    <span><Icon name="Comment" className="text-[10px] text-orange-500" /></span>
                    <p>{Number(statistics.commentCount).toLocaleString()}</p>
                </div>
            </div>

        </motion.div>
    );
}