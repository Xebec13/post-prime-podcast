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

const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

export default function AboutCard({ host }: AboutCardProps) {
    return (
        <motion.div 
            variants={cardVariants}
            className="relative size-full min-w-50 max-w-lg lg:max-w-full flex flex-col gap-4 group"
        >

            {/* === TŁO (BACKGROUND) === */}
            <div
                style={{
                    backgroundImage: `url(${host.hostBg})`
                }}
                className="
                    grid place-items-center w-full aspect-square overflow-hidden 
                    bg-cover bg-center bg-no-repeat 
                    rounded-sm 
                    /* Subtelny border zewnętrzny całego kontenera */
                    border border-white/5
                "
            >
                
                <div className="
                    relative size-full max-w-[65%] max-h-[65%] aspect-square
                    /* RAMKA (Box Shadow Trick) */
                    shadow-[0_0_0_12px_rgba(255,255,255,0.08),0_20px_50px_rgba(0,0,0,0.6)]
                    bg-neutral-900/20 backdrop-blur-[1px]
                    transition-transform duration-500 ease-out
                    group-hover:scale-105
                ">
                    <Image
                        src={host.hostImg}
                        alt={host.name}
                        fill
                        className="object-contain object-bottom pt-2" 
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            </div>

            {/* === PODPIS I SOCIALE === */}
            <div className="flex items-start justify-between w-full px-2 border-l-2 border-orange-500/50 pl-4">
                
                {/* Lewa: Dane */}
                <div className="flex flex-col gap-1">
                    <h3 className="text-gray-100 text-lg lg:text-2xl font-black uppercase leading-none tracking-tight">
                        {host.name}
                    </h3>
                    <p className="text-neutral-400 text-xs lg:text-sm font-bold uppercase tracking-widest">
                        {host.role}
                    </p>
                </div>

                {/* Prawa: Sociale */}
                <div className="flex items-center gap-3 pt-1">
                    {host.socials?.facebook && (
                        <Link href={host.socials.facebook} target="_blank" className="text-neutral-500 hover:text-blue-600 transition-colors hover:scale-110">
                            <Icon name="Facebook" size={18} />
                        </Link>
                    )}
                    {host.socials?.instagram && (
                        <Link href={host.socials.instagram} target="_blank" className="text-neutral-500 hover:text-fuchsia-500 transition-colors hover:scale-110">
                            <Icon name="Instagram" size={18} />
                        </Link>
                    )}
                    {host.socials?.twitter && (
                        <Link href={host.socials.twitter} target="_blank" className="text-neutral-500 hover:text-white transition-colors hover:scale-110">
                            <Icon name="Twitter" size={18} /> 
                        </Link>
                    )}
                     {host.socials?.youtube && (
                        <Link href={host.socials.youtube} target="_blank" className="text-neutral-500 hover:text-red-600 transition-colors hover:scale-110">
                            <Icon name="Youtube" size={18} /> 
                        </Link>
                    )}
                </div>

            </div>

        </motion.div>
    );
}