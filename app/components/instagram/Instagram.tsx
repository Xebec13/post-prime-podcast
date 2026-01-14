import InstagramLastPost from "./InstagramLastPost";
import InstagramPostList from "./InstagramPostList";

export default function Instagram() {
    return (
        // ZMIANA TŁA: Gradient przechodzący w ciemną fuksję (Instagram vibe)
        <section id="instagram" className="w-full bg-linear-to-tl from-orange-50 via-orange-50 to-fuchsia-950 py-10 px-5 lg:px-10 text-black">

            {/* Nagłówek Sekcji */}
            <div className="text-right mb-5 border-b-2">
                <h2 className="text-[clamp(3rem,10vw,8rem)] font-black capitalize">
                    {/* Gradient charakterystyczny dla Instagrama (Purple -> Pink -> Orange) */}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                        Instagram
                    </span>
                </h2>
            </div>

            <div className="space-y-5">

                {/* 1. Ostatni Post (Duży) */}
                <InstagramLastPost />

                {/* 2. Lista Postów (Grid) */}
                <InstagramPostList />
            </div>

        </section>
    );
}