"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Lamp from "../../ui/Lamp";

interface HeroLogoProps {
  className?: string;
  logoSrc: string;
}

export default function HeroLogo({ className = "", logoSrc }: HeroLogoProps) {
  
  const lightVariants = {
    off: { opacity: 0 },
    on: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 }
    }
  };

  const logoRevealVariants = {
    off: { 
      
      filter: "brightness(0) drop-shadow(0 0 0 rgba(0,0,0,0))" 
    },
    on: { 
      
      filter: "brightness(1) drop-shadow(0 12px 28px rgba(234, 88, 12, 0.35))", 
      transition: { duration: 0.3, delay: 0.3 }
    }
  };

  return (
    <div className={`relative size-full overflow-hidden bg-neutral-900 ${className}`}>
      
      {/* 1. TŁO I PARKIET */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pp-wooden-floor.jpg"
          alt="Wooden Floor Texture"
          sizes="(max-width: 1020px) 100vw, 100vw"
          fill
          priority
          className="object-cover opacity-40 brightness-50"
        />
        
        {/* Twoje światło gradientowe */}
        <motion.div 
            className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-neutral-950/90"
            variants={lightVariants}
            initial="off"
            animate="on"
        />
      </div>

      {/* 2. LAMPY */}
      <div className="absolute inset-0 -top-5 z-10 flex justify-evenly md:justify-around gap-5 pointer-events-none md:top-0">
        <Lamp length="short" />
        <Lamp length="long" />
      </div>

      {/* 3. LOGO I ODBICIE */}
      <div className="relative z-20 flex flex-col items-center justify-center size-full">
        
        {/* LOGO GŁÓWNE */}
        <motion.div
          className="relative w-full h-full md:h-3/4 lg:h-2/3"
          variants={logoRevealVariants}
          initial="off"
          animate="on"
        >
            <motion.div
                className="relative size-full opacity-80"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image
                    src={logoSrc}
                    alt="Post Prime Logo"
                    fill
                    sizes="(max-width: 1020px) 50vw, 100vw"
                    className="object-contain"
                    priority
                />
            </motion.div>
        </motion.div>

        {/* ODBICIE */}
        <motion.div
          className="relative w-full h-1/3"
          variants={logoRevealVariants} 
          initial="off"
          animate="on"
        >
             <motion.div
                className="relative size-full opacity-50 blur-[1.5px]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={logoSrc}
                alt="reflection"
                sizes="(max-width: 1020px) 50vw, 33vw"
                fill
                className="object-contain scale-y-[-1]"
              />
              {/* Używamy standardowego gradientu dla pewności działania w TW4 */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/80 to-transparent" />
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}