"use client";

import Link from "next/link";
import Icon from "../ui/Icon";
import { useNavbarScroll } from "./useNavbarScroll";
import { useNavbarSpotlight } from "./useNavbarSpotlight";

type NavItem = {
    href: string;
    label: string;
    icon?: string;
};

const navItems: NavItem[] = [
    { href: "#home", label: "Post Prime" },
    { href: "#about", label: "Autorzy" },
    { href: "#youtube", label: "Youtube" },
    { href: "#facebook", label: "Facebook" },
    { href: "#instagram", label: "Instagram" },
    { href: "#footer", label: "Contact", icon: "Comment" }, 
];

export default function Navbar() {
    const isVisible = useNavbarScroll();
    const { activeStyle, currentStyleIndex, setHoverIndex } = useNavbarSpotlight();

    return (
        <nav
            className={`font-archivo fixed top-0 left-0 z-50 w-full h-10 bg-orange-50 text-inherit outline-2 transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <ul
                onMouseLeave={() => setHoverIndex(null)}
                className="relative list-none grid grid-cols-[repeat(5,1fr)_0.5fr] size-full isolate"
            >
                {/* BLOB (Teraz zawsze czarny - bg-neutral-900) */}
                <div
                    className={`absolute top-0 bottom-0 left-0 -z-10 h-full transition-[transform,colors] duration-500 ease-in-out origin-left ${activeStyle.color}`}
                    style={{
                        width: "18.1818%",
                        transform: `translateX(${activeStyle.translateX}) scaleX(${activeStyle.scaleX})`
                    }}
                />
                
                {/* LINKI */}
                {navItems.map((item, index) => {
                    const myIndex = index;
                    const isHighlighted = currentStyleIndex === myIndex;

                    return (
                        <li
                            key={index}
                            onMouseEnter={() => setHoverIndex(myIndex)}
                            className="text-[clamp(0.6rem,1vw,1rem)] border-r size-full cursor-pointer z-10"
                        >
                            <Link
                                href={item.href}
                                aria-label={item.label}
                                // Jeśli highlighted -> aplikujemy gradient (textColor z configu).
                                // Jeśli nie -> czarny tekst (text-inherit) i hover na biały.
                                className={`size-full flex items-center justify-center font-black whitespace-nowrap tracking-widest transition-colors ease-out duration-500 
                                    ${isHighlighted ? activeStyle.textColor : "hover:text-neutral-500 text-inherit"}`}
                            >
                                {item.icon ? (
                                    // Ikona (zazwyczaj SVG potrzebuje fill/color, a nie bg-clip-text)
                                    // Jeśli isHighlighted, ikona dostanie np. text-white (zdefiniowane w configu dla id:5)
                                    <Icon name="Contact" className={`transition-colors ease-out duration-500 ${isHighlighted ? "text-gray-300" : ""}`} />
                                ) : (
                                    item.label
                                )}
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </nav>
    );
}