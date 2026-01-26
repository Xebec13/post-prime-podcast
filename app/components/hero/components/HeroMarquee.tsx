interface HeroMarquee {
    title: string[];
    className?: string;
}

export default function HeroMarquee({ title, className = " " }: HeroMarquee) {
    return (
        <div className={`${className} overflow-hidden whitespace-nowrap tracking-tighter font-black text-inherit flex items-center size-full`}>
            <div className="marquee-track uppercase text-[clamp(1.5rem,3.5vw,3rem)]">
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