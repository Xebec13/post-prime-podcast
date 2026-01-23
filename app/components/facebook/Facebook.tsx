import FacebookPostList from "./FacebookPostList";

export default function Facebook() {
    return (
        <section id="facebook" className="px-5">

            {/* Nagłówek Sekcji */}
            <div className="text-center border-b-2 border-neutral-900 py-3 px-5">
                <h2 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-500">Facebook</span>
                </h2>
            </div>
            <div className="px-5">

            <FacebookPostList />
            </div>
        </section>
    );
}