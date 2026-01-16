import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";


const archivo = Archivo({
  variable: "--font-archivo",
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
        className={`${archivo.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
