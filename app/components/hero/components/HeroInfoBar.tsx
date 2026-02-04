"use client";

import { motion, Variants } from "motion/react";
import Separator from "../../ui/Separators";
import ScrollReveal from "../../ui/ScrollReveal";
import SlideType from "../../ui/SlideType";

// === 1. ANIMACJE (Poza komponentem) ===
const textVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// === 2. INTERFEJS PROPSÓW ===
interface HeroInfoBarProps {
    formattedDate: string; // Przekazana z serwera dla spójności
    infoLabel: string;     // Np. "Last news from "
    highlight: string;     // Np. "Post Prime"
}

export default function HeroInfoBar({ 
    formattedDate, 
    infoLabel, 
    highlight 
}: HeroInfoBarProps) {
    
    return (
        <ScrollReveal
            amount={0.3}
            stagger={0.15}
            className="relative w-full overflow-hidden flex flex-col items-center justify-center"
        >
            {/* 1. LINIE GÓRNE */}
            <div className="flex flex-col items-center gap-2.5 w-full ">
                <Separator width="long" color="bg-neutral-400 md:block hidden" />
                <Separator width="mid" color="bg-neutral-500" />
            </div>

            {/* 2. TREŚĆ */}
            <motion.div
                variants={textVariants}
                className="relative flex items-center flex-col md:flex-row justify-center gap-2 md:gap-4 w-full px-4 my-5 md:my-10"
            >
                {/* DATA */}
                <div className="bg-orange-500/80 text-neutral-950 font-black text-[clamp(0.8rem,1.2rem+0.9vw,3.5rem)] px-10 py-1 capitalize tracking-tighter shadow-xl whitespace-nowrap shrink-0">
                    {formattedDate}
                </div>

                {/* TEKST ANIMOWANY */}
                <SlideType
                    text={infoLabel}
                    highlight={highlight}
                    highlightColor="text-orange-500/90"
                    className="text-gray-50 font-black uppercase tracking-tight text-[clamp(0.6rem,1rem+0.9vw,3.25rem)]"
                    delay={0.2}
                />
            </motion.div>

            {/* 3. LINIE DOLNE */}
            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="min" color="bg-neutral-500" />
                <Separator width="long" color="bg-neutral-400 md:block hidden" />
            </div>
        </ScrollReveal>
    );
}