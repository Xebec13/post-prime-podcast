import { SmartLinkLg } from "../ui/SmartLinks";
import InstagramPostList from "./InstagramPostList";
import InstagramTitle from "./InstagramTitle";

export default function Instagram() {
    return (
        // ZMIANA TŁA: Gradient przechodzący w ciemną fuksję (Instagram vibe)
        <section id="instagram" className="w-full space-y-6 lg:space-y-10 pb-10">

            <InstagramTitle title="Instagram" />

            <div className="px-10">

                {/* 2. Lista Postów (Grid) */}
                <InstagramPostList />
            </div>
            <div className="flex px-5 justify-end relative right-5 z-10 text-gray-50 transition-colors hover:text-white">
                <SmartLinkLg
                    text="odwiedź kanał"
                    href="https://www.youtube.com/@PostPrimePL" // Tutaj wstaw właściwy link
                    isExternal={true}
                />
            </div>
        </section>
    );
}