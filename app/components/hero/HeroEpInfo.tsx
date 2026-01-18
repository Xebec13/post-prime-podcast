import Icon from "../ui/Icon";

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
        <div className="size-full text-inherit flex flex-col justify-between gap-1 p-2 ">
            <div className="overflow-hidden">
                <p className="text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-tight">
                    {title}
                </p>
            </div>

            <div className="self-end inline-flex gap-3 text-sm font-medium">
                <div className="inline-flex justify-center items-center gap-1.5 p-1">
                    <span><Icon name="Like" size={12} /></span>
                    <p>
                        {Number(statistics.viewCount).toLocaleString()}
                    </p>
                </div>
                <div className="inline-flex justify-center items-center gap-1.5 p-1">
                    <span><Icon name="View" size={12} /></span>
                    <p>
                        {Number(statistics.likeCount).toLocaleString()}
                    </p>
                </div>
                <div className="inline-flex justify-center items-center gap-1.5 p-1">
                    <span><Icon name="Comment" size={12} /></span>
                    <p>
                        {Number(statistics.commentCount).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
}