"use client";

import { useState, useEffect } from "react";

// === KONFIGURACJA Z GRADIENTEM TEKSTU ===
// Tło bloba (color) jest zawsze bg-neutral-900.
// textColor to teraz klasy gradientu.
export const SPOTLIGHT_CONFIG = [
    { 
        id: 0, 
        color: "bg-neutral-900", // ZAWSZE CZARNY BLOB
        textColor: "text-transparent bg-clip-text bg-gradient-to-r from-orange-600/90 to-orange-300", // Gradient Orange
        translateX: "0%",   
        scaleX: 1 
    }, 
    { 
        id: 1, 
        color: "bg-neutral-900", 
        textColor: "text-transparent bg-clip-text bg-gradient-to-r from-orange-50 to-white", // Gradient Jasny Orange/Biały
        translateX: "100%", 
        scaleX: 1 
    }, 
    { 
        id: 2, 
        color: "bg-neutral-900", 
        textColor: "text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400", // Gradient Red (YT)
        translateX: "200%", 
        scaleX: 1 
    }, 
    { 
        id: 3, 
        color: "bg-neutral-900", 
        textColor: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300", // Gradient Blue (FB)
        translateX: "300%", 
        scaleX: 1 
    }, 
    { 
        id: 4, 
        color: "bg-neutral-900", 
        textColor: "text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500", // Gradient Instagram
        translateX: "400%", 
        scaleX: 1 
    }, 
    { 
        id: 5, 
        color: "bg-neutral-900", 
        textColor: "text-white", // Dla ikony gradient może nie działać (SVG), więc zostawiamy biały lub kolor fill
        translateX: "500%", 
        scaleX: 0.5 
    }, 
];

const SECTIONS = ["home", "about", "youtube", "facebook", "instagram", "footer"];

const SECTION_MAP: Record<string, number> = {
    "home": 0, "about": 1, "youtube": 2, "facebook": 3, "instagram": 4, "footer": 5
};

export function useNavbarSpotlight() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleSectionTracking = () => {
            const currentScrollY = window.scrollY;
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

        window.addEventListener("scroll", handleSectionTracking, { passive: true });
        handleSectionTracking();

        return () => window.removeEventListener("scroll", handleSectionTracking);
    }, []);

    const currentStyleIndex = hoverIndex !== null ? hoverIndex : activeIndex;
    const activeStyle = SPOTLIGHT_CONFIG[currentStyleIndex] || SPOTLIGHT_CONFIG[0];

    return {
        activeStyle,
        currentStyleIndex,
        setHoverIndex
    };
}