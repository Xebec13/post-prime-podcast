"use client";

import { motion, Variants } from "motion/react";

// Jawnie definiujemy typ Variants, aby TS nie zgłaszał błędu przy przypisaniu
export const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

interface SeparatorProps {
    width?: "long" | "mid" | "min";
    color?: string;
    className?: string;
}

const widthMap = {
    long: "w-3/4",
    mid: "w-1/2",
    min: "w-1/4",
};

export default function Separator({ width = "long", color = "bg-white", className = "" }: SeparatorProps) {
    return (
        <motion.div
            variants={lineVariants}
        
            className={`${widthMap[width]} ${color} relative h-[1.5px] will-change-transform origin-center ${className}`}
        />
    );
}