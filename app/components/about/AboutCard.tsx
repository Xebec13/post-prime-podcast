"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/Icon";
import { IconName } from "../ui/icons";
import { motion, Variants } from "motion/react";

// === TYPY ===
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

// === VARIANTS (Wydzielone poza komponent) ===
const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, opacity: 1, 
        transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren" } 
    }
};

const hostImgVariants: Variants = {
    hidden: { filter: "brightness(0)", opacity: 1 }, 
    visible: { 
        filter: "brightness(1)", 
        transition: { duration: 0.8, ease: "easeIn", delay: 0.2 } 
    }
};

const textRevealVariants: Variants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AboutCard({ host }: { host: Host }) {
    return (
        <motion.div variants={cardVariants} className="relative h-full w-3/4 min-w-50 max-w-lg lg:max-w-full flex flex-col gap-4">
            
            {/* GRAFIKA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ backgroundImage: `url(${host.hostBg})` }}
                className="relative grid place-items-center w-full aspect-square overflow-hidden bg-cover bg-center rounded-sm shadow-xl"
            >
                <div className="relative size-2/3 border-10 border-white shadow-2xl overflow-hidden">
                    <div 
                        style={{ backgroundImage: `url(${host.hostBg})` }}
                        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-110 brightness-75"
                    />
                    <motion.div variants={hostImgVariants} className="relative z-10 size-full p-1"> 
                        <Image src={host.hostImg} alt={host.name} fill className="object-contain object-bottom" sizes="(max-width: 768px) 100vw, 33vw" />
                    </motion.div>
                </div>
            </motion.div>

            {/* DANE I SOCIALE */}
            <div className="flex items-start gap-1 justify-between w-full p-1">
                <div className="flex flex-col gap-1 overflow-hidden">
                    <div className="overflow-hidden">
                        <motion.h3 variants={textRevealVariants} className="relative text-gray-100 text-sm md:text-lg lg:text-xl font-black uppercase leading-none tracking-tight">
                            {host.name}
                        </motion.h3>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p variants={textRevealVariants} className="relative text-neutral-400 text-[10px] md:text-sm lg:text-base font-bold uppercase tracking-widest">
                            {host.role}
                        </motion.p>
                    </div>
                </div>

                <div className="shrink-0 flex items-center gap-1 md:gap-2">
                    {host.socials && Object.entries(host.socials).map(([platform, url]) => (
                        <Link key={platform} href={url} target="_blank" className="size-6 text-neutral-500 hover:text-orange-500 transition-all hover:scale-110">
                            <Icon name={platform.charAt(0).toUpperCase() + platform.slice(1) as IconName} />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}