import SocialPostList, { PostItem } from "./SocialPostList";
import SocialTitle from "./SocialTitle";
import { SmartLinkLg } from "../ui/SmartLinks";

interface SocialSectionProps {
    id: "facebook" | "instagram";
    title: string;
    brandColor: string; // np. "bg-blue-600" lub "bg-fuchsia-600"
    posts: PostItem[];
    channelUrl: string;
}

export default function SocialSection({ id, title, brandColor, posts, channelUrl }: SocialSectionProps) {
    return (
        <section id={id} className="w-full space-y-6 lg:space-y-10 pb-10">
            <SocialTitle title={title} brandColor={brandColor} />

            <div className="px-4 md:px-10">
                <SocialPostList posts={posts} brandColor={brandColor} />
            </div>

            <div className="text-xs md:text-sm flex px-5 justify-end relative right-5 md:right-10 z-10 text-gray-50 transition-colors hover:text-white">
                <SmartLinkLg
                    iconSize={14}
                    text={`odwiedź ${id}`}
                    href={channelUrl}
                    isExternal={true}
                />
            </div>
        </section>
    );
}