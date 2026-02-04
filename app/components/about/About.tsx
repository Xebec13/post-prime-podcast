import AboutCard, { Host } from "./AboutCard";
import AboutTitle from "./AboutTitle";
import ScrollReveal from "../ui/ScrollReveal";

const HOSTS: Host[] = [
    {
        id: 1,
        name: "Maciej Staszewski",
        role: "Dziennikarz / Prowadzący",
        hostImg: "/post-prime-ms.png",
        hostBg: "/pp-ms-bg-1.jpg",
        socials: { facebook:"https://www.facebook.com/maciek.staszewski/", instagram: "https://www.instagram.com/13wooden/",twitter: "https://x.com/wooden13" }
    },
    {
        id: 2,
        name: "Marcin Gortat",
        role: "Ex-NBA Player",
        hostImg: "/post-prime-mg.png",
        hostBg: "/post-prime-mg-bg.jpg",
        socials: { facebook:"https://www.facebook.com/marcingortat.MG13/", instagram: "https://www.instagram.com/mgortat13/",twitter: "https://x.com/MGortat" }
    },
    {
        id: 3,
        name: "Piotr Zarychta",
        role: "Dziennikarz / Analityk",
        hostImg: "/post-prime-pz.png",
        hostBg: "/post-prime-pz-bg.jpg.webp",
        socials: {  instagram: "https://www.instagram.com/piotr.zarychta/",twitter: "https://x.com/ZHighlights_" }
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-5 md:py-10 bg-neutral-900/50">
            <AboutTitle title="Autorzy" />

            <div className="px-4 md:px-10">
                {/* ScrollReveal jest Client Componentem, więc może być rodzicem dla mapowanych kart */}
                <ScrollReveal 
                    amount={0.2} 
                    stagger={0.2} 
                    className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-3 md:gap-5"
                >
                    {HOSTS.map((host) => (
                        <AboutCard key={host.id} host={host} />
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}