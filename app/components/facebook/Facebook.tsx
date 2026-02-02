import { SmartLinkLg } from "../ui/SmartLinks";
import FacebookPostList from "./FacebookPostList";
import FacebookTitle from "./FacebookTitle";

export default function Facebook() {
    return (
        <section id="facebook" className="w-full space-y-6 lg:space-y-10 pb-10">


            {/* 1. NAGŁÓWEK SEKCJI */}
            <FacebookTitle title="Facebook" />

            <div className="px-10">

                <FacebookPostList />
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