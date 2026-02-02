"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/Icon";
import { motion, Variants } from "motion/react";

export interface SocialLinks {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
}

export interface Host {
    id: number;
    name: string;
    role: string;
    hostImg: string;
    hostBg: string;
    socials?: SocialLinks;
}

interface AboutCardProps {
    host: Host;
}

// 1. KARTA CAŁA (Wjazd bryły)
const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
            duration: 0.5, 
            ease: "easeOut",
            when: "beforeChildren" // Najpierw wjazd, potem reszta
        } 
    }
};

// 2. NOWOŚĆ: GŁÓWNE TŁO (Fade In)
const mainBgVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { 
            duration: 0.8, // Czas pojawiania się tła
            ease: "easeInOut"
        } 
    }
};

// 3. POSTAĆ (Sylwetka -> Kolor)
const hostImgVariants: Variants = {
    hidden: { filter: "brightness(0)", opacity: 1 }, 
    visible: { 
        filter: "brightness(1)", 
        opacity: 1,
        transition: { 
            duration: 1.5,
            ease: "easeIn",
            delay: 0.6 // Czekamy, aż Główne Tło (0.8s) prawie się skończy
        } 
    }
};

// 4. TEKST (Masked Slide Up)
const textRevealVariants: Variants = {
    hidden: { y: "100%" },
    visible: { 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

// 5. KONTENER TEKSTU
const textContainerVariants: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6 // Tekst wchodzi razem z "wywoływaniem" zdjęcia (po tle)
        }
    }
};

export default function AboutCard({ host }: AboutCardProps) {
    return (
        <motion.div 
            variants={cardVariants}
            className="relative h-full w-3/4 min-w-50 max-w-lg lg:max-w-full flex flex-col gap-4"
        >

            {/* === GŁÓWNY KONTENER GRAFICZNY === */}
            {/* ZMIANA: div -> motion.div oraz dodanie variants */}
            <motion.div
                variants={mainBgVariants}
                style={{
                    backgroundImage: `url(${host.hostBg})`
                }}
                className="
                    grid place-items-center w-full aspect-square overflow-hidden 
                    bg-cover bg-center bg-no-repeat 
                    rounded-sm shadow-xl
                "
            >
                
                {/* === WEWNĘTRZNA RAMKA - FOTKA === */}
                <div className="
                    relative size-2/3 aspect-square 
                    overflow-hidden
                    border-10 border-white
                    shadow-2xl
                ">
                    
                    {/* TŁO WEWNĘTRZNE (Blur) - Ono dziedziczy opacity od rodzica (Głównego kontenera) */}
                    <div 
                        style={{
                            backgroundImage: `url(${host.hostBg})`
                        }}
                        className="
                            absolute inset-0 size-full 
                            bg-cover bg-center
                            blur-[2px] scale-110 brightness-75
                        "
                    />

                    {/* POSTAĆ (Animacja Brightness) */}
                    <motion.div 
                        variants={hostImgVariants}
                        className="relative z-10 size-full p-1"
                    > 
                        <Image
                            src={host.hostImg}
                            alt={host.name}
                            fill
                            className="object-contain object-bottom" 
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </motion.div>

                </div>
            </motion.div>

            {/* === DANE === */}
            <div className="flex items-start justify-between w-full border-l-2 border-orange-500/50 pl-2">
                
                {/* Animowane Teksty */}
                <motion.div 
                    variants={textContainerVariants}
                    className="flex flex-col gap-1 overflow-hidden"
                >
                    {/* IMIĘ */}
                    <div className="overflow-hidden">
                        <motion.h3 
                            variants={textRevealVariants}
                            className="text-gray-100 text-base md:text-lg lg:text-2xl font-black uppercase leading-none tracking-tight block"
                        >
                            {host.name}
                        </motion.h3>
                    </div>

                    {/* ROLA */}
                    <div className="overflow-hidden">
                        <motion.p 
                            variants={textRevealVariants}
                            className="text-neutral-400 text-xs md:text-sm font-bold uppercase tracking-widest block"
                        >
                            {host.role}
                        </motion.p>
                    </div>
                </motion.div>

                {/* Ikonki */}
                <div className="flex items-center gap-0.5 md:gap-2">
                    {host.socials?.facebook && (
                        <Link href={host.socials.facebook} target="_blank" className="size-6 text-neutral-500 hover:text-blue-600 transition-colors hover:scale-110">
                            <Icon name="Facebook" />
                        </Link>
                    )}
                    {host.socials?.instagram && (
                        <Link href={host.socials.instagram} target="_blank" className="size-6 text-neutral-500 hover:text-fuchsia-500 transition-colors hover:scale-110">
                            <Icon name="Instagram" />
                        </Link>
                    )}
                    {host.socials?.twitter && (
                        <Link href={host.socials.twitter} target="_blank" className="size-6 text-neutral-500 hover:text-white transition-colors hover:scale-110">
                            <Icon name="Twitter" /> 
                        </Link>
                    )}
                     {host.socials?.youtube && (
                        <Link href={host.socials.youtube} target="_blank" className="size-6 text-neutral-500 hover:text-red-600 transition-colors hover:scale-110">
                            <Icon name="Youtube" /> 
                        </Link>
                    )}
                </div>
            </div>

        </motion.div>
    );
}