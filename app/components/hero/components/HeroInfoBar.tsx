"use client";

import { motion, Variants } from "motion/react";
import Separator from "../../ui/Separators";
import ScrollReveal from "../../ui/ScrollReveal"; // Importujemy Twój nowy komponent

export default function HeroInfoBar() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric"
    });

    // Zostawiamy tylko warianty dla tekstu - ScrollReveal zajmie się resztą
    const textVariants: Variants = {
        hidden: { y: 20, opacity: 0, scale: 0.95 },
        visible: { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <ScrollReveal 
            amount={0.3} 
            stagger={0.15}
            // Możemy przekazać bazowe warianty opcji, jeśli chcemy nadpisać domyślny fadeUp
            className="relative w-full overflow-hidden flex flex-col items-center justify-center"
        >
            {/* 1. LINIE GÓRNE - automatycznie dostaną stagger z ScrollReveal */}
            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="long" color="bg-neutral-600" />
                <Separator width="mid" color="bg-neutral-600" />
            </div>

            {/* 2. TREŚĆ - używa własnych textVariants, ale wyzwalanych przez rodzica */}
            <motion.div 
                variants={textVariants} 
                className="flex items-center flex-col md:flex-row justify-center gap-4 w-full px-4 my-5 lg:my-10"
            >
                <div className="bg-orange-500/90 text-neutral-950 font-black text-[clamp(1rem,1.2rem+0.9vw,3rem)] px-6 py-1 capitalize tracking-tighter shadow-xl shrink-0 italic">
                    {formattedDate}
                </div>

                <h3 className="text-gray-50 font-black uppercase italic tracking-tighter text-[clamp(1rem,1.1rem+0.9vw,2.5rem)] whitespace-nowrap">
                    Last news from <span className="text-orange-500/90">Post Prime</span>
                </h3>
            </motion.div>

            {/* 3. LINIE DOLNE */}
            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="min" color="bg-neutral-700" />
                <Separator width="long" color="bg-neutral-700" />
            </div>
        </ScrollReveal>
    );
}