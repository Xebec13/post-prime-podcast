"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function NavbarAnimation({ children, isVisible }: { children: ReactNode, isVisible: boolean }) {
    return (
        <motion.nav
            // 1. Animacja wejściowa (Initial Load)
            initial={{ y: -100 }}
            animate={{ 
                y: isVisible ? 0 : -100, 
            }}
            transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1] 
            }}
            className="font-archivo fixed top-0 left-0 z-50 w-full h-10 bg-orange-50 text-inherit outline-2"
        >
            {children}
        </motion.nav>
    );
}