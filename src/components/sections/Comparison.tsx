"use client";

import { motion } from "framer-motion";
import { GitCompare, SquareCheckBig, FileX } from "lucide-react";
import Image from "next/image";
import { points, nexgentFeatures } from "@/components/Info/comparison";
import right from '../../../public/rightcurved.svg';
import left from '../../../public/left-curved.svg';

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Comparison() {
  return (
    <section className="bg-slate-100 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6">
            <GitCompare className="w-4 h-4" />
            Comparison
          </span>

          <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-4">
            Why Choose <span className="font-serif inline-block transform -skew-x-12 font-normal">Nexgent</span>
          </h2>

          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-medium">
            See how our smart task management platform compares with
            spreadsheets, basic to-do apps, and tools.
          </p>
        </motion.div>


        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-44 items-center max-w-5xl mx-auto  items-stretch">
          {/* VS divider */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 z-10 ">
            <div className="flex flex-col items-center md:-mt-32 lg:-mt-0">
              <motion.span
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-12 lg:mt-2 px-3 py-0.5 lg:px-6 lg:py-2 rounded-xl lg:rounded-2xl bg-black text-white text-base lg:text-2xl font-md flex items-center justify-center shrink-0 "
              >
                vs
              </motion.span>
              <div className="flex items-start gap-2 -mt-3 lg:-mt-[22px]">
                <Image
                  src={right}
                  alt="left curve"
                  width={98}
                  height={40}
                  className="h-10 w-10 lg:w-20 lg:h-20"
                />
                <div className="w-9 -mx-4" />
                <Image
                  src={left}
                  alt="right curve"
                  width={98}
                  height={40}
                   className="h-10 w-10 lg:w-20 lg:h-20"
                />
              </div>
            </div>
          </div>

          
          {/* Left Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl bg-white border-4 border-transparent hover:border-green-600/20 transition-all duration-300 ease-in p-4 w-full"
          >
            <div className="w-full h-40 rounded-xl bg-[#F7F7F7] flex items-center justify-center mb-6">
              <h3 className="text-2xl font-medium text-gray-900">
                Other Platforms
              </h3>
            </div>
            
            <ul className="flex flex-col mx-6 gap-4">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 text-base lg:text-lg "
                >
                  <FileX className="w-5 h-5 text-black shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
className="rounded-2xl border-4 border-green-600/20  p-4 bg-white overflow-hidden w-full "
          >
            <div className="w-full h-40 relative rounded-xl overflow-hidden mb-6">
              <Image
                src="/hero.webp"
                alt="Nexgent"
                className="object-cover w-full h-40"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Image
                  src="/nexgent.svg"
                  alt="Nexgent Logo"
                  width={36}
                  height={36}
                  className="mr-2"
                />
                <span className="text-white font-medium text-5xl">Nexgent</span>
              </div>
            </div>
            <ul className="flex flex-col gap-4 mx-7">
              {nexgentFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 text-base lg:text-lg "
                >
                  <SquareCheckBig className="w-5 h-5 text-black shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
