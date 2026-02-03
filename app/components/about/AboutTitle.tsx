"use client";

import { motion, Variants } from "motion/react";
import Separator from "../ui/Separators";
import SlideType from "../ui/SlideType";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

export default function AboutTitle({ title = "Autorzy" }: { title?: string }) {
    return (
        <motion.div 
            className="relative w-full flex flex-col items-center justify-center pb-10 md:pb-15 px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="long" color="bg-neutral-500" />
                <Separator width="mid" color="bg-neutral-400" />
            </div>

            <div className="my-10">
                <SlideType 
                    text={title}
                    className="min-h-[2.5ch] font-playfair text-white font-black bg-gray-500 text-[clamp(1rem,1.2rem+0.9vw,3rem)] px-10 py-1 shadow-xl" 
                />
            </div>

            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="min" color="bg-neutral-400" />
                <Separator width="long" color="bg-neutral-500" />
            </div>
        </motion.div>
    );
}