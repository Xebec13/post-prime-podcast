"use client";

import Link from "next/link";
import Icon from "../ui/Icon";
import { useNavbarScroll } from "./useNavbarScroll";
import { useNavbarSpotlight } from "./useNavbarSpotlight";
import NavbarAnimation from "./NavbarAnimation"; // Import wrappera

type NavItem = {
    href: string;
    label: string;
    icon?: string;
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
    const isVisible = useNavbarScroll();
    const { activeStyle, currentStyleIndex, setHoverIndex } = useNavbarSpotlight();

    return (
        <NavbarAnimation isVisible={isVisible}>
            <ul
                onMouseLeave={() => setHoverIndex(null)}
                className="relative list-none grid grid-cols-[repeat(5,1fr)_0.5fr] size-full isolate"
            >
                {/* BLOB */}
                <div
                    className={`absolute inset-0 -z-10 h-full transition-[transform,colors] duration-500 ease-in-out origin-left ${activeStyle.color}`}
                    style={{
                        width: "18.1802%",
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
                        
                            className="text-[clamp(0.6rem,1vw,1rem)] uppercase font-playfair font-black whitespace-nowrap tracking-widest border-r border-neutral-900 size-full cursor-pointer"
                        >
                            <Link
                                href={item.href}
                                aria-label={item.label}
                                className={`size-full flex items-center justify-center transition-colors ease-out duration-500 
                                    ${isHighlighted ? activeStyle.textColor : "hover:text-orange-500 text-inherit"}`}
                            >
                                {item.icon ? (
                                    <Icon name="Contact" />
                                ) : (
                                    item.label
                                )}
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </NavbarAnimation>
    );
}