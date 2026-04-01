"use client";

import { useState } from "react";
import { MapPin, Mail, MoveUpRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-slate-100 py-6 px-4 ">
      <footer className="bg-black rounded-3xl px-4 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">

          {/* CTA */}
          <div className="flex flex-col items-center text-center gap-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium text-white leading-tight">
              Ready to Get <span className="font-serif inline-block transform -skew-x-12">More Done</span>
            </h2>
            <p className="text-gray-300 font-sans tracking-tight font-medium text-sm sm:text-base max-w-xl">
              Start organizing your tasks, collaborating with your team, and staying on top of deadlines all in one simple, powerful tool.
            </p>
            <button className="relative overflow-hidden bg-white text-black font-medium px-6  py-3 sm:py-4 rounded-2xl text-sm sm:text-lg group flex items-center gap-2">
              <span className="absolute inset-0 bg-[#1CAF62] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Get Started</span>
              <span className="relative z-10 w-4 h-4">
                <MoveUpRight className="w-4 h-4 transition-all duration-300 group-hover:text-black group-hover:opacity-0 group-hover:translate-x-2" />
                <MoveRight className="absolute inset-0 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:text-black group-hover:opacity-100 group-hover:translate-x-0" />
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800" />

          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <Image src="/nexgent.svg" alt="Nexgent Logo" width={200} height={200} className="w-16 h-16 sm:w-32 sm:h-32 lg:w-48 lg:h-48" />
            <span className="w-full mx-auto text-5xl  sm:text-9xl lg:text-[10rem] xl:text-[232px] font-semibold font-sans text-white tracking-tight leading-none uppercase">Nexgent</span>
          </div>


          {/* Footer Grid */}
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start justify-between">
            <div className="flex-none">
              <p className="text-white text-xl sm:text-2xl font-semibold font-sans">Join the 12,000+ businesses<br />using Nexgent</p>
            </div>

            <div className="flex flex-col gap-3 font-sans">
              <h3 className="text-lg sm:text-2xl font-semibold text-white">Get in Touch</h3>
              <div className="flex items-start gap-2 text-white text-sm sm:text-base font-medium">
               
                <span>123 Creative Street,<br />Innovation City, NY 10001</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold">

                <a href="mailto:info@nexgent.com" className="hover:text-white transition">info@nexgent.com</a>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full lg:max-w-xs font-sans">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Subscribe to our Newsletter</h3>
              <p className="text-sm sm:text-base text-white">Get productivity tips & insights straight to your inbox.</p>
              <div className="flex flex-col md:flex-row items-start md: gap-3 w-full md:w-96 lg:w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-4 py-4 sm:py-3 text-sm text-white outline-none bg-none bg-gray-700 rounded-full placeholder-gray-50 min-w-0 placeholder:font-semibold placeholder:text-base"
                />
                <button className="bg-white text-black text-sm font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full hover:bg-green-500 hover:text-black transition shrink-0 ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="border-t border-gray-600 pt-8 flex flex-wrap justify-left gap-6 sm:gap-8 lg:gap-9 xl:gap-16 px-2 ">
            {["Features", "Benefits", "Pricing", "Comparison", "FAQ", "Changelog", "Style Guide", "License", "Password", "404"].map((l) => (
              <a key={l} href="#" className="text-sm md:text-base xl:text-lg text-white hover:text-[#1CAF62] font-medium transition font-sans">{l}</a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-6 flex items-center justify-center text-xs sm:text-base text-white text-center -mt-8 font-sans font-medium">
            <p>© 2026 Nexgent. All rights reserved. Designed by <span className="decoration-1 underline">Olynex</span> powered by <span className="decoration-1 underline">Webflow</span></p>
          </div>

        </div>
      </footer>
    </div>
  );
}
