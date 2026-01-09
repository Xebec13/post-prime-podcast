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
        <section id="about" className="min-h-screen w-full bg-neutral-900 text-orange-50">

            {/* Nagłówek Sekcji */}
            <div className="text-left pt-3 px-5 lg:pt-5 lg:px-10">
                <h2 className="hero-title text-[clamp(3rem,11vw,12rem)] font-black tracking-tighter">
                    Autorzy
                </h2>
            </div>

            {/* Grid 3 kolumny */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-5">
                {hosts.map((host, index) => (
                    <AboutCard 
                        key={host.id} 
                        host={host} 
                        showSeparator={index !== hosts.length - 1} 
                    />
                ))}
            </div>
        </section>
    );
}