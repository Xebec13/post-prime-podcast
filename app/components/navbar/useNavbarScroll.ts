"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export function useNavbarScroll() {
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (current) => {
        // Zabezpieczenie dla SSR
        if (typeof window === "undefined") return;

        const previous = scrollY.getPrevious() ?? 0;
        const diff = current - previous;

        // 1. Zawsze pokazuj na samej górze
        if (current < 50) {
            setIsVisible(true);
            return;
        }

        // 2. Histereza - dodajemy margines błędu, żeby navbar nie "wariował"
        // Ukryj tylko jeśli przewinięto w dół o więcej niż 10px
        if (diff > 10) {
            setIsVisible(false);
        } 
        // Pokaż tylko jeśli przewinięto w górę o więcej niż 15px
        else if (diff < -15) {
            setIsVisible(true);
        }
    });

    return { isVisible };
}