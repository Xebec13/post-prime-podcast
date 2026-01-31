"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type AdItem = {
  src: string;
  bgColor?: string;
};

const ads: AdItem[] = [
  { src: "/pp-fund.jpg", bgColor: "bg-white" },       
  { src: "/pp-wba.png" },                             
  { src: "/pp-obl.jpg", bgColor: "bg-white" },       
  { src: "/pp-ad.jpg" },                              
];

export default function HeroAd() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canRotate, setCanRotate] = useState(false); // Flaga zezwalająca na rotację

  
  useEffect(() => {
    if (!canRotate) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [canRotate]);

  const currentAd = ads[currentIndex];

  return (
    <div className="relative size-full overflow-hidden group bg-neutral-900">
      
      {/* 1. WRAPPER ANIMACJI WEJŚCIA */}
      <motion.div
        className="relative size-full"
        initial={{ y: "-100%",opacity:100 }}
        animate={{ y: 0,opacity:100 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        
        // MOTION WAY: Odpalamy timer po zakończeniu animacji wejścia
        onAnimationComplete={() => setCanRotate(true)}
      >

          {/* NALEPKA */}
          <div className="absolute top-2 right-2 z-30 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white/50 uppercase tracking-taper">
            Ad/Test
          </div>

          {/* KARUZELA */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative size-full flex items-center justify-center drop-shadow-xl"
            >
                {/* TŁO */}
                {currentAd.bgColor ? (
                    <div className={`absolute inset-0 z-0 ${currentAd.bgColor}`} />
                ) : (
                    <>
                        <div 
                            className="absolute inset-0 z-0 bg-cover bg-center blur-lg scale-110 opacity-60"
                            style={{ backgroundImage: `url(${currentAd.src})` }}
                        />
                        <div className="absolute inset-0 z-0 " />
                    </>
                )}

                {/* ZDJĘCIE */}
                <div className="relative z-10 size-full max-h-[90%]">
                    <Image
                        src={currentAd.src}
                        alt={`Reklama`}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

            </motion.div>
          </AnimatePresence>

      </motion.div>
    </div>
  );
}