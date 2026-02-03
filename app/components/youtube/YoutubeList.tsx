"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import Icon from "../ui/Icon";
import ScrollReveal from "../ui/ScrollReveal";
import { VideoItem } from "./Youtube"; // Upewnij się, że nazwa pliku jest identyczna

// Wariant dla kafelka (Wjazd + Fade)
const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

interface YoutubeListProps {
    videos: VideoItem[];
    onVideoSelect: (video: VideoItem) => void;
    activeId: string;
}

export default function YoutubeList({ videos, onVideoSelect, activeId }: YoutubeListProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Paralaksa piłek - śledzimy scroll kontenera
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Mapowanie scrolla na ruch i obrót piłek
    const ballYRight = useTransform(scrollYProgress, [0, 1], [-100, 1000]);
    const ballYLeft = useTransform(scrollYProgress, [0, 1], [-50, 800]);
    const ballRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const ballOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef}  className="relative w-full">

            {/* === ELEMENTY PARALAKSY (PIŁKI) === */}
            <motion.div
                style={{ y: ballYRight, rotate: ballRotate, opacity: ballOpacity }}
                className="absolute top-0 right-10 md:right-25 z-0 text-orange-500/40 pointer-events-none"
            >
                <Icon name="Basketball" className="size-18 md:size-46 lg:size-96" />
            </motion.div>
            
            <motion.div
                style={{ y: ballYLeft, rotate: ballRotate, opacity: ballOpacity }}
                className="absolute top-0 left-5 md:left-15 z-0 text-orange-500/50 pointer-events-none"
            >
                <Icon name="Basketball" className="size-18 md:size-46 lg:size-96" />
            </motion.div>

            {/* === GRID Z FILMAMI === */}
            <ScrollReveal
                stagger={0.1}
                className="relative grid grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-5 z-10"
            >
                {videos.map((video) => {
                    const isActive = activeId === video.id;

                    return (
                        <motion.div
                            key={video.id}
                            variants={itemVariants}
                            onClick={() => onVideoSelect(video)}
                            className="relative group flex flex-col gap-3 p-1.5 md:p-3 rounded-xl cursor-pointer"
                        >
                            {/* TŁO ANIMOWANE / PODŚWIETLENIE AKTYWNEGO */}
                            <span className={`
                                absolute inset-0 rounded-xl transition-all duration-300 ease-out z-0
                                ${isActive ? "bg-orange-500/90 scale-100" : "bg-transparent scale-95 group-hover:scale-100 group-hover:bg-orange-500/30"}
                            `} />

                            {/* MINIATURKA */}
                            <div className="relative w-full aspect-video overflow-hidden bg-neutral-900/90 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {isActive && (
                                    <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center">
                                        <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                                            Oglądasz
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* TREŚĆ */}
                            <div className="relative grid grid-rows-3 gap-1.5 px-1 md:px-2">
                                <h4 className={`row-span-2 min-h-5
                                    text-xs md:text-sm lg:text-base font-bold leading-tight tracking-tight line-clamp-2 transition-colors 
                                    ${isActive ? "text-white" : "text-gray-50 group-hover:text-white"}
                                `}>
                                    {video.title}
                                </h4>
                                {/* TOOLTIP */}
   
                                <div className="row-span-1 flex md:justify-end items-end gap-3 text-[8px] md:text-[10px] text-gray-50 font-medium uppercase tracking-wider group-hover:text-gray-100 transition-colors">
                                    <span>{video.views}</span>
                                    <span>{video.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </ScrollReveal>
        </div>
    );
}