import Link from "next/link";

interface AboutLinkProps {
    className?: string;
    text?: string;
    href?: string;
}

export default function AboutLink({ className, text, href = "#" }: AboutLinkProps) {
    return (
        <Link
            href={href}
            className={`font-black uppercase tracking-tight cursor-pointer ${className}`}
        >
            <p>{text}</p>
        </Link>
    );
}