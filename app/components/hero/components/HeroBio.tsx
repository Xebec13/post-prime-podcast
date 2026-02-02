"use client";

import Image from "next/image";
import Icon from "../../ui/Icon";
import Lamp from "../../ui/Lamp"; // Import lampy
import { motion } from "motion/react";

const bioParts = [
    "o najlepszych latach odległej już młodości, zaorani przez dorosłość i obowiązki oraz po latach pisania dla czołowych tytułów dotyczących amerykańskiej koszykówki w Polsce, ",
    "Wooden, Marcin, Piotrek",
    " postanowili zrobić coś razem. Piszemy tak jak zawsze chcieliśmy, piszemy w swoim tempie. Chcemy pisać dobrze. Robić coś wyjątkowego. Żyć basketem. I chcemy przy tym dobrej zabawy. Dla siebie i dla Ciebie Czytelniku!"
];

const firstLetter = "P";

export default function HeroBio() {
    return (
        <div className="relative size-full overflow-hidden bg-neutral-900 rounded-xl">
            
            {/* === TŁO (DODANE ELEMENTY) === */}
            
            {/* 2. Ikona Piłki po lewej */}
            <motion.div 
                className="absolute -left-15 -bottom-1/4 text-orange-500/40 will-change-transform "
                initial={{ y: 30, rotate: -30, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Icon name="Basketball" className="text-[clamp(1.5rem,8rem+5vw,15rem)]" />
            </motion.div>

            {/* 1. Zdjęcie po prawej */}
            <motion.div 
                className="absolute -right-1/8 top-0 w-3/4 h-full opacity-30 will-change-[filter]"
                initial={{ filter: "brightness(0) blur(0px)" }}
                animate={{ filter: "brightness(1) blur(1.5px)" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            >
                <Image
                    src="/postprime-hero.png"
                    alt="Background"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 30vw, 15vw"
                />
            </motion.div>

            {/* 3. LAMPA (Dekoracja) */}
            {/* Pozycjonowana absolutnie u góry, np. po prawej stronie, nad zdjęciem */}
            <div className="absolute -top-3 left-1/4 z-10 pointer-events-none">
                <Lamp length="short" />
            </div>


            {/* === PANEL TEKSTOWY === */}
            <motion.div 
                className="relative z-10 flex flex-col justify-center size-full p-4 bg-neutral-800/30 backdrop-blur-[1.5px] text-gray-50 md:p-6 overflow-hidden will-change-[opacity]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.5, 
                    delay: 0.8 
                }}
            >
                <p className="font-semibold text-justify leading-4 md:leading-5 lg:leading-7 tracking-wide text-[clamp(0.45rem,0.5rem+0.5vw,2rem)]">
                    
                    {/* DROP CAP */}
                    <span className="float-left text-xl md:text-3xl lg:text-[2.5rem] font-black leading-1.5 md:leading-1 lg:leading-3 font-playfair text-orange-500/90 font-sans">
                        {firstLetter}
                    </span>

                    {/* Reszta tekstu */}
                    {bioParts[0]}
                    <span className="font-bold text-orange-500">{bioParts[1]}</span>
                    {bioParts[2]}
                </p>
            </motion.div>
        </div>
    );
}