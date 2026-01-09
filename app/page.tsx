import { Navbar,Hero,Subscribe,Youtube,Facebook,Instagram,About,Footer } from "./components"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Subscribe/> */}
      <About/>
      <Youtube/>
      <Facebook/>
      <Instagram/>
      <Footer/>
    </>

  )
}
