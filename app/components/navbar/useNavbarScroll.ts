"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export function useNavbarScroll() {
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() || 0;
        const diff = current - previous;

        // 1. Zawsze pokazuj na samej górze (< 50px)
        if (current < 50) {
            setIsVisible(true);
        } 
        // 2. Schowaj, jeśli scrollujesz w DÓŁ (> 10px diff)
        else if (diff > 10) {
            setIsVisible(false);
        } 
        // 3. Pokaż, jeśli scrollujesz w GÓRĘ (< -10px diff)
        else if (diff < -10) {
            setIsVisible(true);
        }
    });

    return isVisible;
}