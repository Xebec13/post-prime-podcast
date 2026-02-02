"use client";

import { motion, Variants } from "motion/react";

interface SlideTypeProps {
    text?: string;           
    highlight?: string;     
    className?: string;     
    highlightColor?: string;
    delay?: number;        
}

// 1. Litera
const letterVariants: Variants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
        opacity: 1, 
        display: "inline-block",
        transition: { duration: 0 } 
    }
};

// 2. Kontener liter
const textContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.5     // Czeka aż pasek wjedzie
        }
    }
};

// 3. Wjazd paska
const boxVariants: Variants = {
    hidden: { x: "-100%" },
    visible: { 
        x: "0%", 
        transition: { 
            duration: 0.5, 
            ease: "circOut" 
        } 
    }
};

export default function SlideType({ 
    text = "", 
    highlight = "", 
    className = "", 
    highlightColor = "text-orange-500",
    delay = 0
}: SlideTypeProps) {
    
    const textChars = text.split("");
    const highlightChars = highlight.split("");

    return (
        // Wrapper overflow-hidden jest tutaj, więc nie potrzebujesz go w rodzicu
        <div className="overflow-hidden inline-block align-bottom">
            <motion.div
                // USUNIĘTO: initial, whileInView, viewport (teraz słucha rodzica!)
                variants={boxVariants}
                transition={{ delay }} 
                className={`flex items-center ${className}`}
            >
                <motion.span variants={textContainerVariants} className="whitespace-pre">
                    
                    {textChars.map((char, index) => (
                        <motion.span key={`t-${index}`} variants={letterVariants}>
                            {char}
                        </motion.span>
                    ))}

                    {highlightChars.length > 0 && highlightChars.map((char, index) => (
                        <motion.span key={`h-${index}`} variants={letterVariants} className={highlightColor}>
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.div>
        </div>
    );
}