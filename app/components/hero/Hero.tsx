import { getLatestVideoDetails } from "../utils/youtube";
import { getNBALiveScores } from "../utils/nba";
import {
    HeroLayout,
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
import { SocialStatItem } from "./components/HeroSocialStats";

export default async function Hero() {
    // 1. POBIERANIE DANYCH (Równolegle dla wydajności)
    const videoData = await getLatestVideoDetails();
    const nbaData = await getNBALiveScores();

    // 2. DATA DLA INFOBARA
    const date = new Date();
    const serverFormattedDate = date.toLocaleDateString("pl-PL", {
        month: "long",
        day: "2-digit",
        year: "numeric"
    });

    const infoData = {
        label: "Last news from ",
        highlight: "Post Prime"
    };

    // 3. FALLBACK WIDEO (Gdyby API YouTube zawiodło)
    const finalVideo = videoData || {
        videoId: "dQw4w9WgXcQ", 
        title: "Błąd ładowania najnowszego odcinka",
        thumbnail: "/postprime-hero.png",
        statistics: { viewCount: "0", likeCount: "0", commentCount: "0" }
    };

    const marqueeTitles = ["podcast", "rozmowy", "koszykówka", "NBA"];

    const logoData = {
        src: "/pp.png",
        bg: "/pp-wooden-floor.jpg"
    };

    const bioData = {
        intro: "Po najlepszych latach odległej już młodości, zaorani przez dorosłość i obowiązki oraz po latach pisania dla czołowych tytułów dotyczących amerykańskiej koszykówki w Polsce, ",
        names: "Wooden, Marcin, Piotrek",
        outro: " postanowili zrobić coś razem. Piszemy tak jak zawsze chcieliśmy, piszemy w swoim tempie. Chcemy pisać dobrze. Robić coś wyjątkowego. Żyć basketem. I chcemy przy tym dobrej zabawy. Dla siebie i dla Ciebie Czytelniku!"
    };

    const socialData: SocialStatItem[] = [
        {
            key: "youtube",
            title: "PostPrimePL",
            href: "https://www.youtube.com/@PostPrimePL",
            icon: "Youtube",
            textColor: "text-red-600",
            stats: { subscribers: "125K", views: "12M", goals: "200K" }
        },
        {
            key: "facebook",
            title: "@postprimepl",
            href: "https://www.facebook.com/postprimepl/",
            icon: "Facebook",
            textColor: "text-blue-600",
            stats: { subscribers: "45K", views: "150K", goals: "50K" }
        },
        {
            key: "instagram",
            title: "postprime_pl",
            href: "https://www.instagram.com/postprime_pl/",
            icon: "Instagram",
            textColor: "text-fuchsia-500",
            stats: { subscribers: "87", views: "2M", goals: "100K" }
        },
    ];

    const adImages = [
        "/pp-fund.jpg",
        "/pp-wba.png",
        "/pp-obl.jpg",
        "/pp-ad.jpg"
    ];

    // === 4. SKŁADANIE (COMPOSITION) ===
    return (
        <HeroLayout
            // Przekazujemy pobrane dane NBA
            scoreSlot={
                <HeroScore
                    yesterdayGames={nbaData.yesterday}
                    todayGames={nbaData.today}
                    tomorrowGames={nbaData.tomorrow}
                    labels={nbaData.labels}
                />
            }
            adSlot={<HeroAd images={adImages} />}
            socialSlot={<HeroSocialStats items={socialData} />}
            bioSlot={
                <HeroBio 
                    intro={bioData.intro}
                    highlight={bioData.names}
                    outro={bioData.outro} 
                />
            }
            infoBarSlot={
                <HeroInfoBar
                    formattedDate={serverFormattedDate}
                    infoLabel={infoData.label}
                    highlight={infoData.highlight}
                />
            }
            logoSlot={<HeroLogo logoSrc={logoData.src} bgSrc={logoData.bg} />}
            marqueeSlot={
                <>
                    <HeroMarquee title={marqueeTitles} direction="left" className="bg-neutral-800/80 h-1/2" />
                    <HeroMarquee title={marqueeTitles} direction="right" className="bg-neutral-800/30 h-1/2" />
                </>
            }
            videoInfoSlot={
                <HeroEpInfo
                    title={finalVideo.title}
                    statistics={finalVideo.statistics}
                />
            }
            videoContentSlot={
                <HeroEpVideo
                    videoId={finalVideo.videoId}
                    thumbnail={finalVideo.thumbnail}
                />
            }
        />
    );
}