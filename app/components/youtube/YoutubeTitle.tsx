"use client";

import { motion, Variants } from "motion/react";
import Separator from "../ui/Separators";
import SlideType from "../ui/SlideType";

interface YoutubeTitleProps {
    title?: string;
}

// Ten sam kontener orkiestrujący animację co w About
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

export default function YoutubeTitle({ title = "YouTube" }: YoutubeTitleProps) {
    return (
        <motion.div 
            className="w-full flex flex-col items-center justify-center "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            {/* 1. LINIE GÓRNE */}
            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="long" color="bg-neutral-600" />
                <Separator width="mid" color="bg-neutral-500" />
            </div>

            {/* 2. TREŚĆ */}
            <div className="my-10">
                <SlideType 
                    text={title}
                    // ZMIANA: Czerwone tło + Biały tekst
                    className="font-playfair text-gray-50 font-black bg-red-500/90 text-[clamp(1rem,1.2rem+0.9vw,3rem)] px-10 py-1 tracking-tighter shadow-xl" 
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