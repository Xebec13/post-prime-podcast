import AboutCard from "./AboutCard";
import {SmartLinkLg} from "../ui/SmartLinks";
const hosts = [
    {
        id: 1,
        name: "Maciej Staszewski",
        role: "Dziennikarz / Prowadzący",
        hostImg: "/post-prime-ms.png",
        hostBg: "/pp-ms-bg-1.jpg"
    },
    {
        id: 2,
        name: "Marcin Gortat",
        role: "Ex-NBA Player",
        hostImg: "/post-prime-mg.png",
        hostBg: "/post-prime-mg-bg.jpg"
    },
    {
        id: 3,
        name: "Piotr Zarychta",
        role: "Dziennikarz / Analityk",
        hostImg: "/post-prime-pz.png",
        hostBg: "/post-prime-pz-bg.jpg.webp"
    },
];

export default function About() {
    return (

        <section id="about" className="relative space-y-1 pb-5 lg:pb-10">

            {/* Nagłówek Sekcji */}
            <div className="text-left border-dashed border-b-2 py-3 px-10">
                <h2 className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter lowercase">
                    Autorzy
                </h2>
            </div>

            {/* Grid 3 kolumny */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 place-items-stretch gap-5 px-10">
                {hosts.map((host) => (
                    <AboutCard
                        key={host.id}
                        host={host}
                    />
                ))}
            </div>
            <div className="hidden lg:block w-fit absolute bottom-5 right-15 ml-auto text-neutral-50">
                <SmartLinkLg text="więcej o nas" href="#" isExternal={false}/>
            </div>
        </section>
    );
}