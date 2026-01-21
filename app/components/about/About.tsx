import AboutCard from "./AboutCard";
import LargeScreenLink from "../ui/Links";
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

        <section id="about" className="relative bg-neutral-900 text-neutral-50 px-10 ">

            {/* Nagłówek Sekcji */}
            <div className="text-left w-full border-b-2 py-3">
                <h2 className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter">
                    Autorzy
                </h2>
            </div>

            {/* Grid 3 kolumny */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 place-items-stretch gap-5 p-2">
                {hosts.map((host) => (
                    <AboutCard
                        key={host.id}
                        host={host}
                    />
                ))}
            </div>
            <div className="hidden lg:block relative bottom-3 ml-auto w-fit mb-2">
                <LargeScreenLink text="więcej o nas" href="#" isExternal={false}/>
            </div>
        </section>
    );
}