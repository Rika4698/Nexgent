"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PackageOpen, Users, RefreshCw, Link } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ProductOverview() {
  return (
    <section className="bg-slate-100 font-sans py-10 px-6 overflow-hidden">
      <div className="max-w-[100vw] mx-auto">
        <div className="bg-[#0F0F0F] rounded-3xl py-20 px-2 lg:px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-16 w-full">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white px-4 py-1.5 text-sm font-semibold text-white mb-6">
                <PackageOpen className="w-4 h-4" />
                Product Overview
              </span>

              <h2 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-6">
                Everything You Need to <br />
                <span className="font-serif inline-block transform -skew-x-12 font-normal">Manage Tasks</span>
              </h2>

              <p className="text-lg text-gray-100 leading-relaxed mb-10 max-w-lg font-medium tracking-tight mx-auto">
                Nexgent is a smart task management platform that helps teams
                plan, collaborate, and track progress easily.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="w-full rounded-3xl  flex justify-center  relative "
            >
              <motion.div
                animate={{ y: [0, 120, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-20 top-10 z-10 hidden lg:block"
              >
                <Image
                  src="/copyright.svg"
                  alt="Copyright"
                  width={450}
                  height={273}
                  className="drop-shadow-xl"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -120, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-16 bottom-10 z-10 hidden lg:block"
              >
                <Image
                  src="/ui-animation.png"
                  alt="UI Animation"
                  width={373}
                  height={343}
                  className="drop-shadow-xl"
                />
              </motion.div>

              <div
                className="relative rounded-xl lg:rounded-2xl border-4 border-[#A4DFC0]  w-full max-w-md sm:max-w-2xl lg:max-w-5xl aspect-[16/10]"
                style={{ boxShadow: "0 0 120px 40px #112C1E" }}
              >
                <Image
                  src="/dashboard.png"
                  alt="Product Overview"
                  fill
                  quality={100}
                  className="object-fill  rounded-xl "
                />
              </div>
            </motion.div>

            <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-9 h-9 text-white" />,
                  title: "Full Visibility Across",
                  desc: "See task status, owners, and deadlines at a glance no guessing.",
                },
                {
                  icon: <RefreshCw className="w-9 h-9 text-white" />,
                  title: "Proactive, Not Reactive",
                  desc: "Get notified before deadlines slip, not after problems happen.",
                },
                {
                  icon: <Link className="w-9 h-9 text-white" />,
                  title: "One Tool, One Workflow",
                  desc: "Replace multiple tools with a single, connected task management system.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  className="text-center p-6 relative"
                >
                  {i !== 0 && (
  <div className="absolute bg-gray-700 lg:top-6 lg:bottom-6 lg:left-0 lg:right-auto lg:w-px lg:h-auto left-4 right-4 top-0 h-px mx-28 lg:mx-0" />
)}
                  
                  <div className="w-16 h-16 rounded-xl bg-[#1CAF61] flex items-center justify-center mb-4 mx-auto">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-100 text-base leading-relaxed text-center max-w-sm mx-auto  font-medium">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
