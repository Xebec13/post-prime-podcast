import Link from "next/link";

interface SocialItem {
  href: string;
  label: string;
}

const socialLinks: SocialItem[] = [
  { href: "https://www.youtube.com", label: "YouTube" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.facebook.com", label: "Facebook" },
];

export default function FooterIcons() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socialLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="group"
        >
          {/* 
             PLACEHOLDER IKONY 
             To jest to "puste pole", o które prosiłeś.
             W przyszłości podmienisz ten <div /> na <svg> lub <Icon />
          */}
          <div className="w-8 h-8 border border-neutral-500 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-colors duration-300 flex items-center justify-center">
             <span className="text-[0.5rem] uppercase text-neutral-500 group-hover:text-orange-500">
               Icon
             </span>
          </div>
        </Link>
      ))}
    </div>
  );
}