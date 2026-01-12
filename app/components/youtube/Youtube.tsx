import YoutubePlayer from "./YoutubePlayer";
import YoutubeList from "./YoutubeList";

export default function YouTube() {
    return (
        <section id="youtube" className="w-full bg-inherit py-10 px-5 lg:px-10">
            {/* Nagłówek Sekcji */}
            <div className="text-right border-b ">
                <h2 className="text-[clamp(3rem,11vw,12rem)] border-b-2 font-black tracking-tight">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">Youtube</span>
                </h2>
            </div>

            {/* 1. Główny Player (Pełna szerokość) */}
            <div className="px-15 py-10">
                <YoutubePlayer />

            </div>

            {/* 2. Lista Filmów (Grid 3 kolumny) */}
            <YoutubeList />

        </section>
    );
}