import { Navbar, Hero, Youtube, Facebook, Instagram, About, Footer } from "./components"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-1">
        <Hero />
        <About />
        <Youtube />
        <Facebook />
        <Instagram />
      </main>
      <Footer />
    </>

  )
}
