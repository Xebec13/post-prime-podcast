import HeroEpInfo from "./HeroEpInfo"; // Import bezpośredni (chyba że wolisz z index)
import HeroEpVideo from "./HeroEpVideo";
// import { getLatestVideoDetails } from "../utils/youtube";

export default async function Hero() {
    // 1. Pobieranie danych z API
    // const videoData = await getLatestVideoDetails();

    // 2. Dane awaryjne (Fallback) - jeśli API zawiedzie, strona się nie wywali videoData ||
    const video =  {
        videoId: "Iq5GNa7sPjY",
        title: "Błąd pobierania danych z YouTube",
        thumbnail: "/postprime-hero.png",
        statistics: { viewCount: "0", likeCount: "0", commentCount: "0" }
    };

    return (
        <section
            id="home"
            className="min-h-screen bg-orange-50">
            
            {/* <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 place-items-stretch gap-5 p-5 lg:p-10">
                <div className="order-2 lg:order-1">
                    
                    <HeroEpInfo title={video.title} statistics={video.statistics} />
                </div>
                <div className="order-1 lg:order-2 col-span-1 lg:col-span-2 w-full">
                    
                    <HeroEpVideo videoId={video.videoId} thumbnail={video.thumbnail} />
                </div>
            </div> */}
        </section>
    )
}