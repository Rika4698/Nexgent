"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const links = ["Features", "Benefits", "Pricing", "Comparison", "FAQ"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="absolute w-full z-50 bg-transparent pt-4"
    >
      <div className="max-w-5xl mx-auto  px-9 flex items-center justify-between h-16 gap-6  mt-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/nexgent.svg" alt="Nexgent Logo" width={32} height={32} priority />
          <span className="text-white text-xl md:text-2xl font-sans  tracking-tight">Nexgent</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-white text-base font-medium   transition font-sans"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

 <motion.a
      href="https://webflow.com/templates/designers/olynex-agency"
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={"hidden lg:block relative  items-center justify-center rounded-full overflow-hidden px-4 py-3 text-base font-semibold text-black bg-white -mr-4 "}
    >
      <motion.span
        variants={{
          rest: { x: "100%" },
          hover: { x: "0%" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ backgroundColor: "#1CAF62" }}
      />
      <span className="relative text-lg z-10">Join Now</span>
    </motion.a>



        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mx-4 rounded-2xl bg-[#4b4b4b] backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white text-base md:text-lg font-medium text-center transition font-sans"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        
        </div>
      )}
    </motion.nav>
  );
}
