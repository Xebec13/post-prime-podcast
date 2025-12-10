import Image from "next/image";

interface Host {
    id: number;
    name: string;
    role: string;
    hostImg: string;
    hostBg: string;
}

interface AboutCardProps {
    host: Host;
    showSeparator: boolean;
}

export default function AboutCard({ host, showSeparator }: AboutCardProps) {
    return (
        <div className="relative group flex flex-col items-center justify-center gap-4 py-3 px-5 lg:py-5 lg:px-10">

            {/* Miejsce na zdjęcie (hostImg) */}
            <div
                style={{
                    backgroundImage: `url(${host.hostBg})`
                }}
                className="grid place-items-center w-full max-w-3/4 md:max-w-2/3 lg:max-w-full aspect-square overflow-hidden bg-cover bg-center bg-no-repeat">
                <div className="relative size-full max-w-2/3 max-h-2/3 aspect-square bg-white">
                    <Image
                        src={host.hostImg}
                        alt={host.name}
                        fill
                        className="object-cover border-2 border-white"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            </div>

            {/* Podpis pod zdjęciem */}
            <div className="text-left w-full max-w-3/4 md:max-w-2/3 lg:max-w-full">
                <h3 className="text-lg lg:text-2xl font-bold uppercase">{host.name}</h3>
                <p className="text-orange-500 font-medium uppercase tracking-widest text-xs lg:text-sm mt-1">
                    {host.role}
                </p>
            </div>

            {/* === SEPARATOR (DIVIDER) === */}
            {showSeparator && (
                <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-0.5 h-full bg-neutral-600/50" />
            )}
        </div>
    );
}