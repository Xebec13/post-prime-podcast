"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import Icon from "../ui/Icon";
import ScrollReveal from "../ui/ScrollReveal";

const recentVideos = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    title: `Episode ${101 + i}: Analysis of the Game and Future Prospects`,
    views: "12K views",
    date: "2 days ago",
    thumbnail: "/postprime-hero.png"
}));

// Wariant dla pojedynczego kafelka (Wjazd z dołu + Fade)
const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function YoutubeList() {
    // 1. Ref dla kontenera, żeby wiedzieć kiedy przewijamy tę sekcję
    const containerRef = useRef<HTMLDivElement>(null);

    // 2. Hook do śledzenia scrolla
    // offset: ["start end", "end start"] -> animacja trwa od momentu, 
    // gdy góra komponentu wejdzie w dół ekranu, aż dół komponentu wyjdzie górą.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // 3. Mapujemy scroll (0 -> 1) na pozycję Y piłki (px) i obrót
    // Piłka przesunie się o 300px w dół i obróci o 180 stopni w trakcie przewijania
    const ballYRight = useTransform(scrollYProgress, [0, 1], [-100, 1000]);
    const ballYLeft = useTransform(scrollYProgress, [0, 1], [-50, 800]);
    const ballRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const ballOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="relative w-full">

            {/* === SPADAJĄCA PIŁKA (Parallax) === */}
            <motion.div
                style={{
                    y: ballYRight,
                    rotate: ballRotate,
                    opacity: ballOpacity
                }}
                className="absolute top-0 right-0 z-0 text-orange-500/40 pointer-events-none"
            >
                <Icon name="Basketball" className="size-18 md:size-46 lg:size-96" />
            </motion.div>
            <motion.div
                style={{
                    y: ballYLeft,
                    rotate: ballRotate,
                    opacity: ballOpacity
                }}
                className="absolute top-0 left-0 z-0 text-orange-500/50 pointer-events-none"
            >
                <Icon name="Basketball" className="size-18 md:size-46 lg:size-96" />
            </motion.div>
            {/* === GRID Z FILMAMI === */}
            {/* ScrollReveal z staggerem 0.1s wyzwoli warianty dzieci jeden po drugim */}
            <ScrollReveal
                stagger={0.1}
                className="relative grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 z-10"
            >
                {recentVideos.map((video) => {
                    return (
                        <motion.div
                            key={video.id}
                            // Podpinamy wariant elementu (ScrollReveal jako rodzic wywoła 'visible')
                            variants={itemVariants}
                            className="relative group flex flex-col gap-3 p-1.5 md:p-3 rounded-xl cursor-pointer"
                        >
                            {/* TŁO ANIMOWANE OD ŚRODKA */}
                            <span className="absolute inset-0 bg-inherit rounded-xl scale-95 group-hover:scale-100 group-hover:bg-orange-500/30 transition-all duration-300 ease-out z-0" />

                            {/* MINIATURKA */}
                            <div className="relative w-full aspect-video overflow-hidden bg-neutral-900/90 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                            </div>

                            {/* TREŚĆ */}
                            <div className="relative flex flex-col gap-1.5 px-1 md:px-2">
                                <h4 className="text-sm lg:text-base font-bold text-gray-200 group-hover:text-white leading-tight tracking-tight line-clamp-2 transition-colors">
                                    {video.title}
                                </h4>
                                <div className="flex gap-3 text-[10px] text-neutral-400 font-medium uppercase tracking-wider group-hover:text-neutral-200 transition-colors">
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