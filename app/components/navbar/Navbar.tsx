"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
    type: "logo" | "link";
    href: string;
    label?: string;
    alt: string;
    imgSrc?: string;
};

const navItems: NavItem[] = [
    { type: "link", href: "#about", label: "Hosts", alt: "Want to know more about us ?" },
    { type: "link", href: "#youtube", label: "Youtube", alt: "Watch our latest videos" },
    { type: "link", href: "#facebook", label: "Facebook", alt: "Read our latest posts" },
    { type: "link", href: "#instagram", label: "Instagram", alt: "See recent news" },
    { type: "logo", href: "#home", alt: "Go to Home", imgSrc: "/postprime-logo-2.png" },
];

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        // ZMIANA: Dodano { passive: true } dla lepszej wydajności scrollowania
        window.addEventListener("scroll", controlNavbar, { passive: true });

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const textLinks = navItems.filter(item => item.type === "link");
    const logoItem = navItems.find(item => item.type === "logo");

    return (
        <nav
            className={`fixed top-0 left-0 z-50 bg-neutral-900 w-full flex items-center justify-between transition-transform duration-300 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            {/* === KONTENER 1: Linki Tekstowe (UL) === */}
            <ul className="list-none border-b grid grid-cols-4 w-full">
                {textLinks.map((item, index) => (
                    <li key={index} className="border-r py-2 text-center cursor-pointer" >
                        <Link
                            href={item.href}
                            aria-label={item.alt}
                            className="text-white font-black uppercase whitespace-nowrap tracking-widest text-[clamp(0.6rem,0.8vw,1rem)]"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* === KONTENER 2: Logo (DIV) === */}
            {logoItem && logoItem.imgSrc && (
                <div className="px-2 lg:px-5 cursor-pointer">
                    <Link href={logoItem.href} aria-label={logoItem.alt}>
                        <div className="relative size-6 lg:size-8 bg-orange-50 rounded-full flex items-center justify-center">
                            <Image
                                src={logoItem.imgSrc}
                                alt={logoItem.alt}
                                width={40}
                                height={40}
                                className="object-contain p-0.5"
                                priority
                            />
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    );
}