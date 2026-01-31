"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function NavbarAnimation({ children, isVisible }: { children: ReactNode, isVisible: boolean }) {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ 
                duration: 0.8, // Krótszy czas dla lepszego feelingu
                ease: [0.22, 1, 0.36, 1] 
            }}
            className="fixed top-0 left-0 z-50 w-full will-change-transform"
        >
            {children}
        </motion.div>
    );
}