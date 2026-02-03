import YoutubeManager from "./YoutubeManager";
import YoutubeTitle from "./YoutubeTitle";
import { SmartLinkLg } from "../ui/SmartLinks";

// Typ danych, który będziemy pobierać z API
export interface VideoItem {
    id: string;
    title: string;
    thumbnail: string;
    views?: string;
    date?: string;
}

export default function YouTube() {
    // Tutaj w przyszłości: const videos = await getYoutubeVideos();
    const mockVideos: VideoItem[] = Array.from({ length: 9 }).map((_, i) => ({
        id: `video-${i}`,
        title: `Episode ${101 + i}: Analysis of the Game and Future Prospects`,
        views: "12K views",
        date: "2 days ago",
        thumbnail: "/postprime-hero.png"
    }));

    return (
        <section id="youtube" className="relative w-full space-y-6 lg:space-y-10 pb-10 bg-neutral-900/50">
            <YoutubeTitle title="YouTube" />

            {/* Przekazujemy dane do Managera, który obsłuży interakcję */}
            <YoutubeManager initialVideos={mockVideos} />

            <div className="text-sm md:text-base flex px-5 justify-end relative right-10 z-10 text-gray-50 transition-colors hover:text-white">
                <SmartLinkLg 
                    text="odwiedź kanał" 
                    href="https://www.youtube.com/@PostPrimePL" 
                    isExternal={true}
                />
            </div>
        </section>
    );
}