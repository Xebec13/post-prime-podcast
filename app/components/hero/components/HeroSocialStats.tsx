"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import { useState } from "react";
import Icon from "../../ui/Icon";
import { IconName } from "../../ui/icons";
import { SmartLinkLg } from "../../ui/SmartLinks";

// === 1. TYPY (Eksportujemy je, bo przydadzą się w Hero.tsx) ===
export type PlatformKey = "youtube" | "facebook" | "instagram";

export type SocialStatItem = {
    key: PlatformKey;
    title: string;
    href: string;
    icon: IconName;
    textColor: string;
    stats: {
        subscribers: string;
        views: string;
        goals: string;
    }
}

// === 2. ANIMACJE (Wyciągnięte) ===
const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

const iconWrapperVariants: Variants = {
    hidden: { y: "-120%" },
    visible: { y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// === 3. INTERFEJS PROPSÓW ===
interface HeroSocialStatsProps {
    className?: string;
    items: SocialStatItem[]; // Tablica z danymi przekazana z góry
}

export default function HeroSocialStats({ className = "", items }: HeroSocialStatsProps) {
    // Inicjalizujemy stan pierwszym elementem z listy (zabezpieczenie jeśli lista byłaby pusta)
    const [activePlatform, setActivePlatform] = useState<PlatformKey>(items[0]?.key || "youtube");
    
    // Szukamy aktualnego itemu w przekazanych propsach
    const currentItem = items.find(item => item.key === activePlatform) || items[0];

    // Zabezpieczenie na wypadek braku danych
    if (!currentItem) return null;

    return (
        <div className={`relative flex flex-col size-full overflow-hidden ${className}`}>

            {/* === GÓRA: PASEK IKON === */}
            <motion.div
                className="relative z-20 grid grid-cols-3 place-items-center will-change-transform h-1/4 shrink-0 bg-neutral-900"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {items.map((item) => {
                    const isActive = activePlatform === item.key;

                    return (
                        <motion.div
                            key={item.key}
                            variants={iconWrapperVariants}
                            className="relative size-full overflow-hidden p-0.5"
                        >
                            <button
                                onClick={() => setActivePlatform(item.key)}
                                className={`
                                    group relative flex items-center justify-center size-full cursor-pointer transition-all duration-300 outline-none focus:outline-none
                                    ${isActive ? "bg-orange-500/70 scale-100 z-10" : "bg-orange-500/40 hover:bg-orange-500/60 scale-100 brightness-75"}
                                `}
                                aria-label={`Pokaż statystyki ${item.key}`}
                            >
                                <Icon
                                    name={item.icon}
                                    className={`text-lg md:text-2xl lg:text-3xl transition-all duration-300 ${isActive ? "text-gray-50 scale-105" : "text-gray-50/90"}`}
                                />
                            </button>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* === DÓŁ: TREŚĆ === */}
            <div className="relative z-10 flex-1 size-full overflow-hidden bg-neutral-900/50">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePlatform}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col justify-center gap-2 size-full py-2 px-3 md:px-4"
                    >
                        {/* Tytuł */}
                        <div className="flex justify-between items-center ">
                            <h3 className={`text-xs font-bold tracking-tight md:text-sm lg:text-lg ${currentItem.textColor}`}>
                                {currentItem.title}
                            </h3>
                            <div className="text-xs md:text-sm ">
                                <SmartLinkLg text="Link" iconSize={14} href={currentItem.href} isExternal={false} />
                            </div>
                        </div>

                        {/* Statystyki */}
                        <div className="flex flex-col justify-center space-y-1 font-medium text-gray-50 tabular-nums">
                            <div className="flex justify-between items-center border-b-2 border-orange-500/10 pb-1">
                                <span className="text-[10px] md:text-xs lg:text-sm uppercase tracking-wider text-gray-400 ">Subscribers</span>
                                <span className="text-[10px] md:text-xs lg:text-sm font-black">{currentItem.stats.subscribers}</span>
                            </div>
                            <div className="flex justify-between items-center border-b-2 border-orange-500/10 pb-1">
                                <span className="text-[10px] md:text-xs lg:text-sm uppercase tracking-wider text-gray-400 ">Total Views</span>
                                <span className="text-[10px] md:text-xs lg:text-sm font-black">{currentItem.stats.views}</span>
                            </div>
                            <div className="mt-4 flex justify-between items-end border-b-2 text-gray-300 pb-1">
                                <span className="text-[11px] md:text-xs lg:text-sm uppercase tracking-widest ">Target Goal</span>
                                <span className="text-[11px] md:text-xs lg:text-sm font-black ">{currentItem.stats.goals}</span>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}