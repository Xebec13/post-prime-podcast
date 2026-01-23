import type { Metadata } from "next";
import { Inter,Playfair_Display } from "next/font/google";
import "./globals.css";


const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "400"
})

const inter = Inter({
  variable: "--font-inter",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Post Prime",
  description: "Basketball Podcast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
