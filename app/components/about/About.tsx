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
        socials: { twitter: "https://twitter.com", instagram: "https://instagram.com" }
    },
    {
        id: 2,
        name: "Marcin Gortat",
        role: "Ex-NBA Player",
        hostImg: "/post-prime-mg.png",
        hostBg: "/post-prime-mg-bg.jpg",
        socials: { twitter: "https://twitter.com", instagram: "https://instagram.com", facebook: "https://facebook.com" }
    },
    {
        id: 3,
        name: "Piotr Zarychta",
        role: "Dziennikarz / Analityk",
        hostImg: "/post-prime-pz.png",
        hostBg: "/post-prime-pz-bg.jpg.webp",
        socials: { twitter: "https://twitter.com", facebook: "https://facebook.com" }
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
                    className="w-full grid grid-cols-1 lg:grid-cols-3 place-items-center gap-3 md:gap-5"
                >
                    {HOSTS.map((host) => (
                        <AboutCard key={host.id} host={host} />
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}