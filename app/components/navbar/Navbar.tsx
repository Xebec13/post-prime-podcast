"use client";

import Link from "next/link";
import Icon from "../ui/Icon";
import { useNavbarScroll } from "./useNavbarScroll";
import { useNavbarSpotlight } from "./useNavbarSpotlight";
import NavbarAnimation from "./NavbarAnimation";

// Zakładając, że IconName to unia stringów dostępna z Twojego komponentu Icon
// Jeśli nie masz wyeksportowanego typu, możemy go stworzyć na podstawie nazw ikon.
type NavItem = {
    href: string;
    label: string;
    icon?: string; // Tutaj docelowo warto wstawić konkretny typ z komponentu Icon
};

const navItems: NavItem[] = [
    { href: "#home", label: "post prime" },
    { href: "#about", label: "autorzy" },
    { href: "#youtube", label: "youtube" },
    { href: "#facebook", label: "facebook" },
    { href: "#instagram", label: "instagram" },
    { href: "#footer", label: "contact", icon: "Comment" }, 
];

export default function Navbar() {
    const { isVisible } = useNavbarScroll(); // Usunęliśmy setIsVisible, bo teraz rządzi scroll
    const { activeStyle, setHoverIndex } = useNavbarSpotlight();

    return (
        <NavbarAnimation isVisible={isVisible}>
            <nav className="w-full" aria-label="Główna nawigacja">
                <ul
                    onMouseLeave={() => setHoverIndex(null)}
                    className="relative isolate grid h-10 grid-cols-6 list-none border-b border-neutral-600 bg-neutral-900 text-inherit"
                >
                    {/* --- SPOTLIGHT BLOB --- */}
                    <div
                        className={`absolute inset-0 -z-10 h-full w-1/6 origin-left transition-[transform,colors] duration-500 ease-in-out ${activeStyle.color}`}
                        style={{
                            transform: `translateX(${activeStyle.translateX}) scaleX(${activeStyle.scaleX})`
                        }}
                        aria-hidden="true"
                    />
                    
                    {/* --- NAVIGATION LINKS --- */}
                    {navItems.map((item, index) => (
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
                                {item.icon ? (
                                    <>
                                        {/* Poprawka pkt 2: dynamiczna ikona */}
                                        <Icon 
                                            name="Contact"
                                            className="text-[clamp(0.4rem,0.4rem+0.4vw,2.75rem)]" 
                                        />
                                        {/* Poprawka pkt 4: ukryty tekst dla czytników */}
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
        </NavbarAnimation>
    );
}