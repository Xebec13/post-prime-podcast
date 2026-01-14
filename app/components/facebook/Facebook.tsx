import FacebookLastPost from "./FacebookLastPost";
import FacebookPostList from "./FacebookPostList";

export default function Facebook() {
    return (
        <section id="facebook" className="w-full bg-linear-to-r from-orange-50 via-orange-50 to-blue-500/50 py-10 px-5 lg:px-10">

            {/* Nagłówek Sekcji */}
            <div className="text-left mb-5 border-b-2">
                <h2 className="text-[clamp(3rem,10vw,8rem)] font-black capitalize">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">Facebook</span>
                </h2>
            </div>

            <div className="space-y-5">

                {/* 1. Ostatni Post (Duży) */}
                <FacebookLastPost />

                {/* 2. Lista Postów (Grid) */}
                <FacebookPostList />
            </div>

        </section>
    );
}