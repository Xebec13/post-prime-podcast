import {
    HeroEpInfo,
    HeroEpVideo,
    HeroLogo,
    HeroScore,
    HeroMarquee,
    HeroSocialStats,
    HeroAd,
    HeroBio,
    HeroInfoBar,
} from "./components";
import ScrollReveal from "../ui/ScrollReveal";
export default async function Hero() {
    const video = {
        videoId: "Iq5GNa7sPjY",
        title: "Błąd pobierania danych z YouTube",
        thumbnail: "/postprime-hero.png",
        statistics: { viewCount: "0", likeCount: "0", commentCount: "0" }
    };
    const heroTitles = ["podcast", "rozmowy", "koszykówka", "NBA", "PLK", "wywiady"];

    return (
        <section
            id="home"

            className="grid max-h-[300vh] grid-cols-6 grid-rows-10 gap-y-1 gap-x-1 md:gap-y-2 lg:gap-y-2.5  bg-inherit pt-11 px-3 md:px-5 md:h-[200vh] md:min-h-[200vh] md:grid-cols-6 md:grid-rows-10 lg:grid-cols-6 lg:grid-rows-13"
        >

            {/* 1. HERO SCORE */}
            {/* Mobile: 1. rząd (pełna szerokość) */}
            <div className="md:max-h-full col-start-1 col-span-full row-start-1 row-span-1 md:col-start-1 md:col-span-full md:row-start-1 md:row-span-1 lg:col-start-1 lg:col-span-full lg:row-start-1 lg:row-span-1">
                <HeroScore />
            </div>

            {/* 2. LOGO */}
            {/* Mobile: 2. rząd (pełna szerokość) */}
            <div className="col-start-1 col-span-full row-start-2 row-span-1 md:col-start-1 md:col-span-3 md:row-start-2 md:row-span-1 lg:col-start-1 lg:col-span-3 lg:row-start-2 lg:row-span-3">
                <HeroLogo logoSrc="/pp.png" />
            </div>

            {/* 3. BIO */}
            {/* Mobile: 3. rząd */}
            <div className="col-start-1 col-span-full row-start-3 row-span-1 md:col-start-1 md:col-span-full md:row-start-3 md:row-span-1 lg:col-start-1 lg:col-span-2 lg:row-start-5 lg:row-span-2">
                <HeroBio />
            </div>

            {/* 4. SOCIAL STATS */}
            {/* Mobile: 4. rząd */}
            <div className="col-start-1 col-span-full row-start-4 row-span-1 md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-1 lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-2">
                <HeroSocialStats className="" />
            </div>

            {/* 5. MARQUEE (GÓRNE) */}
            {/* Mobile: 5. rząd */}
            <div className="col-start-1 col-span-full row-start-5 row-span-1 overflow-hidden md:col-start-1 md:col-span-full md:row-start-4 md:row-span-1 lg:col-start-4 lg:col-span-full lg:row-start-4 lg:row-span-1">
                <HeroMarquee title={heroTitles} direction="left" className="bg-neutral-800/80 h-1/2" />
                <HeroMarquee title={heroTitles} direction="right" className="bg-neutral-800/30 h-1/2 " />
            </div>

            {/* 6. REKLAMA (AD) */}
            {/* Mobile: 6. rząd */}
            <div className="col-start-1 col-span-full row-start-6 row-span-1 bg-white/30 md:col-start-1 md:col-span-full md:row-start-5 md:row-span-2 lg:col-start-3 lg:col-span-4 lg:row-start-5 lg:row-span-2">
                <HeroAd />
            </div>

            {/* 7. LAST POST */}
            {/* Mobile: 7. rząd (był 8) */}
            <div className="col-start-1 col-span-full row-start-7 row-span-1 flex items-center justify-center md:col-start-1 md:col-span-full md:row-start-7 md:row-span-1 lg:col-start-1 lg:col-span-full lg:row-start-7 lg:row-span-2">
                <HeroInfoBar />
            </div>

            {/* 8. VIDEO + INFO */}
            {/* ZAMIANA: Zwykły div -> ScrollReveal */}
            <ScrollReveal
                amount={0.2}     // Odpali, gdy 20% sekcji będzie widoczne
                stagger={0.2}    // Opóźnienie między Info a Video (0.2s)
                className="col-start-1 col-span-full row-start-8 row-span-5 grid grid-rows-6 gap-0.5 md:col-start-1 md:col-span-full md:row-start-8 md:row-span-3 md:grid-cols-6 md:grid-rows-1 lg:col-start-1 lg:col-span-full lg:row-start-9 lg:row-span-5"
            >

                {/* Info Wrapper */}
                {/* Ponieważ ScrollReveal jest teraz rodzicem, ten div jest pierwszym dzieckiem. */}
                {/* HeroEpInfo w środku odbierze sygnał 'visible' */}
                <div className="row-start-1 row-span-1 border-t-2 border-b-2 border-neutral-600 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-full lg:col-span-2">
                    <HeroEpInfo title={video.title} statistics={video.statistics} />
                </div>

                {/* Video Wrapper */}
                <div className="row-start-2 row-span-full md:col-start-3 md:col-span-4 md:row-start-1 md:row-span-full lg:col-start-3 lg:col-span-4">
                    {/* Tu wstawisz HeroEpVideo, ono też odbierze sygnał */}
                    <HeroEpVideo videoId={video.videoId} thumbnail={video.thumbnail} />
                </div>

            </ScrollReveal>

        </section>
    );
}