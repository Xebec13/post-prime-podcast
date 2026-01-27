"use client";

import { motion, Variants } from "motion/react";
import Icon from "../../ui/Icon";
import { IconName } from "../../ui/icons";

type HeroItem = {
    title: string;
    href: string;
    label: string;
    icon: IconName;
    hoverColor: string;
}

const heroLinks: HeroItem[] = [
    { title: "PostPrimePL", href: "https://youtube.com", label: "youtube", icon: "Youtube", hoverColor: "group-hover:text-red-600" },
    { title: "@postprimepl", href: "https://facebook.com", label: "facebook", icon: "Facebook", hoverColor: "group-hover:text-blue-600" },
    { title: "@postprime_pl", href: "https://instagram.com", label: "instagram", icon: "Instagram", hoverColor: "group-hover:text-fuchsia-500" },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
    }
};

export default function HeroLinks() {
    return (
        <div className="size-full overflow-hidden ">
            <motion.div
                className="size-full flex flex-col md:flex-row items-center justify-center gap-1 p-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {heroLinks.map((item, index) => {
                    return (
                        <div key={index} className="w-full h-full overflow-hidden flex justify-center">
                            <motion.a
                                href={item.href}
                                aria-label={item.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                // Mobile: flex-col, justify-center (ikona na środku).
                                // Desktop (md): flex-col, justify-center (ikona + wysuwany tekst).
                                className="group w-full h-full flex flex-col items-center justify-center gap-2 cursor-pointer will-change-transform"
                            >
                                {/* Ikona */}
                                <div className={`transition-colors duration-300 text-neutral-800 ${item.hoverColor}`}>
                                    <Icon name={item.icon} className="text-2xl md:text-4xl lg:text-5xl " />
                                </div>

                                {/* Tytuł (Animacja tylko na Desktopie) */}
                                {/* Mobile: hidden. Desktop: block (ale startuje jako h-0 opacity-0) */}
                                <span className="
                                
                                    hidden md:block
                                    text-[8px] lg:text-xs font-bold tracking-widest text-inherit transition-all duration-300
                                    md:h-0  md:overflow-hidden
                                    md:group-hover:h-auto  md:group-hover:mt-1
                                ">
                                    {item.title}
                                </span>

                            </motion.a>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}