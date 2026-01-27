import {
    HeroEpInfo,
    HeroEpVideo,
    HeroLogo,
    HeroScore,
    HeroMarquee,
    HeroAudienceStats,
    HeroLinks,
} from "./components";

export default async function Hero() {
    const video = {
        videoId: "Iq5GNa7sPjY",
        title: "Błąd pobierania danych z YouTube",
        thumbnail: "/postprime-hero.png",
        statistics: { viewCount: "0", likeCount: "0", commentCount: "0" }
    };
    const heroTitles = ["podcast", "rozmowy", "koszykówka"];

    return (
        <section
            id="home"
            className="grid h-[150vh] grid-cols-[repeat(5,1fr)_0.5fr] grid-rows-10 gap-0.5 bg-inherit px-1 pt-11 md:grid-rows-[repeat(5,0.5fr)]"
        >
            {/* 1. LOGO */}
            {/* Mobile: Lewy górny róg (3 kolumny). Desktop: Lewy górny kwadrat (2x2) */}
            <div className="col-start-1 col-span-2 row-start-1  border-2 md:col-span-2 md:row-span-2">
                <HeroLogo logoSrc="/postprime-logo-2.png" />
            </div>

            {/* 2. AUDIENCE STATS */}
            {/* Mobile: Mały kwadrat pod logo. Desktop: Środkowa kolumna, górne 2 rzędy */}
            <div className="row-span-1 row-start-2 border-2 md:col-span-1 md:col-start-3 md:row-span-2 md:row-start-1">
                <HeroAudienceStats />
            </div>

            {/* 3. HERO SCORE */}
            {/* Mobile: Obok Stats, 2 rzędy. Desktop: Prawa strona, górne 2 rzędy */}
            <div className="col-span-full col-start-2 row-span-2 row-start-2 border-2 md:col-span-full md:col-start-4 md:row-span-2 md:row-start-1">
                <HeroScore />
            </div>

            {/* 4. MARQUEE / TYTUŁY */}
            {/* Mobile: Prawy górny róg. Desktop: Lewa strona, 3 rząd */}
            <div className="col-span-full col-start-3 row-start-1 border-2 md:col-span-2 md:col-start-1 md:row-start-3">
                <HeroMarquee title={heroTitles} />
            </div>

            {/* 5. LINKS */}
            {/* Mobile: Pod Stats. Desktop: Pod Marquee, 4 rząd */}
            <div className="row-start-3 col-start-1  border-2 md:col-span-2 md:row-start-4 min-w-25">
                <HeroLinks />
            </div>

            {/* 6. AD (REKLAMA) */}
            {/* Mobile: Cała szerokość, 4 rząd. Desktop: Środek, pod Stats */}
            <div className="col-span-full col-start-1 row-start-4 border-2 bg-neutral-400 md:col-start-3 md:row-span-2">
                ad
            </div>

            {/* 7. LAST POST */}
            {/* Mobile: 5 rząd. Desktop: 5 rząd (dół górnej sekcji) */}
            <div className="col-span-full col-start-1 row-start-5 border-2 text-center md:row-start-5">
                Last Post
            </div>

            {/* 8. VIDEO + INFO WRAPPER (DOLNA POŁOWA EKRANU) */}
            {/* Zajmuje wszystko od 6 rzędu do dołu */}
            <div className="col-span-full row-span-full row-start-6 grid grid-cols-[repeat(5,1fr)_0.5fr] gap-0.5 md:min-h-[75vh]">

                {/* Info (Tytuł + Statystyki) */}
                <div className="col-span-2 size-full border-2">
                    <HeroEpInfo title={video.title} statistics={video.statistics} />
                </div>

                {/* Video Player */}
                <div className="col-span-full col-start-3 size-full border-2">
                    <HeroEpVideo videoId={video.videoId} thumbnail={video.thumbnail} />
                </div>

            </div>

        </section>
    );
}