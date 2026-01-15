import Link from "next/link";

interface YoutubeLinkProps {
    className?: string;
    text?: string;
    href?: string;
}

export default function YoutubeLink({ className, text = "View Playlist", href = "https://youtube.com" }: YoutubeLinkProps) {
    return (
        <Link
            href={href}
            target="_blank" // Otwieramy YT w nowej karcie
            rel="noopener noreferrer"
            className={`flex items-center justify-center font-black uppercase tracking-widest cursor-pointer hover:text-red-500 transition-colors ${className}`}
        >
            <p>{text}</p>
        </Link>
    );
}