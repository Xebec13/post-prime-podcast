import AboutCard from "./AboutCard";

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
        <section id="about" className="lg:min-h-screen w-screen flex flex-col justify-center items-center gap-3 py-5 px-5 lg:px-10 bg-neutral-900 text-orange-50">

            {/* Nagłówek Sekcji */}
            <div className="text-left w-full">
                <h2 className="text-[clamp(3rem,11vw,12rem)] border-b-2 font-black tracking-tighter">
                    Autorzy
                </h2>
            </div>

            {/* Grid 3 kolumny */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
                {hosts.map((host) => (
                    <AboutCard 
                        key={host.id} 
                        host={host} 
                    />
                ))}
            </div>
        </section>
    );
}