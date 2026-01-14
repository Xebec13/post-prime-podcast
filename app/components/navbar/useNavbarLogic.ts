"use client";

import { useState, useEffect } from "react";

// Stałe konfiguracyjne przeniesione tutaj
export const SPOTLIGHT_CONFIG = [
    { id: 0, color: "bg-orange-500", textColor: "text-inherit", translateX: "0%", scaleX: 1 },
    { id: 1, color: "bg-neutral-800", textColor: "text-orange-50", translateX: "100%", scaleX: 2 },
    { id: 2, color: "bg-red-600", textColor: "text-white", translateX: "300%", scaleX: 2 },
    { id: 3, color: "bg-blue-600", textColor: "text-white", translateX: "500%", scaleX: 2 },
    { id: 4, color: "bg-pink-600", textColor: "text-white", translateX: "700%", scaleX: 2 },
];

const SECTIONS = ["home", "about", "youtube", "facebook", "instagram"];

const SECTION_MAP: Record<string, number> = {
    "home": 0, "about": 1, "youtube": 2, "facebook": 3, "instagram": 4
};

export function useNavbarLogic() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // 1. Chowanie/pokazywanie navbara
            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);

            // 2. Śledzenie sekcji (Active Section)
            const viewportMiddle = currentScrollY + (window.innerHeight / 3);
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
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Obliczamy aktywny styl
    const currentStyleIndex = hoverIndex !== null ? hoverIndex : activeIndex;
    const activeStyle = SPOTLIGHT_CONFIG[currentStyleIndex];

    return {
        isVisible,
        activeStyle,    // Obiekt ze stylami (color, translate, scale...)
        currentStyleIndex, // Indeks (potrzebny do porównania z linkiem)
        setHoverIndex   // Funkcja do obsługi onMouseEnter/Leave
    };
}