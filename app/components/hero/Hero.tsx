import { HeroLogo,HeroEpInfo,HeroEpVideo } from "../index"
export default function Hero() {
    return (

        <section
            id="home"
            className="min-h-screen">
            <div className="pt-25">
                <HeroLogo title="post prime" />
            </div>
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 place-items-stretch gap-5 p-5 lg:p-10">
                <div className="order-2 lg:order-1">
                    <HeroEpInfo/>
                </div>
                <div className="order-1 lg:order-2 col-span-1 lg:col-span-2">
                    <HeroEpVideo/>
                </div>
            </div>
        </section>
    )
}