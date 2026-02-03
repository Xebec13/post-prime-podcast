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

export default function SocialTitle({ title, brandColor }: { title: string, brandColor: string }) {
    return (
        <motion.div 
            className="w-full flex flex-col items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="long" color="bg-neutral-500"/>
                <Separator width="mid" color={brandColor} />
            </div>

            <div className="my-10">
                <SlideType 
                    text={title}
                    className={`font-playfair min-h-[3ch] text-gray-50 font-black ${brandColor} text-[clamp(1rem,1.2rem+0.9vw,3rem)] px-10 py-1 tracking-tighter shadow-xl`} 
                />
            </div>

            <div className="flex flex-col items-center gap-2.5 w-full">
                <Separator width="mid" color={brandColor} />
                <Separator width="long" color="bg-neutral-600" />
            </div>
        </motion.div>
    );
}