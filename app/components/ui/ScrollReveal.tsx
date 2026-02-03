"use client";

import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    amount?: number;
    className?: string;
    stagger?: number;
    yOffset?: number;
}

export default function ScrollReveal({ 
    children, 
    amount = 0.2,
    className = "",
    stagger = 0.1,
    yOffset = 40
}: ScrollRevealProps) {
    
    // Definiujemy warianty bezpośrednio tutaj - to gwarantuje pełne typowanie
    const combinedVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: yOffset 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: stagger // Tutaj TS nie protestuje, bo to czysty obiekt Variants
            } 
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            variants={combinedVariants}
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );
}