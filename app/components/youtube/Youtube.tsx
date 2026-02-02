"use client";

import YoutubePlayer from "./YoutubePlayer";
import YoutubeList from "./YoutubeList";
import YoutubeTitle from "./YoutubeTitle";
import { SmartLinkLg } from "../ui/SmartLinks"; // Importujemy SmartLink

export default function YouTube() {
    return (
        <section id="youtube"
        
        className="relative w-full space-y-6 lg:space-y-10 pb-10 bg-neutral-900/50">

            {/* 1. NAGŁÓWEK SEKCJI */}
            <YoutubeTitle title="YouTube" />

            {/* 2. PLAYER I LISTA */}
            <div className="space-y-8 lg:space-y-12">
                
                {/* Główny Player */}
                <div className="w-full px-5">
                    <YoutubePlayer />
                </div>

                {/* Lista pozostałych filmów */}
                <div 
                
                className="w-full px-5 md:px-10 relative bg-bottom bg-cover">
                    
                    <YoutubeList />
                </div>
            </div>

            {/* 3. SMART LINK (Przycisk do kanału) */}
            {/* Mobile: Flex center na dole z paddingiem.
                Desktop: Absolute bottom-right (jak w About), kolor neutralny -> hover czerwony 
            */}
            <div className="flex px-5 justify-end relative right-5 z-10 text-gray-50 transition-colors hover:text-white">
                <SmartLinkLg 
                    text="odwiedź kanał" 
                    href="https://www.youtube.com/@PostPrimePL" // Tutaj wstaw właściwy link
                    isExternal={true}
                />
            </div>

        </section>
    );
}