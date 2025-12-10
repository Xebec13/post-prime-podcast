"use client";
import { NavbarOverlay } from "../index";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Definicje typów dla porządku w TS
type NavItem = {
    type: "logo" | "link";
    href: string;
    label?: string;
    alt: string;
};

type SocialLink = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { type: "logo", href: "#home", alt: "Go to Home" },
    { type: "link", href: "#youtube", label: "Youtube", alt: "Watch our latest videos" },
    { type: "link", href: "#facebook", label: "Facebook", alt: "Read our latest posts" },
    { type: "link", href: "#instagram", label: "Instagram", alt: "See recent news" },
    { type: "link", href: "#about", label: "About", alt: "Learn more about us" },
];

const socialLinks: SocialLink[] = [
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 flex flex-col px-10 py-4 gap-1 w-full bg-neutral-900">
            
            <div className="grid grid-cols-2 place-items-center">
                {/* === LEFT SIDE – LOGO === */}
                <div className="justify-self-start bg-orange-50 rounded-full ">
                    <Link href={navItems[0].href} aria-label={navItems[0].alt}>
                        <Image
                            src="/postprime-logo-2.png"
                            alt="Post Prime logo"
                            width={40}
                            height={40}
                            priority
                            className="object-contain p-1 size-10"
                        />
                    </Link>
                </div>

                {/* === RIGHT SIDE – TOGGLE BUTTON === */}
                <div className="justify-self-end relative inset-0 z-40 flex items-center">
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        className={`${isOpen ? "text-zinc-950 hover:bg-zinc-900 hover:text-orange-100" : "text-orange-400 hover:bg-orange-50 hover:text-zinc-950"} block rounded-md cursor-pointer transition-colors duration-300`}
                    >
                        {isOpen ? (
                            // Ikona "X" (Close)
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Ikona "Hamburger" (Menu)
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* === FULLSCREEN OVERLAY MENU (MIKRO KOMPONENT) === */}
            <NavbarOverlay
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                navItems={navItems}
                socialLinks={socialLinks}
            />
        </nav>
    );
}