import Link from "next/link";
import Icon from "./Icon";

type LargeScreenLinkProps = {
  text: string;
  href: string;
  isExternal: boolean; // true = zewnętrzny, false = internal
};

export default function LargeScreenLink({
  text,
  href,
  isExternal,
}: LargeScreenLinkProps) {
  const content = (
    <>
      <span className="lowercase">{text}</span>
      <div className="relative flex items-center justify-center p-0.5 rounded-md">
        <Icon
          name="ArrowRight"
          size={14}
          className="relative text-inherit z-10 p-0.5"
        />
        <div className="absolute bottom-0 left-0 bg-orange-500 w-1/2 h-full transition-[translate] duration-150 ease-in-out group-hover:translate-y-0.5" />
        <div className="absolute bottom-0 right-0 bg-orange-500 w-1/2 h-full transition-[translate] duration-150 ease-in-out group-hover:-translate-y-0.5" />
      </div>
    </>
  );

  // Zewnętrzny link (YouTube, playlist)
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group text-inherit bg-inherit text-base font-medium flex items-center justify-center gap-2 tracking-tighter cursor-pointer"
      >
        {content}
      </a>
    );
  }

  // Internal link (Next.js)
  return (
    <Link
      href={href}
      className="group text-inherit bg-inherit text-base font-medium flex items-center justify-center gap-2 tracking-tighter cursor-pointer"
    >
      {content}
    </Link>
  );
}