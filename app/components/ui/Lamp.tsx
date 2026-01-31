"use client";

import { motion } from "motion/react";

interface LampProps {
    length?: "short" | "long";
    className?: string;
}

export default function HeroLamp({ length = "short", className = "" }: LampProps) {
    const cableHeight = length === "long" ? "h-[clamp(4rem,9vw,8rem)]" : "h-[clamp(2.5rem,5.5vw,5rem)]";

    return (
        <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0, rotate: [0, 2, 0, -2, 0] }}
            transition={{
                y: { duration: 1, ease: "easeOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            style={{ transformOrigin: "top center" }}
            className={`relative flex flex-col items-center z-10 ${className} will-change-transform`}
        >
            {/* KABEL */}
            <div className={`w-0.5 bg-neutral-800 shadow-xl ${cableHeight}`} />

            {/* OPRAWA */}
            <div className="
                w-[clamp(0.8rem,1.5vw,2rem)]
                h-[clamp(1.5rem,1vw,2rem)]
                bg-neutral-900 rounded-b-lg
                border-b-2 border-orange-500/70 shadow-lg
                relative flex justify-center
            ">
                {/* ŚWIATŁO (Stożek bez ostrych krawędzi) */}
                <motion.div 
                    className="
                        absolute top-[90%] 
                        w-[clamp(6rem,20vw,14rem)] h-[clamp(6rem,20vw,15rem)]
                        bg-linear-to-b from-orange-400/40 via-orange-500/5 to-transparent
                        /* Używamy rounded-[100%] zamiast full, żeby rozmyć boki */
                        rounded-[100%] blur-2xl
                        pointer-events-none will-change-[opacity,transform]
                    "
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: [0, 1, 1, 1, 1, 0.2, 1, 0, 1, 0.5, 1, 1, 1] 
                    }}
                    transition={{
                        duration: 10,
                        times: [0, 0.02, 0.02, 0.7, 0.75, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.87, 1],
                        repeat: Infinity,
                        delay: 1.2
                    }}
                />
            </div>
        </motion.div>
    );
}