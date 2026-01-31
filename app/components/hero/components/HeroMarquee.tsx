"use client";

import { motion } from "motion/react";
import Icon from "../../ui/Icon";

interface HeroMarqueeProps {
    title: string[];
    className?: string;
    direction?: "left" | "right";
}

export default function HeroMarquee({ title, className = "", direction = "left" }: HeroMarqueeProps) {
    const ENTER_DURATION = 1.2;
    const ENTER_DELAY = 0.2;
    const isRight = direction === "right";

   
    const doubleTitle = [...title, ...title];

    return (
        <div className={`flex items-center size-full overflow-hidden select-none ${className}`}>
            
            {/* KONTENER WEJŚCIA */}
            <motion.div 
                className={`flex items-center w-full h-full ${isRight ? "scale-x-[-1]" : ""} will-change-transform`}
                initial={{ x: "100%" }} 
                animate={{ x: 0 }}
                transition={{ duration: ENTER_DURATION, ease: [0.25, 1, 0.5, 1], delay: ENTER_DELAY }}
            >
                {/* PĘTLA MARQUEE */}
                <motion.div 
                    className="flex items-center gap-8 whitespace-nowrap font-black uppercase text-[clamp(1.25rem,1.5rem+1vw,3rem)] tracking-tighter will-change-transform"
                    initial={{ x: "0%" }}
                    animate={{ x: "-50%" }}
                    transition={{ 
                        duration: 30, // Znacznie przyspieszyłem (120s to prawie bezruch)
                        ease: "linear", 
                        repeat: Infinity, 
                        // Brak delay tutaj sprawi, że pętla ruszy od razu po wjeździe całego paska
                    }}
                >
                    {/* Renderujemy zestaw dwa razy */}
                    {doubleTitle.map((word, idx) => (
                        <div 
                            key={`${word}-${idx}`} 
                            className={`flex items-center gap-8 ${isRight ? "scale-x-[-1]" : ""}`}
                        >
                            <span className="inline-block">{word}</span>
                            <Icon 
                                name="Basketball" 
                                className="text-orange-500 text-[0.7em] shrink-0" 
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}