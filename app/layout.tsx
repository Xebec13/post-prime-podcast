import type { Metadata } from "next";
import { Bubblegum_Sans, Inter } from "next/font/google";
import "./globals.css";


const bubblegumSans = Bubblegum_Sans({
  variable: "--font-bubblegum-sans",
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
        className={`${bubblegumSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
