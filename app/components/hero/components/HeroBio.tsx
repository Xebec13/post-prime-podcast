"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import Icon from "../../ui/Icon";
import Lamp from "../../ui/Lamp";

// === KONFIGURACJA ANIMACJI (TYPOWANA) ===

const ballVariants: Variants = {
    hidden: { 
        y: 30, 
        rotate: -30, 
        opacity: 0 
    },
    visible: { 
        y: 0, 
        rotate: 0, 
        opacity: 1, 
        transition: { duration: 0.8, ease: "easeOut" } 
    }
};

const bgImageVariants: Variants = {
    hidden: { 
        filter: "brightness(0) blur(0px)" 
    },
    visible: { 
        filter: "brightness(1) blur(1.5px)", 
        transition: { duration: 1.2, ease: "easeInOut" } 
    }
};

const textVariants: Variants = {
    hidden: { 
        opacity: 0 
    },
    visible: { 
        opacity: 1, 
        transition: { duration: 0.5, delay: 0.8 } 
    }
};

// === INTERFEJS PROPSÓW ===
interface HeroBioProps {
    intro: string;
    highlight: string;
    outro: string;
}

export default function HeroBio({ intro, highlight, outro }: HeroBioProps) {
    
    // Logika wycięcia pierwszej litery (zabezpieczona przed pustym stringiem)
    const firstLetter = intro ? intro.charAt(0) : "";
    const restOfIntro = intro ? intro.slice(1) : "";

    return (
        <div className="relative size-full overflow-hidden bg-neutral-900 rounded-xl">
            
            {/* === TŁO === */}
            
            {/* 1. Ikona Piłki */}
            <motion.div 
                className="absolute -left-15 -bottom-1/4 text-orange-500/40 will-change-transform"
                variants={ballVariants}
                initial="hidden"
                animate="visible"
            >
                <Icon name="Basketball" className="text-[clamp(1.5rem,8rem+5vw,15rem)]" />
            </motion.div>

            {/* 2. Zdjęcie tła */}
            <motion.div 
                className="absolute -right-1/8 top-0 w-3/4 h-full opacity-30 will-change-[filter]"
                variants={bgImageVariants}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src="/postprime-hero.png"
                    alt="Background"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 30vw, 15vw"
                />
            </motion.div>

            {/* 3. Lampa */}
            <div className="absolute -top-3 left-1/4 z-10 pointer-events-none">
                <Lamp length="short" />
            </div>

            {/* === TREŚĆ === */}
            <motion.div 
                className="relative z-10 flex flex-col justify-center size-full p-4 bg-neutral-800/30 backdrop-blur-[1.5px] text-gray-50 md:p-6  will-change-[opacity]"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <p className="font-semibold text-justify leading-relaxed md:leading-6 tracking-wide text-[clamp(0.5rem,0.5rem+0.4vw,2rem)]">
                    
                    {/* DROP CAP */}
                    <span className="float-left text-xl md:text-3xl lg:text-[2.5rem] font-black leading-1.5 md:leading-2 lg:leading-3 font-playfair text-orange-500/90 font-sans">
                        {firstLetter}
                    </span>

                    {/* Reszta tekstu */}
                    {restOfIntro}
                    
                    <span className="font-bold text-orange-500">
                        {highlight}
                    </span>
                    
                    {outro}
                </p>
            </motion.div>
        </div>
    );
}