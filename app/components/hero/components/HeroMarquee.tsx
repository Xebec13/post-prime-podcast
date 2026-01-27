"use client";

import { motion } from "motion/react";
import Icon from "../../ui/Icon";

interface HeroMarqueeProps {
    title: string[];
    className?: string;
}

export default function HeroMarquee({ title, className = "" }: HeroMarqueeProps) {
    // Czas trwania wejścia (slide down)
    const ENTER_DURATION = 1;
    const ENTER_DELAY = 0.2;

    return (
        <div className={`size-full overflow-hidden ${className}`}>
            
            {/* 1. KONTENER ANIMOWANY (Slide left: -100% -> 0) */}
            <motion.div 
                className="size-full flex items-center"
                initial={{ x: "100%" }} // Startujemy schowani u góry (slide-left)
                animate={{ x: 0 }}       // Zjeżdżamy na miejsce
                transition={{ 
                    duration: ENTER_DURATION, 
                    ease: [0.33, 1, 0.68, 1], 
                    delay: ENTER_DELAY 
                }}
            >

                {/* 2. PĘTLA MARQUEE */}
                <motion.div 
                    className="flex items-center whitespace-nowrap tracking-tighter font-bold uppercase text-inherit text-[clamp(1.5rem,2.25rem+1.5vw,4rem)]"
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ 
                        duration: 45, 
                        ease: "linear", 
                        repeat: Infinity,
                        // KLUCZOWE: Startuje dopiero po zakończeniu wejścia rodzica
                        delay: ENTER_DURATION + ENTER_DELAY 
                    }}
                >
                    {[...title, ...title, ...title, ...title].map((word, idx) => (
                        <div key={idx} className="flex items-center gap-5 px-3">
                            <h2>{word}</h2>
                            <Icon 
                                name="Basketball" 
                                size={24}
                                className="text-orange-500 bg-neutral-800 rounded-full" 
                            />
                        </div>
                    ))}
                </motion.div>

            </motion.div>
        </div>
    )
}