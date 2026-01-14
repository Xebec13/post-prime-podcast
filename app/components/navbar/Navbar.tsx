"use client";

import Link from "next/link";
import Image from "next/image";
import { useNavbarLogic } from "./useNavbarLogic"; // Import hooka

type NavItem = {
    type: "logo" | "link";
    href: string;
    label?: string;
    alt: string;
    imgSrc?: string;
};

const navItems: NavItem[] = [
    { type: "link", href: "#about", label: "Autorzy", alt: "Want to know more about us ?" },
    { type: "link", href: "#youtube", label: "Youtube", alt: "Watch our latest videos" },
    { type: "link", href: "#facebook", label: "Facebook", alt: "Read our latest posts" },
    { type: "link", href: "#instagram", label: "Instagram", alt: "See recent news" },
    { type: "logo", href: "#home", alt: "Go to Home", imgSrc: "/postprime-logo-2.png" },
];

export default function Navbar() {
    // Cała logika siedzi w hooku
    const { isVisible, activeStyle, currentStyleIndex, setHoverIndex } = useNavbarLogic();

    const textLinks = navItems.filter(item => item.type === "link");
    const logoItem = navItems.find(item => item.type === "logo");

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full bg-orange-50 text-inherit border-slate-900 border-b-2 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <ul
                onMouseLeave={() => setHoverIndex(null)}
                className="relative list-none grid grid-cols-[1fr_repeat(4,2fr)] place-items-center py-1 size-full isolate"
            >
                {/* BLOB */}
                <div
                    className={`absolute top-0 bottom-0 left-0 -z-10 h-full transition-all duration-500 ease-in-out origin-left ${activeStyle.color}`}
                    style={{
                        width: "11.111%",
                        transform: `translateX(${activeStyle.translateX}) scaleX(${activeStyle.scaleX})`
                    }}
                />
                
                {/* === LOGO === */}
                {logoItem && logoItem.imgSrc && (
                    <li
                        onMouseEnter={() => setHoverIndex(0)}
                        className="cursor-pointer size-full z-10 p-0"
                    >
                        <Link
                            href={logoItem.href}
                            aria-label={logoItem.alt}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <div className="relative bg-orange-50 size-8 rounded-full flex items-center justify-center">
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
                    </li>
                )}

                {/* === LINKI === */}
                {textLinks.map((item, index) => {
                    const myIndex = index + 1;
                    const isHighlighted = currentStyleIndex === myIndex;

                    return (
                        <li
                            key={index}
                            onMouseEnter={() => setHoverIndex(myIndex)}
                            className="size-full border-slate-900 border-l-2 cursor-pointer z-10"
                        >
                            <Link
                                href={item.href}
                                aria-label={item.alt}
                                className={`w-full h-full flex items-center justify-center font-black uppercase whitespace-nowrap tracking-widest text-[clamp(0.55rem,0.8vw,1rem)] transition-colors duration-200 
                                    ${isHighlighted ? activeStyle.textColor : "hover:text-white text-inherit"}`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </nav>
    );
}