// src/components/Hero/HeroEpInfo.tsx
// import { getLatestVideoDetails } from "@/utils/youtube"; // ZAKOMENTOWANE NA CZAS STYLOWANIA

export default async function HeroEpInfo() {
    // const video = await getLatestVideoDetails(); // ZAKOMENTOWANE NA CZAS STYLOWANIA

    // DANE TESTOWE DO STYLOWANIA
    const video = {
        title: "LBJ POBIJA REKORD! Czy to koniec ery Warriors? | Post Prime Podcast #42",
        statistics: {
            viewCount: "12450",
            likeCount: "892",
            commentCount: "145"
        }
    };

    // if (!video) { return <div>Ładowanie...</div> } // ZAKOMENTOWANE

    const { title, statistics } = video;

    return (
        <div className="size-full flex flex-col justify-between gap-1 p-2 border-current border-b-2 border-t-2">
            <div className="overflow-hidden capitalize">
                <h2 className="text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-tight text-zinc-100 ">
                    {title}
                </h2>
            </div>

            <div className="self-end flex flex-wrap gap-4 text-sm font-medium text-zinc-100">
                <div className="flex items-center gap-1">
                    <span>ikona</span>
                    <p>
                        {Number(statistics.viewCount).toLocaleString()}
                    </p>
                </div>
                <div className="flex items-center gap-1">
                    <span>ikona</span>
                    <p>
                        {Number(statistics.likeCount).toLocaleString()}
                    </p>
                </div>
                <div className="flex items-center gap-1">
                    <span>ikona</span>
                    <p>
                        {Number(statistics.commentCount).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
}