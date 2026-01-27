import Image from "next/image";

interface HeroLogoProps {
    className?:string;
    logoSrc: string;
}

export default function HeroLogo({className,logoSrc}: HeroLogoProps) {
    return (
        <div className="relative aspect-square size-full">
            <Image
                src={logoSrc}
                alt="logo"
                fill
                className={`object-contain object-center ${className}`}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
            />
        </div>
    )
}