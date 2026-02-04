"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Icon from "../ui/Icon";
import Lamp from "../ui/Lamp";
import { IconName } from "../ui/icons";

// === DANE (W jednym miejscu na górze pliku) ===
const SOCIAL_LINKS: { href: string; label: string; icon: IconName }[] = [
    { href: "https://www.youtube.com/@PostPrimePL", label: "YouTube", icon: "Youtube" },
    { href: "https://www.instagram.com/postprime_pl/", label: "Instagram", icon: "Instagram" },
    { href: "https://www.facebook.com/postprimepl/", label: "Facebook", icon: "Facebook" },
    // { href: "https://twitter.com", label: "Twitter", icon: "Twitter" },
];

const FOOTER_LINKS = [
    { label: "kontakt@postprime.pl", href: "mailto:kontakt@postprime.pl" },
    { label: "MG13", href: "#" },
    { label: "Fundacja Warszawa", href: "#" },
    { label: "Partnerzy PostPrime", href: "#" },
    { label: "+48 123 456 789", href: null },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subskrypcja dla:", email);
    };

    return (
        <footer id="footer" className="relative overflow-hidden min-h-[50vh] flex flex-col p-6 sm:p-8 gap-4 bg-neutral-900 border-t-2 border-orange-500">
            
            {/* 1. DEKORACJE (Lampy i Piłka) */}
            <div className="absolute top-0 inset-x-0 w-full flex justify-between px-[10%] md:px-[15%] pointer-events-none z-0">
                <Lamp length="short" className="realtive top-0" />
                <Lamp length="long" className="relative top-0" />
            </div>

            <motion.div 
                className="absolute -left-10 bottom-0 md:-left-25 md:-bottom-25 text-orange-500/20 pointer-events-none z-0"
                initial={{ x: -100, rotate: -90, opacity: 0 }}
                whileInView={{ x: 0, rotate: -15, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Icon name="Basketball" className="size-80 md:size-100 lg:size-120" />
            </motion.div>

            {/* 2. GŁÓWNY LAYOUT */}
            <div className="relative z-10 flex flex-col h-full gap-4 grow pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-12 md:gap-3 py-4">
                    
                    {/* SOCIALS */}
                    <div className="flex items-center justify-center gap-6 w-full">
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                                key={link.label} 
                                href={link.href} 
                                target="_blank" 
                                className="text-gray-50 hover:text-orange-500 transition-all hover:scale-110"
                                aria-label={link.label}
                            >
                                <Icon name={link.icon} className="size-6 md:size-10" />
                            </a>
                        ))}
                    </div>

                    {/* LOGO */}
                    <div className="w-full flex justify-center">
                        <div className="bg-gray-50 rounded-full size-1/4 md:size-1/3 aspect-square relative overflow-hidden">
                            <Image
                                src="/postprime-logo-2.png"
                                alt="PostPrime logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="flex flex-col gap-3 w-full max-w-sm text-center md:text-left">
                        <p className="uppercase text-md font-bold text-neutral-200">Zapisz się do Newslettera!</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Twój Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 outline-none bg-orange-500/20 border border-orange-500/30 text-white text-sm focus:bg-orange-500/40 transition-colors"
                                required
                            />
                            <button className="bg-orange-500 max-w-3/4 mx-auto mt-2 text-gray-50 px-8 py-2.5 font-bold rounded-md uppercase hover:bg-orange-400 transition-all active:scale-95 shadow-lg ">
                                Zapisz
                            </button>
                        </form>
                    </div>
                </div>

                {/* 3. DOLNA BELKA (INFO) */}
                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-400">
                        {FOOTER_LINKS.map((link) => (
                            link.href ? (
                                <a key={link.label} href={link.href} className="hover:text-orange-400 transition-colors underline decoration-orange-500/30 underline-offset-4">
                                    {link.label}
                                </a>
                            ) : (
                                <span key={link.label}>{link.label}</span>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}