"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";
import Icon from "../ui/Icon";
import { IconName } from "../ui/icons"; // Zakładam, że tu masz typ wszystkich ikon
import { useNavbarScroll } from "./useNavbarScroll";
import { useNavbarSpotlight } from "./useNavbarSpotlight";

// === 1. TYPOWANIE BEZ ANY ===
type NavItem = {
    href: string;
    label: string;
    // Używamy konkretnego typu IconName zamiast string
    icon?: IconName; 
};

const NAV_ITEMS: NavItem[] = [
    { href: "#home", label: "post prime" },
    { href: "#about", label: "autorzy" },
    { href: "#youtube", label: "youtube" },
    { href: "#facebook", label: "facebook" },
    { href: "#instagram", label: "instagram" },
    { href: "#footer", label: "contact", icon: "Contact" }, 
];

const navbarVariants: Variants = {
    hidden: { y: -100 },
    visible: { 
        y: 0, 
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
};

export default function Navbar() {
    const { isVisible } = useNavbarScroll();
    const { activeStyle, setHoverIndex } = useNavbarSpotlight();

    return (
        <motion.header
            variants={navbarVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="fixed top-0 left-0 z-50 w-full will-change-transform"
        >
            <nav className="w-full" aria-label="Główna nawigacja">
                <ul
                    onMouseLeave={() => setHoverIndex(null)}
                    className="relative isolate grid h-10 grid-cols-6 list-none border-b border-neutral-600 bg-neutral-900 text-inherit"
                >
                    <div
                        className={`absolute inset-0 -z-10 h-full w-1/6 origin-left transition-[transform,colors] duration-500 ease-in-out ${activeStyle.color}`}
                        style={{
                            transform: `translateX(${activeStyle.translateX}) scaleX(${activeStyle.scaleX})`
                        }}
                        aria-hidden="true"
                    />
                    
                    {NAV_ITEMS.map((item, index) => (
                        <li
                            key={item.href}
                            onMouseEnter={() => setHoverIndex(index)}
                            className="size-full cursor-pointer border-r border-neutral-500 font-black uppercase whitespace-nowrap"
                        >
                            <Link
                                href={item.href}
                                aria-label={item.label}
                                className="flex size-full items-center justify-center truncate text-[clamp(0.4rem,0.45rem+0.2vw,2rem)] transition-colors duration-500 ease-out hover:text-white"
                            >
                                {/* Teraz TS wie, że item.icon to poprawny IconName */}
                                {item.icon ? (
                                    <>
                                        <Icon 
                                            name={item.icon} 
                                            className="text-[clamp(0.4rem,0.4rem+0.4vw,2.75rem)]" 
                                        />
                                        <span className="sr-only">{item.label}</span>
                                    </>
                                ) : (
                                    item.label
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}