"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";
import { points } from "@/components/Info/points";
import file from '../../../public/file_attacments.svg';
import design from '../../../public/webdesignwebp.webp';
import research from '../../../public/research.webp';

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function HowItWorks() {
  return (
    <section className="bg-slate-100 font-sans py-20 px-6 text-center overflow-hidden">
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6"
      >
        <Snowflake className="w-4 h-4" />
        How Its Work
      </motion.span>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="text-4xl sm:text-5xl font-medium text-gray-900 max-w-3xl mx-auto leading-tight"
      >
        How it <span className="font-serif inline-block transform -skew-x-12 font-normal">Works</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="mt-4 text-lg text-gray-500 max-w-md mx-auto leading-relaxed font-medium "
      >
        Easily request designs, collaborate with our team, and get high-quality
        work fast.
      </motion.p>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="group bg-white  rounded-3xl p-8  text-left"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            {points[0].title}
          </h3>
          <p className="text-gray-500 text-lg font-medium leading-relaxed mb-3 pt-3">
            {points[0].description}
          </p>
          <div className="relative overflow-hidden rounded-xl h-60 mt-3">
            <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out  ">
              <Image
                src={file}
                alt="File Attachments"
                width={300}
                height={288}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </div>
        </motion.div>

        {points.slice(1).map((step, i) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: (i + 1) * 0.15,
            }}
            className="group bg-white rounded-3xl   text-left overflow-hidden"
          >
            <h3 className="text-2xl font-semibold px-8 pt-8 text-gray-900 mb-1">
              {step.title}
            </h3>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-3 pt-3 tracking-tight pb-6 px-8">
              {step.description}
            </p>
            {i === 0 && (
              <div className="relative overflow-hidden rounded-xl h-60 w-[300px] mt-3 p-0">
                <div className="translate-x-[-30px] p-1 group-hover:translate-x-0 transition-transform duration-500 ease-out ">
                  <Image
                    src="/ui_animationwebp.webp"
                    alt="UI Animation"
                    width={300}
                    height={256}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>
            )}
            {i === 1 && (
              <div className="flex flex-col gap-2 mt-3">
                <div className="relative h-[150px] w-[50px]overflow-hidden rounded-xl">
                  <div className="translate-x-[-50px] p-1 group-hover:translate-x-0 transition-transform duration-500 ease-out ">
                    <Image
                      src={research}
                      alt="Web Design"
                      width={300}
                      height={150}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute   right-0 h-10 bg-gradient-to-l from-white to-transparent " />
                </div>
                <div className="relative h-[150px] w-[50px]overflow-hidden rounded-xl -top-10">
                  <div className="translate-x-[50px]  group-hover:translate-x-4 transition-transform duration-500 ease-out ">
                    <Image
                      src={design}
                      alt="Research"
                      width={300}
                      height={150}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
