import Image from "next/image";

interface Game {
    id: number;
    homeTeam: { code: string; name: string; score: number; logo: string; };
    visitorTeam: { code: string; name: string; score: number; logo: string; };
    status: string;
}

const mockGames: Game[] = [
    { id: 1, homeTeam: { code: "BOS", name: "Celtics", score: 120, logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" }, visitorTeam: { code: "CLE", name: "Cavaliers", score: 117, logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg" }, status: "Final" },
    { id: 2, homeTeam: { code: "DEN", name: "Nuggets", score: 102, logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg" }, visitorTeam: { code: "DAL", name: "Mavericks", score: 105, logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg" }, status: "Final" },
    { id: 3, homeTeam: { code: "LAL", name: "Lakers", score: 0, logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" }, visitorTeam: { code: "GSW", name: "Warriors", score: 0, logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" }, status: "10:00 PM" },
    { id: 4, homeTeam: { code: "LAL", name: "Lakers", score: 0, logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" }, visitorTeam: { code: "GSW", name: "Warriors", score: 0, logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" }, status: "10:00 PM" },
    { id: 5, homeTeam: { code: "LAL", name: "Lakers", score: 0, logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" }, visitorTeam: { code: "GSW", name: "Warriors", score: 0, logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" }, status: "10:00 PM" },
    { id: 6, homeTeam: { code: "DEN", name: "Nuggets", score: 102, logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg" }, visitorTeam: { code: "DAL", name: "Mavericks", score: 105, logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg" }, status: "Final" },
];

export default function HeroScore() {
    return (
        <div className="flex flex-col gap-1">
            {/* Nagłówek */}
            <div className="flex justify-between gap-1 px-4 py-2 border-b-2 bg-neutral-800">
                <div className="flex items-center gap-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500">NBA Games</span>
                    <div className="size-3 bg-black"></div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="size-3 bg-black"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500">League</span>
                </div>
            </div>

            <div className="mt-1 space-y-3 ">

                <div className="text-center  text-neutral-900 border-t border-b border-double text-sm font-bold uppercase tracking-widest">Wyniki</div>


                <div className="flex gap-1 px-1 pb-1 overflow-y-scroll no-scrollbar">
                    {mockGames.map((game) => (
                        <div key={game.id} className="border flex flex-col justify-center items-center gap-1 p-4">

                            <div className="text-[10px] font-bold ">
                                {game.status}
                            </div>

                            <div className="flex space-x-2">
                                <div className="flex-1 flex flex-col items-center justify-center">
                                    <div className="relative size-8">
                                        <Image src={game.visitorTeam.logo} alt={game.visitorTeam.code} fill className="object-contain" />
                                    </div>
                                    <span className="text-[10px] font-bold">{game.visitorTeam.code}</span>
                                </div>

                                <div className="flex items-center space-x-1 text-sm font-black">
                                    <span className={game.visitorTeam.score > game.homeTeam.score ? "text-orange-500" : ""}>
                                        {game.status.includes("PM") || game.status.includes("AM") ? "-" : game.visitorTeam.score}
                                    </span>
                                    <span className="text-neutral-600 text-sm">:</span>
                                    <span className={game.homeTeam.score > game.visitorTeam.score ? "text-orange-500" : ""}>
                                        {game.status.includes("PM") || game.status.includes("AM") ? "-" : game.homeTeam.score}
                                    </span>
                                </div>

                                <div className="flex-1 flex flex-col items-center justify-center">
                                    <div className="relative size-8">
                                        <Image src={game.homeTeam.logo} alt={game.homeTeam.code} fill className="object-contain" />
                                    </div>
                                    <span className="text-[10px] font-bold">{game.homeTeam.code}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}