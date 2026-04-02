/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { faqs } from "@/components/Info/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-slate-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start font-sans">
        {/* Left */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-2/5"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>

          <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-4">
            Got <span className="font-serif inline-block transform -skew-x-12 font-normal ">Questions?</span>
          </h2>

          <p className="text-sm lg:text-lg text-gray-500 leading-relaxed font-medium">
           Everything you need to know before getting started. Got questions? Let’s clear things up.
          </p>
        </motion.div>




        {/* Right — Accordion */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:w-3/5 w-full flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden px-2">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-6 text-left gap-4  transition"
              >
                <span className="text-base lg:text-lg font-medium text-gray-900">
                  {faq.q}
                </span>
                <span className="shrink-0 bg-black rounded-full p-1.5 text-white transition-all duration-300">
                  {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <hr className="border-t border-slate-200 pb-5 mx-6" />
                    <p className="px-6 pb-6 text-gray-500 text-sm lg:text-base leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
