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
        <div className="relative group flex flex-col items-center justify-center gap-2 py-3 px-5 lg:py-5 lg:px-10">

            {/* Miejsce na zdjęcie (hostImg) */}
            <div
                style={{
                    backgroundImage: `url(${host.hostBg})`
                }}
                // ZMIANA 1: Dodałem border-2 oraz dynamiczny kolor ramki
                className={`grid place-items-center w-full max-w-3/4 lg:max-w-full aspect-square  overflow-hidden bg-cover bg-center bg-no-repeat`}
            >
                
                <div 
                style={{
                    backgroundImage: `url(${host.hostBg})`
                }}
                className={`relative size-full max-w-2/3 max-h-2/3 aspect-square border-orange-100 border-10 `}>
                    <Image
                        src={host.hostImg}
                        alt={host.name}
                        fill
                        className={`object-contain bg-orange-50/20`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            </div>

            {/* Podpis pod zdjęciem */}
            <div className="text-left w-full max-w-3/4 lg:max-w-full">
                <h3 className="text-lg lg:text-2xl font-bold uppercase">{host.name}</h3>
                {/* Tekst pozostaje bez zmian (orange-300) */}
                <p className="text-orange-300 font-medium uppercase tracking-widest text-xs lg:text-sm mt-1">
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