"use client";

import AboutCard from "./AboutCard";
import Separator from "../ui/Separators";
import ScrollReveal from "../ui/ScrollReveal";

// Dane z dodanymi socialami
const hosts = [
    {
        id: 1,
        name: "Maciej Staszewski",
        role: "Dziennikarz / Prowadzący",
        hostImg: "/post-prime-ms.png",
        hostBg: "/pp-ms-bg-1.jpg",
        socials: {
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
        }
    },
    {
        id: 2,
        name: "Marcin Gortat",
        role: "Ex-NBA Player",
        hostImg: "/post-prime-mg.png",
        hostBg: "/post-prime-mg-bg.jpg",
        socials: {
            twitter: "https://twitter.com",
            instagram: "https://instagram.com",
            facebook: "https://facebook.com"
        }
    },
    {
        id: 3,
        name: "Piotr Zarychta",
        role: "Dziennikarz / Analityk",
        hostImg: "/post-prime-pz.png",
        hostBg: "/post-prime-pz-bg.jpg.webp",
        socials: {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-15 bg-neutral-900/50">

            {/* === NAGŁÓWEK SEKCJI === */}
            <ScrollReveal 
                amount={0.5} 
                stagger={0.15} 
                className="w-full flex flex-col items-center justify-center pb-15 px-4"
            >
                {/* 1. LINIE GÓRNE */}
                <div className="flex flex-col items-center gap-2.5 w-full">
                    <Separator width="long" color="bg-neutral-700" />
                    <Separator width="mid" color="bg-neutral-700/50" />
                </div>

                {/* 2. TREŚĆ (H2) */}
                <div className="my-10 text-center">
                    <h2 className="font-playfair text-neutral-950 bg-orange-50 px-10 py-1.5 font-black capitalize tracking-tighter text-[clamp(2rem,2.5rem+1vw,4rem)] whitespace-nowrap shadow-lg">
                        Autorzy
                    </h2>
                </div>

                {/* 3. LINIE DOLNE */}
                <div className="flex flex-col items-center gap-2.5 w-full">
                    <Separator width="min" color="bg-neutral-700/50" />
                    <Separator width="long" color="bg-neutral-700" />
                </div>
            </ScrollReveal>

            {/* === GRID Z KARTAMI === */}
            <div className="px-4 md:px-10">
                <ScrollReveal 
                    amount={0.2} 
                    stagger={0.2} 
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                >
                    {hosts.map((host) => (
                        <AboutCard
                            key={host.id}
                            host={host}
                        />
                    ))}
                </ScrollReveal>
            </div>

            {/* Link "więcej o nas" usunięty zgodnie z życzeniem */}

        </section>
    );
}