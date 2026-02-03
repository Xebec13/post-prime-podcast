"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface HeroAdProps {
  images: string[];
}

export default function HeroAd({ images }: HeroAdProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canRotate, setCanRotate] = useState(false);

  
  useEffect(() => {
    
    if (!canRotate || !images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [canRotate, images]); // Dodaliśmy 'images' do tablicy zależności

  
  if (!images || images.length === 0) return null;

  const currentSrc = images[currentIndex];

  return (
    <div className="relative size-full overflow-hidden group bg-neutral-900">
      
      {/* WRAPPER ANIMACJI WEJŚCIA */}
      <motion.div
        className="relative size-full"
        initial={{ y: "-100%", opacity: 100 }} 
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        onAnimationComplete={() => setCanRotate(true)}
      >
          {/* LABEL */}
          <div className="absolute top-2 right-2 z-30 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white/50 uppercase tracking-wider border border-white/10">
            Partners
          </div>

          {/* KARUZELA */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative size-full flex items-center justify-center"
            >
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image 
                        src={currentSrc}
                        alt="Ad Background"
                        fill
                        className="object-cover blur-xl scale-110 brightness-[0.4]"
                    />
                </div>

                <div className="relative z-10 size-3/4 p-6">
                    <Image
                        src={currentSrc}
                        alt="Partner Logo"
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 1020px) 100vw, 50vw"
                    />
                </div>
            </motion.div>
          </AnimatePresence>
      </motion.div>
    </div>
  );
}