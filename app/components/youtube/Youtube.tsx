import YoutubePlayer from "./YoutubePlayer";
import YoutubeList from "./YoutubeList";

export default function YouTube() {
    return (
        <section id="youtube" className="w-full bg-linear-to-b from-transparent via-red-600/10 to-transparent py-20 px-5 lg:px-10">
            {/* Nagłówek Sekcji */}
            <div className="text-right mb-5 border-b border-white/10">
                 <h2 className="text-[clamp(3rem,10vw,8rem)] font-black capitalize">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">Youtube</span>
                </h2>
            </div>

            {/* 1. Główny Player (Pełna szerokość) */}
            <YoutubePlayer />

            {/* 2. Lista Filmów (Grid 3 kolumny) */}
            <YoutubeList />
            
        </section>
    );
}