"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export function useNavbarScroll() {
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() || 0;
        const diff = current - previous;

        if (current < 50) {
            setIsVisible(true);
        } else if (diff > 10) {
            setIsVisible(false);
        } else if (diff < -10) {
            setIsVisible(true);
        }
    });

    // Zwracamy obiekt { isVisible, setIsVisible } zamiast samej wartości
    return { isVisible, setIsVisible };
}