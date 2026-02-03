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
import { NBAGame } from "./components/HeroScore";
import { SocialStatItem } from "./components/HeroSocialStats";
export default function Hero() {
    // Symulacja danych z API
    const nbaGames: NBAGame[] = [
        {
            id: "1",
            status: "FINAL",
            awayTeam: { code: "LAL", logo: "/teams/lal.png", score: 112 },
            homeTeam: { code: "BOS", logo: "/teams/bos.png", score: 105 }
        },
        {
            id: "2",
            status: "LIVE - Q3",
            awayTeam: { code: "GSW", logo: "/teams/gsw.png", score: 88 },
            homeTeam: { code: "PHX", logo: "/teams/phx.png", score: 92 }
        },
        // ... więcej meczów
    ]
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
    // === 1. DANE ===
    const videoData = {
        videoId: "Iq5GNa7sPjY",
        title: "Błąd pobierania danych z YouTube",
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
            href: "https://youtube.com",
            icon: "Youtube",
            textColor: "text-red-600",
            stats: { subscribers: "125K", views: "12M", goals: "200K" }
        },
        {
            key: "facebook",
            title: "@postprimepl",
            href: "https://facebook.com",
            icon: "Facebook",
            textColor: "text-blue-600",
            stats: { subscribers: "45K", views: "150K", goals: "50K" }
        },
        {
            key: "instagram",
            title: "@postprime_pl",
            href: "https://instagram.com",
            icon: "Instagram",
            textColor: "text-fuchsia-500",
            stats: { subscribers: "80K", views: "2M", goals: "100K" }
        },
    ];
    const adImages = [
        "/pp-fund.jpg",       
        "/pp-wba.png",                             
        "/pp-obl.jpg",       
        "/pp-ad.jpg"
    ];
    // === 2. SKŁADANIE (COMPOSITION) ===
    // Tworzymy gotowe elementy, karmiąc je danymi
    return (
        <HeroLayout
            // Statyczne komponenty po prostu przekazujemy
            scoreSlot={<HeroScore games={nbaGames} dateLabel="NBA Live Scores" />}
            adSlot={<HeroAd images={adImages} />}
            socialSlot={
                <HeroSocialStats items={socialData} />
            }
            bioSlot={
                <HeroBio intro={bioData.intro}
                    highlight={bioData.names}
                    outro={bioData.outro} />}
            infoBarSlot={<HeroInfoBar 
                    formattedDate={serverFormattedDate}
                    infoLabel={infoData.label}
                    highlight={infoData.highlight}
                />}

            // Komponenty z danymi karmimy tutaj
            logoSlot={
                <HeroLogo logoSrc={logoData.src} bgSrc={logoData.bg} />
            }

            marqueeSlot={
                <>
                    <HeroMarquee title={marqueeTitles} direction="left" className="bg-neutral-800/80 h-1/2" />
                    <HeroMarquee title={marqueeTitles} direction="right" className="bg-neutral-800/30 h-1/2" />
                </>
            }

            videoInfoSlot={
                <HeroEpInfo title={videoData.title} statistics={videoData.statistics} />
            }

            videoContentSlot={
                <HeroEpVideo videoId={videoData.videoId} thumbnail={videoData.thumbnail} />
            }
        />
    );
}