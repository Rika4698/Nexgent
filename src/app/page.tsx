import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";


export default function Home() {
  return (
       <main className="overflow-hidden">
      <Navbar />
      <Hero/>
       <section id="features" className="scroll-mt-20"><Trusted /></section>
        <Footer/>
    </main>
  );
}
