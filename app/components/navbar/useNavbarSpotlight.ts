"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

// === KONFIGURACJA STYLI ===
// Usunięto 'textColor', ponieważ kolor tekstu aktywnego elementu jest teraz globalny (text-neutral-950)
export const SPOTLIGHT_CONFIG = [
    { id: 0, color: "bg-orange-500/90", translateX: "0%",   scaleX: 1 }, 
    { id: 1, color: "bg-orange-500/70", translateX: "100%", scaleX: 1 }, 
    { id: 2, color: "bg-red-500/60", translateX: "200%", scaleX: 1 }, 
    { id: 3, color: "bg-blue-500/50", translateX: "300%", scaleX: 1 }, 
    { id: 4, color: "bg-fuchsia-600/40", translateX: "400%", scaleX: 1 }, 
    { id: 5, color: "bg-neutral-400/30", translateX: "500%", scaleX: 1 }, 
];

const SECTIONS = ["home", "about", "youtube", "facebook", "instagram", "footer"];

const SECTION_MAP: Record<string, number> = {
    "home": 0, "about": 1, "youtube": 2, "facebook": 3, "instagram": 4, "footer": 5
};

export function useNavbarSpotlight() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        // 1. Sprawdzenie, czy jesteśmy na samym dole strony
        const isBottom = window.innerHeight + latest >= document.body.offsetHeight - 10;

        if (isBottom) {
            setActiveIndex(SECTION_MAP["footer"]);
            return;
        }

        // 2. Standardowe śledzenie sekcji
        const viewportMiddle = latest + (window.innerHeight / 3);
        let currentSectionId = "home";

        for (const id of SECTIONS) {
            const element = document.getElementById(id);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetBottom = offsetTop + element.offsetHeight;
                if (viewportMiddle >= offsetTop && viewportMiddle < offsetBottom) {
                    currentSectionId = id;
                    break;
                }
            }
        }

        if (SECTION_MAP[currentSectionId] !== undefined) {
            setActiveIndex(SECTION_MAP[currentSectionId]);
        }
    });

    const currentStyleIndex = hoverIndex !== null ? hoverIndex : activeIndex;
    const activeStyle = SPOTLIGHT_CONFIG[currentStyleIndex] || SPOTLIGHT_CONFIG[0];

    return {
        activeStyle,
        currentStyleIndex,
        setHoverIndex
    };
}