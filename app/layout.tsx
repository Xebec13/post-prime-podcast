import type { Metadata, Viewport } from "next"; // Dodano Viewport
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400"
})

const inter = Inter({
  variable: "--font-inter",
  weight: "400"
})

// 1. KONFIGURACJA WYGLĄDU PRZEGLĄDARKI (MOBILE)
export const viewport: Viewport = {
  themeColor: "#171717", // Kolor paska adresu (neutral-900) - wygląda super na mobile
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 2. METADANE SEO I SOCIAL MEDIA
export const metadata: Metadata = {
  // Ważne dla obrazków w Social Media!
  // Na produkcji zmienisz to na "https://postprime.pl"
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"), 

  title: {
    default: "Post Prime | Podcast Koszykarski",
    template: "%s | Post Prime" // Pozwala na tytuły typu "Odcinek 5 | Post Prime" na podstronach
  },
  description: "Najlepszy podcast o NBA w Polsce. Wooden, Marcin i Piotrek rozmawiają o koszykówce bez hamulców.",
  
  // Słowa kluczowe dla Google
  keywords: ["NBA", "koszykówka", "podcast", "Post Prime", "sport", "basket"],

  // Autorzy
  authors: [{ name: "Post Prime Team" }],
  creator: "Post Prime",

  // IKONY (Favicon i Apple)
  icons: {
    icon: "/pp.png",         // Zwykły favicon (karta przeglądarki)
    shortcut: "/pp.png", 
    apple: "/pp.png",        // Ikona na iPhone/iPad (Home Screen)
  },

  // SOCIAL MEDIA (Facebook, Discord, LinkedIn, iMessage)
  openGraph: {
    title: "Post Prime | Podcast Koszykarski",
    description: "Analizy, newsy i dyskusje o NBA. Posłuchaj nas!",
    url: "https://postprime.pl", // Twój docelowy adres
    siteName: "Post Prime",
    images: [
      {
        url: "/pp.png", // Obrazek, który wyświetli się przy linku
        width: 800,     // Zalecane wymiary (pp.png powinien być kwadratem min. 512x512)
        height: 800,
        alt: "Logo Post Prime",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  // TWITTER / X
  twitter: {
    card: "summary_large_image", // Duża karta na Twitterze
    title: "Post Prime",
    description: "Podcast o NBA. Sprawdź najnowsze odcinki.",
    images: ["/pp.png"], // Twitter też weźmie Twoje logo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Zmieniamy lang="en" na "pl" - ważne dla Google i czytników ekranowych!
    <html lang="pl" className="scroll-smooth"> 
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-neutral-950 text-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}