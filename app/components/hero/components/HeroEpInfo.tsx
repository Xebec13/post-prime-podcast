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
        }
    }
};

// 2. Animacja Piłki (Czeka na zakończenie rodzica dzięki delay)
const ballVariants: Variants = {
    hidden: { y: 100, rotate: -45, opacity: 0 },
    visible: { 
        y: 0, 
        rotate: 0, 
        opacity: 0.3, // Docelowa przezroczystość (30%)
        transition: { 
            duration: 1, 
            ease: "easeOut",
            delay: 0.6    // Zmniejszyłem lekko delay, żeby efekt był bardziej dynamiczny
        } 
    }
};

export default function HeroEpInfo({ title, statistics }: HeroEpInfoProps) {
    return (
        <motion.div
            // KLUCZ: Dodajemy te trzy linie poniżej
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative size-full text-inherit flex flex-col justify-between gap-1 overflow-hidden"
        >
            
            {/* === TŁO (PIŁKA) === */}
            {/* Nie musisz tu dawać initial/whileInView, bo dziedziczy je od rodzica! */}
            <motion.div
                variants={ballVariants}
                className="absolute -left-16 -bottom-10 z-0 text-orange-500 pointer-events-none"
            >
                <Icon name="Basketball" className="text-[clamp(6rem,10rem+10vw,20rem)]" />
            </motion.div>


            {/* === TREŚĆ === */}
            <div className="relative h-full z-10 p-1.5 md:p-5 text-gray-50">
                <p className="text-[clamp(0.6rem,0.8rem+0.5vw,3rem)] font-semibold leading-tight drop-shadow-md">
                    {title}
                </p>
            </div>

            {/* === STATYSTYKI === */}
            <div className="relative z-10 self-end inline-flex p-3 gap-3 text-xs md:text-sm font-medium text-gray-50">
                <div className="inline-flex justify-center items-center gap-1.5 p-1 bg-neutral-900/40 rounded-md backdrop-blur-sm shadow-sm">
                    <span><Icon name="View" className="text-[10px] text-orange-500" /></span>
                    <p>{Number(statistics.viewCount || 0).toLocaleString('pl-PL')}</p>
                </div>
                <div className="inline-flex justify-center items-center gap-1.5 p-1 bg-neutral-900/40 rounded-md backdrop-blur-sm shadow-sm">
                    <span><Icon name="Like" className="text-[10px] text-orange-500" /></span>
                    <p>{Number(statistics.likeCount || 0).toLocaleString()}</p>
                </div>
                <div className="inline-flex justify-center items-center gap-1.5 p-1 bg-neutral-900/40 rounded-md backdrop-blur-sm shadow-sm">
                    <span><Icon name="Comment" className="text-[10px] text-orange-500" /></span>
                    <p>{Number(statistics.commentCount || 0).toLocaleString()}</p>
                </div>
            </div>

        </motion.div>
    );
}