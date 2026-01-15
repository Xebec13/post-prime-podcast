import YoutubePlayer from "./YoutubePlayer";
import YoutubeList from "./YoutubeList";


export default function YouTube() {
    return (
        // Dodałem 'relative' do sekcji dla pozycjonowania przycisku desktopowego
        <section id="youtube" className="w-full py-15">

            {/* Nagłówek Sekcji */}
            <div className="text-right mb-5 border-b-2 px-10">
                <h2 className="text-[clamp(3rem,10vw,8rem)] font-black capitalize">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">Youtube</span>
                </h2>
            </div>
            <div
                className="space-y-5">
                {/* 1. Główny Player */}
                <div
                    className="mb-5 lg:mb-10 px-10 ">
                    <YoutubePlayer />
                </div>
                {/* 2. Lista Filmów */}
                <div
                    // style={{
                    //     backgroundImage: `url(postprime-logo-2.png)`,
                    // }}
                    className="px-10 ">
                    <YoutubeList />
                </div>

            </div>

        </section>
    );
}