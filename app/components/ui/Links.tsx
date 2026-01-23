import Link from "next/link";
import Icon from "./Icon";

// === KOMPONENT 1: LargeScreenLink (Tekst + Ikona) ===

type LargeScreenLinkProps = {
  text: string;
  href: string;
  isExternal: boolean; // true = zewnętrzny, false = internal
};

export function LargeScreenLink({ text, href, isExternal }: LargeScreenLinkProps) {
  const content = (
    <>
      <span className="lowercase">{text}</span>
      <div className="relative flex items-center justify-center p-0.5 rounded-md">
        <Icon
          name="ArrowRight"
          size={16}
          className="relative text-inherit z-10 p-0.5"
        />
        <div className="absolute bottom-0 left-0 bg-orange-500 w-1/2 h-full transition-transform duration-150 ease-in-out group-hover:translate-y-0.5" />
        <div className="absolute bottom-0 right-0 bg-orange-500 w-1/2 h-full transition-transform duration-150 ease-in-out group-hover:-translate-y-0.5" />
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group text-inherit bg-inherit text-sm font-medium flex items-center justify-center gap-2 tracking-tighter cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="group text-inherit bg-inherit text-sm font-medium flex items-center justify-center gap-2 tracking-tighter cursor-pointer"
    >
      {content}
    </Link>
  );
}

// === KOMPONENT 2: IconLink (Tylko Ikona) ===

interface IconLinkProps {
  href: string;
  size:number;
  className?: string;
}

export function IconLink({ href,size, className = "" }: IconLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center justify-center p-0.5 rounded-md ${className}`}
    >
      <Icon
        name="ArrowRight"
        size={size}
        className="relative text-inherit z-10 p-0.5"
      />
      <div className="absolute bottom-0 left-0 bg-orange-500 w-1/2 h-full transition-transform duration-150 ease-in-out group-hover:translate-y-0.5" />
      <div className="absolute bottom-0 right-0 bg-orange-500 w-1/2 h-full transition-transform duration-150 ease-in-out group-hover:-translate-y-0.5" />
    </Link>
  );
}