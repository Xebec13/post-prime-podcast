"use client";

import { useState} from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export const SPOTLIGHT_CONFIG = [
    { id: 0, color: "bg-orange-500/70", translateX: "0%",   scaleX: 1 }, 
    { id: 1, color: "bg-gray-500/70", translateX: "100%", scaleX: 1 }, 
    { id: 2, color: "bg-red-500/70", translateX: "200%", scaleX: 1 }, 
    { id: 3, color: "bg-blue-500/70", translateX: "300%", scaleX: 1 }, 
    { id: 4, color: "bg-fuchsia-600/70", translateX: "400%", scaleX: 1 }, 
    { id: 5, color: "bg-orange-500/70", translateX: "500%", scaleX: 1 }, 
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
        if (typeof window === "undefined") return;

        // 1. Sprawdzenie dołu strony (z tolerancją 20px)
        const isBottom = window.innerHeight + latest >= document.body.scrollHeight - 20;
        if (isBottom) {
            setActiveIndex(SECTION_MAP["footer"]);
            return;
        }

        // 2. Wyznaczanie aktywnej sekcji
        const viewportMiddle = latest + (window.innerHeight / 3);
        let foundSectionId = "home";

        // Iterujemy od końca, aby poprawnie wyłapać nakładające się sekcje
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const id = SECTIONS[i];
            const element = document.getElementById(id);
            
            if (element) {
                const top = element.offsetTop;
                // Sprawdzamy czy środek viewportu jest poniżej góry sekcji
                if (viewportMiddle >= top) {
                    foundSectionId = id;
                    break;
                }
            }
        }

        const newIndex = SECTION_MAP[foundSectionId];
        if (newIndex !== undefined && newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    });

    // Używamy stylu hover, jeśli myszka jest nad navbarem, w przeciwnym razie styl scrolla
    const currentStyleIndex = hoverIndex !== null ? hoverIndex : activeIndex;
    const activeStyle = SPOTLIGHT_CONFIG[currentStyleIndex] || SPOTLIGHT_CONFIG[0];

    return {
        activeStyle,
        setHoverIndex
    };
}