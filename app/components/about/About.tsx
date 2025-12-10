import AboutCard from "./AboutCard";

const hosts = [
    {
        id: 1,
        name: "Maciej Staszewski",
        role: "Journalist / Host",
        hostImg: "/postprime-logo-2.png",
        hostBg: "/postprime-hero.png"
    },
    {
        id: 2,
        name: "Marcin Gortat",
        role: "Ex-NBA Player",
        hostImg: "/postprime-logo-2.png",
        hostBg: "/postprime-hero.png"
    },
    {
        id: 3,
        name: "Piotr Zarychta",
        role: "Journalist / Analyst",
        hostImg: "/postprime-logo-2.png",
        hostBg: "/postprime-hero.png"
    },
];

export default function About() {
    return (
        <section id="about" className="w-full bg-neutral-800 text-white">

            {/* Nagłówek Sekcji */}
            <div className="text-left pt-3 px-5 lg:pt-5 lg:px-10">
                <h2 className="hero-title text-[clamp(3rem,11vw,12rem)] font-black tracking-tighter">
                    Hosts
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