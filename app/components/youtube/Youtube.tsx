import YoutubePlayer from "./YoutubePlayer";
import YoutubeList from "./YoutubeList";

export default function YouTube() {
    return (
        <section id="youtube" className="w-full bg-inherit py-10 px-5 lg:px-10 lg:py-15">
            {/* Nagłówek Sekcji */}
            <div className="text-right w-full border-b-2">
                <h2 className="text-[clamp(3rem,10vw,8rem)] border-b font-black ">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">Youtube</span>
                </h2>
            </div>

            {/* 1. Główny Player (Pełna szerokość) */}
            <div className="pt-10">
                <YoutubePlayer />

            </div>

            {/* 2. Lista Filmów (Grid 3 kolumny) */}
            <div className="px-3">
                <YoutubeList />
            </div>

        </section>
    );
}