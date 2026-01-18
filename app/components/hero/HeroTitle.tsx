interface HeroTitleProps {
    title: string[];
}

export default function HeroTitle({ title }: HeroTitleProps) {
    return (
        <div className="font-archivo overflow-hidden whitespace-nowrap tracking-wide font-black text-inherit flex items-center size-full">
            <div className="marquee-track uppercase text-[clamp(1.5rem,6vw,6.5rem)]">
                {[...title, ...title].map((word, idx) => (
                    <h2 key={idx} className="flex items-center gap-5 py-0.5 px-3">
                        {word}
                        <span className="size-2.5 lg:size-4 rounded-full bg-orange-500"></span>
                    </h2>
                ))}
            </div>
        </div>


    )
}