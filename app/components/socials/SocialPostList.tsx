"use client";

import Image from "next/image";
import { motion} from "motion/react";
import { IconLink } from "../ui/SmartLinks";
import Icon from "../ui/Icon";
import ScrollReveal from "../ui/ScrollReveal";

export interface PostItem {
    id: number;
    content: string;
    likes: string | number;
    comments: string | number;
    date: string;
    image: string;
    url: string;
}



export default function SocialPostList({ posts, brandColor }: { posts: PostItem[], brandColor: string }) {
    // Wyciągamy klasę koloru hover (np. text-blue-500 z bg-blue-500/90)
    const hoverTextColor = brandColor.replace("bg-", "text-").replace("/90", "");

    return (
        <ScrollReveal stagger={0.2} className="relative grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {posts.map((post) => (
                <motion.div
                    key={post.id}
                    className="group relative flex flex-col bg-neutral-900/40 overflow-hidden border border-transparent hover:border-white/10 transition-all duration-300 h-full"
                >
                    <div className="relative w-full aspect-square md:aspect-4/3 overflow-hidden shrink-0">
                        <Image src={post.image} alt="Post" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${brandColor}`} />
                    </div>

                    <div className="flex flex-col grow p-4 gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{post.date}</span>
                        
                        {/* Kontener tekstu z fixed height dla zachowania równego gridu */}
                        <div className="text-sm text-gray-300 leading-relaxed h-24 overflow-y-auto no-scrollbar group-hover:text-gray-100">
                            {post.content}
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                            <div className="flex items-center gap-3 text-xs font-bold text-neutral-400">
                                <div className={`flex items-center gap-1.5 transition-colors group-hover:${hoverTextColor}`}>
                                    <Icon name="Like" size={14} />
                                    <span>{post.likes}</span>
                                </div>
                                <div className={`flex items-center gap-1.5 transition-colors group-hover:${hoverTextColor}`}>
                                    <Icon name="Comment" size={14} />
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                            <IconLink href={post.url} size={16} className={`text-gray-50 hover:${hoverTextColor}`} />
                        </div>
                    </div>
                </motion.div>
            ))}
        </ScrollReveal>
    );
}