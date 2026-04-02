"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Trusted() {
  return (
    <div className="overflow-hidden font-sans">
      {/* Trusted Section */}
      <section className="bg-slate-100 pt-[28vw] pb-20 px-6 text-center relative z-0 overflow-hidden">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-black text-xs md:text-lg lg:text-xl tracking-tight font-semibold   mb-4 mt-10 whitespace-nowrap"
        >
          Trusted by teams at over 1,000 of the world
        </motion.p>

        {/* Logo Grid */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 xl:gap-12 max-w-xs sm:max-w-none mx-auto">
          {[
            "/ipsum5.svg",
            "/ipsum4.svg",
             "/ipsum2.svg",
            "/logoipsum1.svg",
           
            "/ipsum3.svg",
            
            
          ].map((src, i) => (
            <motion.div
              key={src}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
              className="w-[28%] sm:w-auto"
            >
              <Image
                src={src}
                alt="logo"
                width={200}
                height={72}
                className="grayscale hover:grayscale-0 transition w-full sm:w-[200px]"
              />
            </motion.div>
          ))}
        </div>
      </section>

 
    </div>
  );
}
