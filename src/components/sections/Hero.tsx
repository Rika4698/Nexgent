"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MoveUpRight, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import Dashboard from "../../../public/dashboard.png";

export default function Hero() {
   const dashboardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ["start end", "end end"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rotateX = useSpring(rawRotateX, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  
  return (
    <section
      className="relative flex flex-col items-center text-white px-6 text-center font-sans"
      style={{
        backgroundImage:
          "url('/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-2 mt-8 pt-24 px-4">
        
        {/* Content */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center"
        >
          
          {/* ⭐ Rating FIXED with icon */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-white/80 mb-6 backdrop-blur-md">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="font-bold text-sm">
              10k Reviews Rated 4.9 of 5
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium leading-tight tracking-tight max-w-5xl">
            Take Control of{" "}
            <span className="font-serif inline-block transform -skew-x-12 font-normal">Your Projects</span>
            <br />
            With <span className="text-white">Nexgent</span>
          </h1>

          <p className="mt-6 max-w-xl font-medium text-sm sm:text-lg  text-slate-100  px-2">
            A smart task management platform that helps teams and individuals
            plan, prioritize, and complete work faster without stress.
          </p>

          {/* Button */}
          <button
            className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-2xl overflow-hidden px-4 py-4 text-sm md:text-lg font-semibold text-black group"
            style={{ backgroundColor: "#1CAF61" }}
          >
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-black">
              Get Template
            </span>

            <span className="relative z-10 w-4 h-4">
              <MoveUpRight className="w-4 h-4 transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-2" />
              <MoveRight className="absolute inset-0 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
          </button>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          ref={dashboardRef}
          className="relative z-80 w-[95vw] sm:w-[80vw] mt-4 mb-[-28vw]"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          <motion.div
            style={{
              rotateX,
              scale,
            
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <Image
              src={Dashboard}
              alt="Dashboard"
              width={1600}
              height={1119}
              className="w-full mx-auto rounded-2xl "
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}