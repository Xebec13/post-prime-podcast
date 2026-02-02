"use client";

import { motion, Variants } from "motion/react";
import Separator from "../ui/Separators";
import SlideType from "../ui/SlideType";

interface AboutTitleProps {
    title?: string;
}

// Wariant kontenera, żeby opóźnić start całości lub zsynchronizować dzieci
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Separatory i Tytuł odpalą się kaskadowo
            delayChildren: 0.1
        }
    }
};

export default function AboutTitle({ title = "Autorzy" }: AboutTitleProps) {
    return (
        <motion.div 
            className="w-full flex flex-col items-center justify-center pt-5 px-4"
            variants={containerVariants} // Dodajemy warianty kontenera
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            {/* 1. LINIE GÓRNE */}
            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="long" color="bg-neutral-600" />
                <Separator width="mid" color="bg-neutral-500" />
            </div>

            {/* 2. TREŚĆ (H2) */}
            {/* Usunąłem div overflow-hidden, bo jest już wewnątrz SlideType */}
            <div className="my-10">
                <SlideType 
                    text={title}
                    className="min-h-[3ch] font-playfair text-neutral-950 font-black bg-gray-50 text-[clamp(1rem,1.2rem+0.9vw,3rem)] px-10 py-1 tracking-tighter shadow-xl" 
                />
            </div>

            {/* 3. LINIE DOLNE */}
            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="min" color="bg-neutral-500" />
                <Separator width="long" color="bg-neutral-600" />
            </div>
        </motion.div>
    );
}