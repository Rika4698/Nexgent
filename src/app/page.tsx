import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Comparison from "@/components/sections/Comparison";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/pricing";
import Trusted from "@/components/sections/Trusted";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
       <main className="overflow-hidden">
      <Navbar />
      <Hero/>
      <Trusted/>
      
       <section id="features" className="scroll-mt-20"><Features /></section>
         <section id="comparison" className="scroll-mt-20"><Comparison /></section>
         <section id="pricing" className="scroll-mt-20"><Pricing /></section>
         <Testimonials/>
       <section id="faq" className="scroll-mt-20"><FAQ /></section>
        <Footer/>
    </main>
  );
}
