"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export function useNavbarScroll() {
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = current - previous;

        // Smart Navbar Logic
        if (current < 10) {
            setIsVisible(true);
        } else if (diff > 15) { // Ukryj po przewinięciu 15px w dół
            setIsVisible(false);
        } else if (diff < -20) { // Pokaż po przewinięciu 20px w górę (lekki bufor)
            setIsVisible(true);
        }
    });

    return { isVisible, setIsVisible };
}