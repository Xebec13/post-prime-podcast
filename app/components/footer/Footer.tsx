"use client";

import { motion } from "motion/react"; // Importujemy motion
import FooterForm from "./FooterForm";
import FooterIcons from "./FooterIcons";
import FooterInfo from "./FooterInfo";
import FooterLogo from "./FooterLogo";
import Lamp from "../ui/Lamp";
import Icon from "../ui/Icon"; // Importujemy Ikonę

export default function Footer() {
    return (
        <footer
            id="footer"
            className="relative overflow-hidden min-h-[50vh] flex flex-col p-6 sm:p-8 gap-4 bg-neutral-900 border-t-2 border-orange-500"
        >
            {/* === 1. DEKORACJA: LAMPY (GÓRA) === */}
            <div className="absolute top-0 inset-x-0 w-full flex justify-between px-[10%] md:px-[15%] pointer-events-none z-0">
                <Lamp length="long" className="relative -top-5" /> 
                <Lamp length="short" className="-mt-0.5" />
            </div>

            {/* === 2. DEKORACJA: PIŁKA (LEWY DÓŁ) === */}
            {/* Używamy 'whileInView', żeby piłka wjechała dopiero jak zobaczymy stopkę */}
            <motion.div 
                className="absolute -left-10 bottom-0 md:-left-25 md:-bottom-25 text-orange-500/30 pointer-events-none z-0"
                initial={{ x: -100, rotate: -90, opacity: 0 }}
                whileInView={{ x: 0, rotate: -15, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }} // Animacja odpali się raz
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Gigantyczna ikona jako tło */}
                <Icon name="Basketball" className="size-20 md:size-100 lg:size-120" />
            </motion.div>


            {/* === 3. ZAWARTOŚĆ STOPKI === */}
            <div className="relative z-10 flex flex-col h-full gap-4 grow pt-10">
                
                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-12 md:gap-3 py-4">
                    
                    {/* Social icons */}
                    <div className="w-full">
                        <FooterIcons />
                    </div>

                    {/* Logo */}
                    <div className="w-full flex justify-center">
                        <FooterLogo />
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-3 w-full max-w-sm text-center md:text-left">
                        <p className="uppercase text-md font-bold text-neutral-200">
                            Zapisz się do Newslettera!
                        </p>
                        
                        <FooterForm />
                        
                        <button className="mt-2 self-center md:self-start text-sm bg-orange-500 text-neutral-950 px-8 py-2.5 font-bold rounded-md uppercase cursor-pointer transition-transform hover:scale-105 hover:bg-orange-400 shadow-lg shadow-orange-500/20">
                            Zapisz
                        </button>
                    </div>
                </div>

                {/* Info links (Copyright, Privacy etc.) */}
                <div className="mt-auto pt-6 border-t border-white/5">
                    <FooterInfo />
                </div>
            </div>

        </footer>
    )
};