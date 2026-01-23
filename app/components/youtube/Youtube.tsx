import YoutubePlayer from "./YoutubePlayer";
import YoutubeList from "./YoutubeList";


export default function YouTube() {
    return (
        // Dodałem 'relative' do sekcji dla pozycjonowania przycisku desktopowego
        <section id="youtube" className="w-full space-y-1">

            {/* Nagłówek Sekcji */}
            <div className="text-center text-neutral-800 py-3 px-10">
                <h2 className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter">
                    <span className="bg-red-500 px-6 rounded-xl lowercase text-neutral-50">you</span>
                    <span className="lowercase">tube</span>
                </h2>
            </div>
            <div className="border-dashed border-t-2 border-b-2 text-center py-2">
                latest video 20 may 2029 december haha
            </div>
            <div className="space-y-5 px-5">
                {/* 1. Główny Player */}
                <div
                    className="mb-5">
                    <YoutubePlayer />
                </div>
                <div className="px-5">
                    <YoutubeList />
                </div>
            </div>

        </section>
    );
}