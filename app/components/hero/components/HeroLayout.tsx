import { ReactNode } from "react";


interface HeroLayoutProps {
    scoreSlot: ReactNode;
    logoSlot: ReactNode;
    bioSlot: ReactNode;
    socialSlot: ReactNode;
    marqueeSlot: ReactNode;
    adSlot: ReactNode;
    infoBarSlot: ReactNode;
    
    videoInfoSlot: ReactNode;
    videoContentSlot: ReactNode;
}

export default function HeroLayout({
    scoreSlot,
    logoSlot,
    bioSlot,
    socialSlot,
    marqueeSlot,
    adSlot,
    infoBarSlot,
    videoInfoSlot,
    videoContentSlot
}: HeroLayoutProps) {
    return (
        <section
            id="home"
            className="grid h-[190vh] grid-cols-6 grid-rows-9 gap-y-1 gap-x-1 md:gap-y-2 lg:gap-y-2.5 bg-inherit pt-11 px-3 md:px-5 md:h-[200vh] md:max-h-[300vh] md:min-h-[200vh] md:grid-cols-6 md:grid-rows-10 lg:grid-cols-6 lg:grid-rows-13"
        >
            {/* 1. SCORE */}
            <div className="md:max-h-full col-start-1 col-span-full row-start-1 row-span-1 md:col-start-1 md:col-span-full md:row-start-1 md:row-span-1 lg:col-start-1 lg:col-span-full lg:row-start-1 lg:row-span-1">
                {scoreSlot}
            </div>

            {/* 2. LOGO */}
            <div className="col-start-1 col-span-full row-start-2 row-span-1 md:col-start-1 md:col-span-3 md:row-start-2 md:row-span-1 lg:col-start-1 lg:col-span-3 lg:row-start-2 lg:row-span-3">
                {logoSlot}
            </div>

            {/* 3. BIO */}
            <div className="col-start-1 col-span-full row-start-3 row-span-1 md:col-start-1 md:col-span-full md:row-start-3 md:row-span-1 lg:col-start-1 lg:col-span-2 lg:row-start-5 lg:row-span-2">
                {bioSlot}
            </div>

            {/* 4. SOCIAL */}
            <div className="col-start-1 col-span-full row-start-4 row-span-1 md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-1 lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-2">
                {socialSlot}
            </div>

            {/* 5. MARQUEE */}
            <div className="col-start-1 col-span-full row-start-5 row-span-1 overflow-hidden md:col-start-1 md:col-span-full md:row-start-4 md:row-span-1 lg:col-start-4 lg:col-span-full lg:row-start-4 lg:row-span-1">
                {marqueeSlot}
            </div>

            {/* 6. AD */}
            <div className="col-start-1 col-span-full row-start-6 row-span-1 bg-white/30 md:col-start-1 md:col-span-full md:row-start-5 md:row-span-2 lg:col-start-3 lg:col-span-4 lg:row-start-5 lg:row-span-2">
                {adSlot}
            </div>

            {/* 7. INFO BAR */}
            <div className="col-start-1 col-span-full row-start-7 row-span-1 flex items-center justify-center md:col-start-1 md:col-span-full md:row-start-7 md:row-span-1 lg:col-start-1 lg:col-span-full lg:row-start-7 lg:row-span-2">
                {infoBarSlot}
            </div>

            {/* 8. VIDEO + INFO (ScrollReveal zostaje tutaj, bo jest cześcią layoutu) */}
            <div
                className="col-start-1 col-span-full row-start-8 row-span-5 grid grid-rows-6 gap-0.5 md:col-start-1 md:col-span-full md:row-start-8 md:row-span-3 md:grid-cols-6 md:grid-rows-1 lg:col-start-1 lg:col-span-full lg:row-start-9 lg:row-span-5"
            >
                <div className="row-start-1 row-span-2 border-t-2 border-b-2 border-neutral-600 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-full lg:col-span-2">
                    {videoInfoSlot}
                </div>

                <div className="row-start-3 row-span-full md:col-start-3 md:col-span-4 md:row-start-1 md:row-span-full lg:col-start-3 lg:col-span-4">
                    {videoContentSlot}
                </div>
            </div>
        </section>
    );
}

