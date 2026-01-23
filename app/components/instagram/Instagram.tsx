import InstagramPostList from "./InstagramPostList";

export default function Instagram() {
    return (
        // ZMIANA TŁA: Gradient przechodzący w ciemną fuksję (Instagram vibe)
        <section id="instagram" className="px-5">

            {/* Nagłówek Sekcji */}
            <div className="text-center border-b-2 py-3 px-5">
                <h2 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase">
                    {/* Gradient charakterystyczny dla Instagrama (Purple -> Pink -> Orange) */}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                        Instagram
                    </span>
                </h2>
            </div>

            <div className="px-5">

                {/* 2. Lista Postów (Grid) */}
                <InstagramPostList />
            </div>

        </section>
    );
}