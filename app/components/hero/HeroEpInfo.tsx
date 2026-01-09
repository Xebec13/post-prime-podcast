interface HeroEpInfoProps {
    title: string;
    statistics: {
        viewCount: string;
        likeCount: string;
        commentCount: string;
    };
}

export default function HeroEpInfo({ title, statistics }: HeroEpInfoProps) {
    return (
        <div className="size-full text-inherit flex flex-col justify-between gap-1 p-2 border-current border-b-2 border-t-2">
            <div className="overflow-hidden capitalize">
                <h2 className="text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-tight">
                    {title}
                </h2>
            </div>

            <div className="self-end flex flex-wrap gap-4 text-sm font-medium">
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