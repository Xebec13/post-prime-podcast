"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

// Uprościliśmy tablicę - teraz to po prostu lista ścieżek do plików
const ads: string[] = [
  "/pp-fund.jpg",       
  "/pp-wba.png",                             
  "/pp-obl.jpg",       
  "/pp-ad.jpg",                              
];

export default function HeroAd() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canRotate, setCanRotate] = useState(false);

  useEffect(() => {
    if (!canRotate) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [canRotate]);

  const currentSrc = ads[currentIndex];

  return (
    <div className="relative size-full overflow-hidden group bg-neutral-900">
      
      {/* 1. WRAPPER ANIMACJI WEJŚCIA (Wjazd z góry) */}
      <motion.div
        className="relative size-full"
        initial={{ y: "-100%", opacity: 100 }} // opacity 100 dla pewności
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        onAnimationComplete={() => setCanRotate(true)}
      >

          {/* NALEPKA */}
          <div className="absolute top-2 right-2 z-30 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white/50 uppercase tracking-wider border border-white/10">
            Partners
          </div>

          {/* KARUZELA REKLAM */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative size-full flex items-center justify-center"
            >
                {/* WARSTWA 1: TŁO (Rozmyte + Przyciemnione) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image 
                        src={currentSrc}
                        alt="Background blur"
                        fill
                        // scale-110 zapobiega białym krawędziom przy blurze
                        // brightness-50 przyciemnia tło, żeby jasne loga były widoczne
                        className="object-cover blur-xl scale-110 brightness-[0.4]"
                    />
                </div>

                {/* WARSTWA 2: GŁÓWNA GRAFIKA */}
                {/* Dodajemy padding p-4, żeby logo/reklama nie dotykała krawędzi */}
                <div className="relative z-10 size-3/4 p-6">
                    <Image
                        src={currentSrc}
                        alt="Reklama partnera"
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 1020px) 100vw, 100vw"
                    />
                </div>

            </motion.div>
          </AnimatePresence>

      </motion.div>
    </div>
  );
}