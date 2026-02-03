import { Navbar, Hero, Youtube,SocialMedia, About, Footer } from "./components"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-1">
        <Hero />
        <About />
        <Youtube />
        <SocialMedia/>
        
      </main>
      <Footer />
    </>

  )
}
