import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";


export default function Home() {
  return (
       <main className="overflow-hidden">
      <Navbar />
      <Hero/>
      <Trusted/>
       <section id="features" className="scroll-mt-20"><Features /></section>
       <section id="faq" className="scroll-mt-20"><FAQ /></section>
        <Footer/>
    </main>
  );
}
