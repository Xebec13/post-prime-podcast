import YoutubeManager from "./YoutubeManager";
import YoutubeTitle from "./YoutubeTitle";
import { SmartLinkLg } from "../ui/SmartLinks";
import { getLatestVideosList } from "../utils/youtube";
// Typ danych, który będziemy pobierać z API
export interface VideoItem {
    id: string;
    title: string;
    thumbnail: string;
    views?: string;
    date?: string;
}

export default async function YouTube() {
    // Wewnątrz Youtube.tsx (Server Component)
    const rawVideos = await getLatestVideosList(9);

    const formattedVideos = rawVideos.map(v => {
        const views = Number(v.statistics.viewCount);
        const formattedViews = views >= 1000
            ? `${(views / 1000).toFixed(1)}k wyświetleń`
            : `${views} wyświetleń`;

        return {
            id: v.videoId,
            title: v.title,
            thumbnail: v.thumbnail,
            views: formattedViews,
            date: new Date(v.publishedAt).toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "short"
            })
        };
    });
    // Fallback jeśli API nie zwróci nic
    if (formattedVideos.length === 0) return null;

    return (
        <section id="youtube" className="relative w-full space-y-6 lg:space-y-10 pb-10 bg-neutral-900/50">
            <YoutubeTitle title="YouTube" />

            {/* Manager dostaje teraz prawdziwe filmy */}
            <YoutubeManager initialVideos={formattedVideos} />

            <div className="flex px-5 justify-end relative right-5 z-10 text-gray-50 transition-colors hover:text-white">
                <SmartLinkLg
                    text="odwiedź kanał"
                    href="https://www.youtube.com/@PostPrimePL"
                    isExternal={true}
                />
            </div>
        </section>
    );
}