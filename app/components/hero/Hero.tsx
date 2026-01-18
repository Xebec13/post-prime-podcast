import HeroEpInfo from "./HeroEpInfo";
import HeroEpVideo from "./HeroEpVideo";
import HeroLogo from "./HeroLogo";
import HeroTitle from "./HeroTitle";

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
            className="h-[150vh] bg-inherit py-11 grid grid-cols-[repeat(5,1fr)_0.5fr] grid-rows-[repeat(5,0.5fr)] gap-0.5"
        >
            {/* Logo */}
            <div className="row-start-1 row-span-2 col-span-full md:col-span-3 md:row-span-3 flex justify-center size-full border-2">
                <HeroLogo logoSrc="/postprime-logo-2.png" />
            </div>

            {/* Górny prawy blok */}
            <div className="row-start-3 col-span-3  md:col-start-4 md:col-span-3 md:row-span-2 border-2">NBA</div>

            {/* Marquee / tytuły */}
            <div className="row-start-3 col-span-3 md:col-start-4 md:row-start-3 md:col-span-3 border-2">
                <HeroTitle title={heroTitles} />
            </div>

            {/* Video + Info w jednym wrapperze */}
            <div className="row-start-4 row-span-full col-span-full  md:h-[75vh] grid grid-cols-[2fr_4fr] gap-0.5">

                {/* Info */}
                <div className="border-2 size-full">
                    <HeroEpInfo title={video.title} statistics={video.statistics} />
                </div>

                {/* Video */}
                <div className="border-2 size-full">
                    <HeroEpVideo videoId={video.videoId} thumbnail={video.thumbnail} />
                </div>

            </div>

        </section>
    )
}