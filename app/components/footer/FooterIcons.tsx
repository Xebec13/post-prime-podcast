"use client";

import Icon from "../ui/Icon";
// Musisz zaimportować ten typ z pliku, w którym trzymasz iconMap (np. ui/icons.ts)
import { IconName } from "../ui/icons"; 

interface SocialItem {
  href: string;
  label: string;
  // Zmieniamy 'string' na konkretny typ 'IconName'. 
  // Teraz TS będzie pilnował, czy wpisujesz poprawną nazwę ikony.
  iconName: IconName; 
}

const socialLinks: SocialItem[] = [
  { href: "https://www.youtube.com", label: "YouTube", iconName: "Youtube" },
  { href: "https://www.instagram.com", label: "Instagram", iconName: "Instagram" },
  { href: "https://www.facebook.com", label: "Facebook", iconName: "Facebook" },
  { href: "https://twitter.com", label: "Twitter", iconName: "Twitter" },
];

export default function FooterIcons() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="group relative flex items-center justify-center p-2"
        >
          {/* Ikona */}
          <div className="text-gray-50 transition-all duration-300 group-hover:text-orange-500/90 group-hover:scale-105">
            <Icon name={item.iconName} className="size-6 md:size-10" />
          </div>
          
        </a>
      ))}
    </div>
  );
}