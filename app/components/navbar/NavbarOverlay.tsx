"use client";

import Link from "next/link";

// Definicje typów potrzebne do propsów
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

interface NavbarOverlayProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export default function NavbarOverlay({ isOpen, setIsOpen, navItems, socialLinks }: NavbarOverlayProps) {
  return (
    <div
      className={`fixed top-0 right-0 pt-20 px-6 h-screen w-2/3 sm:w-1/3 flex flex-col justify-between bg-orange-200 transition-all duration-500 ease-in-out shadow-2xl ${
        isOpen
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-full opacity-0 invisible"
      }`}
    >
      <ul className="text-neutral-800 text-4xl font-semibold uppercase space-y-5">
        {navItems
          .filter((item) => item.type === "link")
          .map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                aria-label={item.alt}
                onClick={() => setIsOpen(false)}
                className="transition-colors duration-300 hover:text-orange-500 block"
              >
                {item.label}
              </Link>
            </li>
          ))}
      </ul>

      {/* --- Social Links --- */}
      <div className="flex gap-2 pb-10 text-xs font-medium text-neutral-800 uppercase">
        {socialLinks.map((social, i) => (
          <div
            key={i}
            className="cursor-pointer p-2 transition-colors duration-300 hover:text-orange-500"
          >
            <Link href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}