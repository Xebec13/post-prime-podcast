
import { Variants } from "motion/react";

export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

export const viewportConfig = {
    once: true,
    amount: 0.2, 
};