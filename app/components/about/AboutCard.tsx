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
    
}

export default function AboutCard({ host }: AboutCardProps) {
    
   
    return (
        <div className="relative size-full min-w-20 max-w-lg lg:min-w-xs lg:max-w-full space-y-3">

            {/* Miejsce na zdjęcie (hostImg) */}
            <div
                style={{
                    backgroundImage: `url(${host.hostBg})`
                }}
                
                className={`grid place-items-center w-full  aspect-square  overflow-hidden bg-cover bg-center bg-no-repeat`}
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
            <div className="text-left w-full ">
                <h3 className="text-lg lg:text-2xl font-bold uppercase">{host.name}</h3>
                {/* Tekst pozostaje bez zmian (orange-300) */}
                <p className="text-xs lg:text-sm text-orange-300 font-medium uppercase tracking-widest">
                    {host.role}
                </p>
            </div>

        </div>
    );
}