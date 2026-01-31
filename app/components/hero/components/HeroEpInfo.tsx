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

// Definiujemy animację: startuje z lewej (-50px) i przezroczystości 0
const infoVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: { duration: 0.8, ease: "easeOut" } 
    }
};

export default function HeroEpInfo({ title, statistics }: HeroEpInfoProps) {
    return (
        <motion.div 
            // Podpinamy warianty (dziedziczą stan hidden/visible od rodzica ScrollReveal)
            variants={infoVariants}
            className="size-full text-inherit flex flex-col justify-between gap-1 p-5"
        >
            <div className="overflow-hidden">
                <p className="text-[clamp(1rem,1rem+0.9vw,3rem)] font-semibold leading-tight">
                    {title}
                </p>
            </div>

            <div className="self-end inline-flex gap-3 text-sm font-medium">
                <div className="inline-flex justify-center items-center gap-1.5 p-1">
                    <span><Icon name="Like" className="text-xs" /></span>
                    <p>
                        {Number(statistics.viewCount).toLocaleString()}
                    </p>
                </div>
                <div className="inline-flex justify-center items-center gap-1.5 p-1">
                    <span><Icon name="View" className="text-xs" /></span>
                    <p>
                        {Number(statistics.likeCount).toLocaleString()}
                    </p>
                </div>
                <div className="inline-flex justify-center items-center gap-1.5 p-1">
                    <span><Icon name="Comment" className="text-xs" /></span>
                    <p>
                        {Number(statistics.commentCount).toLocaleString()}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}