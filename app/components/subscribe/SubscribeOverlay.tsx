export default function SubscribeOverlay() {
    return (
        <div className="absolute top-0 right-0 bottom-0 w-full z-20 flex flex-col justify-end items-center text-center">
            {/* Tło Gradientowe */}
            <div className="absolute bottom-0 right-0 bg-linear-to-b w-full lg:w-2/3 h-full from-transparent via-orange-200/90 to-orange-200 pointer-events-none" />
            {/* Formularz */}
            <div className="relative bottom-15 lg:bottom-5 lg:left-1/6 z-30 w-full max-w-sm space-y-3">
                <h4 className="text-4xl lg:text-6xl font-black tracking-tighter capitalize">
                    Get your daily email here
                </h4>
                <p className="text-base font-semibold tracking-tighter">Fresh News takes on every Tueasday and Thursday</p>
                <div className="relative flex flex-col gap-2">
                    <input
                        type="email"
                        placeholder="give us your email"
                        className="w-full bg-transparent border-2 border-neutral-900 py-3 text-center text-lg placeholder:text-neutral-500 font-medium focus:outline-none focus:border-orange-600 transition-colors uppercase"
                    />

                    <button className="bg-neutral-900 text-orange-200 py-4 px-5 font-bold capitalize tracking-widest hover:bg-orange-600 hover:text-zinc-100 transition-all duration-300 cursor-pointer">
                        Sign me up
                    </button>

                </div>
            </div>
        </div>
    );
}