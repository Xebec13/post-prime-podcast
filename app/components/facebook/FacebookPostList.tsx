"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import { IconLink } from "../ui/SmartLinks";
import Icon from "../ui/Icon";
import ScrollReveal from "../ui/ScrollReveal";

const fbPosts = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    // Symulacja długiego tekstu (niektóre krótkie, niektóre bardzo długie)
    content: i === 1 
        ? "This is a massive post example. Ideally, content this long would break the grid layout if we didn't use a scrollable container. Imagine 1000 words here describing the tactical nuances of the last game, player stats, historical comparisons, and future predictions. The user can scroll this specific area to read everything without leaving the page, and the grid remains perfectly symmetrical. It's the best of both worlds: full content accessibility and clean UI design. We can keep adding text here to prove the point. The scrollbar will appear automatically." 
        : "The playoffs are around the corner. Who is your pick for the MVP this season? Let us know in the comments below! 🏀🏆",
    likes: 350 + (i * 20),
    comments: 12 + i,
    date: `${i + 1}d ago`,
    image: "/postprime-hero.png"
}));

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

export default function FacebookPostList() {
    return (
        <div className="relative w-full">
            <ScrollReveal 
                stagger={0.1} 
                className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6"
            >
                {fbPosts.map((post) => (
                    <motion.div
                        key={post.id}
                        variants={itemVariants}
                        className="group relative flex flex-col bg-neutral-900/40 overflow-hidden hover:border-blue-600/50 transition-colors duration-300 h-full"
                    >
                        {/* === 1. ZDJĘCIE (ASPECT 4/3) === */}
                        <div className="relative w-full aspect-4/3 bg-black overflow-hidden shrink-0">
                            <Image
                                src={post.image}
                                alt="Post thumbnail"
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
                        </div>

                        {/* === 2. TREŚĆ + STOPKA === */}
                        <div className="flex flex-col grow p-3 gap-3 overflow-hidden">
                            
                            {/* DATA */}
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 shrink-0">
                                {post.date}
                            </span>

                           
                            <div className="text-sm text-gray-300 leading-relaxed h-35 overflow-y-auto pr-2 group-hover:text-gray-100 transition-colors">
                                {post.content}
                            </div>

                            {/* STOPKA (Przyklejona do dołu kontenera flex) */}
                            <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5 text-xs font-bold text-neutral-400 shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 group-hover:text-blue-500 transition-colors">
                                        <Icon name="Like" size={14} />
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 group-hover:text-blue-400 transition-colors">
                                        <Icon name="Comment" size={14} />
                                        <span>{post.comments}</span>
                                    </div>
                                </div>

                                <div className="text-gray-50 group-hover:text-white transition-colors">
                                    <IconLink href="#" size={16} className="text-inherit" />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </ScrollReveal>
        </div>
    );
}