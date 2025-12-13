import SubscribeOverlay from "./SubscribeOverlay";
import Image from "next/image";

const articles = [
    {
        id: 1,
        category: "Exclusive Interview",
        authorName: "Maciej Staszewski",
        authorRole: "Host",
        authorImg: "/postprime-logo-2.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 2,
        category: "Tactical analysis",
        authorName: "Piotr Zarychta",
        authorRole: "Analyst",
        authorImg: "/postprime-logo-2.png",
        text: "Basketball is changing rapidly. The three-point revolution is just the beginning. In this deep dive, we analyze how spacing impacts modern defensive schemes and why the mid-range game is becoming a lost art among the new generation of players. It is crucial to understand these patterns."
    },
    {
        id: 3,
        category: "Locker room stories",
        authorName: "Marcin Gortat",
        authorRole: "Ex-NBA Player",
        authorImg: "/postprime-logo-2.png",
        text: "Back in 2009, when we were making the finals run with Orlando Magic, the atmosphere was electrifying. Stan Van Gundy had a specific way of motivating us. I remember one specific practice before the series against the Cavs where everything changed."
    }
];

export default function Subscribe() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        // ZMIANA 1: flex flex-col oraz min-h-[50rem] (interpretacja Twojego min-h-200 jako dużej wartości, np. 800px)
        <section className="relative w-full min-h-200 flex flex-col bg-orange-200 text-neutral-900 py-10 px-5 lg:px-10 overflow-hidden ">

            {/* === HEADER SEKCYJNY === */}
            {/* shrink-0 zapobiega zgniataniu nagłówka, gdy grid rośnie */}
            <div className="shrink-0 flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
                <div className="bg-orange-500 text-zinc-50 px-2 py-5 font-bold capitalize text-2xl lg:text-4xl tracking-widest shrink-0">
                    {currentDate}
                </div>
                <h3 className="text-5xl md:text-6xl font-black capitalize tracking-tighter leading-none">
                    From the Post Prime Daily
                </h3>
            </div>

            {/* === GRID Z ARTYKUŁAMI === */}
            {/* ZMIANA 2: grow (wypełnia całą dostępną wysokość) */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-5 grow">

                {articles.map((article, index) => (
                    // ZMIANA 3: h-full (rozciąga kolumnę do dna grida)
                    <div key={article.id} className="relative flex flex-col gap-6 group h-full">

                        {/* TREŚĆ ARTYKUŁU */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-4xl font-black capitalize tracking-tighter leading-none border-b-2 border-neutral-900 pb-4">
                                {article.category}
                            </h4>

                            <div className="flex items-center gap-4">
                                <div className="relative size-12 rounded-full overflow-hidden bg-white border border-neutral-900">
                                    <Image
                                        src={article.authorImg}
                                        alt={article.authorName}
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold uppercase text-sm leading-tight">
                                        {article.authorName}
                                    </span>
                                    <span className="text-xs font-medium uppercase text-neutral-600 tracking-wider">
                                        {article.authorRole}
                                    </span>
                                </div>
                            </div>

                            <div className="relative">
                                <p className="font-serif text-lg leading-relaxed text-justify opacity-90">
                                    {article.text}
                                </p>
                            </div>
                        </div>

                        {/* === SEPARATOR (DIVIDER) === */}
                        {/* Dzięki h-full w rodzicu, separator sięga teraz samej podłogi */}
                        {index !== articles.length - 1 && (
                            <div className="hidden lg:block absolute -right-5 top-0 bottom-0 w-px bg-neutral-900" />
                        )}
                    </div>
                ))}

               {/* === SINGLE BIG OVERLAY (NOWY SUBKOMPONENT) === */}
                <SubscribeOverlay />

            </div>
        </section>
    );
}