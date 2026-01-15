import AboutCard from "./AboutCard";
import AboutLink from "./AboutLink"; // Zmiana importu
import Icon from "../ui/Icon"; // Upewnij się, że ścieżka do Icon jest poprawna (wcześniej ustaliliśmy src/components/Icon)

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
        // Dodałem 'relative', aby przycisk absolutny (desktop) pozycjonował się względem sekcji
        <section id="about" className="relative bg-neutral-800 text-orange-50 w-screen flex flex-col justify-center items-center gap-3 py-15 px-5 lg:px-10">

            {/* Nagłówek Sekcji */}
            <div className="text-left w-full border-b-2">
                <h2 className="text-[clamp(3rem,11vw,12rem)] font-black tracking-tighter">
                    Autorzy
                </h2>
            </div>

            {/* Grid 3 kolumny */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 place-items-stretch gap-5">
                {hosts.map((host) => (
                    <AboutCard
                        key={host.id}
                        host={host}

                    />
                ))}

                {/* === WERSJA MOBILE (Wewnątrz Grida) === */}
                {/* Widoczna tylko na ekranach < lg. Wchodzi jako 4 element siatki. */}
                <div
                    style={{
                        backgroundImage: `url(postprime-logo-2.png)`,
                    }}
                    className="lg:hidden relative size-full p-1.5 bg-cover bg-center bg-orange-50">
                    <div
                        style={{
                            backgroundImage: `url(postprime-hero.png)`,
                        }}
                        className="absolute inset-0 bg-orange-500/90 bg-cover bg-center brightness-80" />
                    <div
                        className="relative flex items-center gap-1 z-10 cursor-pointer">
                        <AboutLink className="text-2xl about-link" text="Więcej o nas" />
                        <Icon name="ArrowRight" className="text-sm" />
                    </div>
                </div>
            </div>

            {/* === WERSJA DESKTOP (Absolutna) === */}
            {/* Widoczna tylko na ekranach >= lg. Pozycjonowana w rogu sekcji. */}
            <div className="hidden lg:inline-flex items-center gap-1 absolute bottom-5 right-10 text-gray-200 bg-orange-500 px-4 py-1.5 rounded-md  cursor-pointer">
                <AboutLink className="text-sm" text="Więcej o nas" />
                {/* Upewnij się, że "ArrowRight" istnieje w Twoim utils/icons.ts, jeśli nie - dodaj go */}
                <Icon name="ArrowRight" className="text-xs" />
            </div>

        </section>
    );
}