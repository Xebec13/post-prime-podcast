import FooterForm from "./FooterForm";
import FooterIcons from "./FooterIcons";
import FooterInfo from "./FooterInfo";
import FooterLogo from "./FooterLogo";



export default function Footer() {
    return (
        // Main footer container with vertical height and padding
        <div className="sm:h-[40dvh] flex flex-col p-6 sm:p-8 gap-4 bg-neutral-900">

            {/* Top section with grid layout for social icons, logo, and subscribe form */}
            <div className="h-full grid grid-cols-1 sm:grid-cols-3 place-items-center gap-3">
                {/* Social media icons */}
                <FooterIcons />

                {/* Footer logo component */}
                <FooterLogo />

                {/* Subscribe section with form and button */}
                <div className="flex flex-col gap-2 w-full max-w-60">
                    <p className="text-orange-200 uppercase text-md font-bold">Zapisz się do Newslettera!</p>
                    <FooterForm />
                    <button className="self-center text-sm text-gray-200 bg-orange-500 px-6 py-2 font-bold rounded-md uppercase cursor-pointer transition-all hover:scale-105 ">
                        Zapisz
                    </button>
                </div>
            </div>

            {/* Bottom section with links and contact info */}
            <FooterInfo />
        </div>
    )
};