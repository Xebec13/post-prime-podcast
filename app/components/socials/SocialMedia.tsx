import SocialSection from "./SocialSection";
import { PostItem } from "./SocialPostList";

export default function SocialMedia() {
    // Symulacja danych - w przyszłości: const fbData = await getFBPosts();
    const fbPosts: PostItem[] = Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        content: "Analiza ostatniego meczu NBA. Sprawdźcie nasze wnioski dotyczące formy Lakers! 🏀",
        likes: "1.2K",
        comments: 45,
        date: "2h temu",
        image: "/postprime-hero.png",
        url: "https://facebook.com/postprime"
    }));

    const igPosts: PostItem[] = Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        content: "Szybki rzut oka na statystyki sezonu. Kto Waszym zdaniem zgarnie MVP? #NBA #PostPrime ",
        likes: "2.5K",
        comments: 120,
        date: "5h temu",
        image: "/postprime-hero.png",
        url: "https://instagram.com/postprime"
    }));

    return (
        <div className="space-y-1"> 
            {/* Margines między sekcjami, żeby pasował do reszty strony */}
            
            <SocialSection 
                id="facebook" 
                title="Facebook" 
                brandColor="bg-blue-500/70" 
                posts={fbPosts} 
                channelUrl="https://www.facebook.com/postprimepl/" 
            />

            <SocialSection 
                id="instagram" 
                title="Instagram" 
                brandColor="bg-fuchsia-600/70" 
                posts={igPosts} 
                channelUrl="https://www.instagram.com/postprime_pl/" 
            />
        </div>
    );
}