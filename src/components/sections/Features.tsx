"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";
import grid from '../../../public/1st grid.webp';
import grid1 from '../../../public/1st.webp';
import completed from '../../../public/completed.svg';
import remaining from '../../../public/remaining.svg';
import process from '../../../public/process.svg';
import newtask from '../../../public/newtask.svg';
import tag from '../../../public/3rd.webp';
import comment from '../../../public/2nd.webp';
import share from '../../../public/4th.webp';
import projectManage from '../../../public/projectmanage.svg';
import Inprogress from '../../../public/inprogress.webp';
import project from '../../../public/project manage (2).svg';

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Features() {
    return (
           <div className="overflow-hidden font-sans">

      {/* Features Section */}
      <section className="bg-slate-100 py-20 px-6 text-center overflow-hidden">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-600 mb-6"
        >
          <Snowflake className="w-4 h-4" />
          Powerful Features
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 max-w-3xl mx-auto leading-tight"
        >
          Power Up Your Projects
          <br />
          With <span className="font-serif inline-block transform -skew-x-12 font-normal">Nexgent</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl mx-auto font-medium"
        >
          Simplify planning, enhance collaboration, and increase
          <br />
          productivity with Nexgent.
        </motion.p>
      </section>

      {/* Feature Grids */}
      <section className="bg-slate-100 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          {/* Row 1: 50/50 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full sm:w-1/2 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 min-h-[230px] shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 ">
                {" "}
                Smart Task Management
              </h3>
              <p className="text-[#5D5D5D] text-sm sm:text-lg tracking-tight font-medium -mt-2">
                <br />
                Create, assign, and organize tasks with due dates, priorities,
                and labels for better productivity.
              </p>
              <div className="mt-6 relative w-[85%] mx-auto overflow-hidden p-4">
                <Image
                  src={grid}
                  alt="Smart Task Management"
                  width={600}
                  height={400}
                  className="w-full rounded-xl object-cover transition-transform duration-500 ease-out hover:rotate-[5deg]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent rounded-b-xl" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="w-full sm:w-1/2 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 min-h-[260px] shadow-sm group"
              whileHover="hovered"
            >
              <div className="relative w-[55%] mx-auto p-4">
                <Image
                  src={grid1}
                  alt="Grid 2"
                  width={600}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent rounded-b-xl" />
                <div className="absolute inset-0 flex gap-3 p-4 items-center justify-center group">
                  <motion.div
                    className="flex flex-col gap-3 w-1/2"
                    variants={{
                      hidden: { x: -65, y: -70 },
                      visible: { x: -65, y: -70 },
                      hovered: { x: -45, y: -70 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ zIndex: 999 }}
                  >
                    <Image
                      src={completed}
                      alt="Complete"
                      width={450}
                      height={350}
                      className="w-full rounded-xl object-cover"
                    />
                    <Image
                      src={remaining}
                      alt="Remaining"
                      width={450}
                      height={350}
                      className="w-full rounded-xl object-cover"
                      style={{ position: "relative", left: "-15px" }}
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col gap-3 w-1/2"
                    variants={{
                      hidden: { x: 65, y: -70 },
                      visible: { x: 65, y: -70 },
                      hovered: { x: 45, y: -70 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ zIndex: 999 }}
                  >
                    <Image
                      src={process}
                      alt="Process"
                      width={450}
                      height={350}
                      className="w-full rounded-xl object-cover"
                    />
                    <Image
                      src={newtask}
                      alt="New Task"
                      width={450}
                      height={350}
                      className="w-full rounded-xl object-cover"
                    />
                  </motion.div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3 mt-6">
                Calendar & Deadlines
              </h3>
              <p className="text-[#5D5D5D] text-sm md:text-lg tracking-tight font-medium">
                Visualize deadlines with calendar and timeline views
                <br />
                for clearer planning and time management.
              </p>
            </motion.div>
          </div>

          
          {/* Row 2: 60/40 */}
          <div className="flex flex-col sm:flex-row gap-4">
            
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full md:w-[50%] lg:w-[75%] bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 max-h-none sm:max-h-[460px] shadow-sm overflow-hidden group/collab"
            >
              <h3 className="text-xl sm:text-2xl  font-medium text-gray-900 mb-3">
                Team Collaboration
              </h3>
              <p className="text-[#5D5D5D] text-sm md:text-lg tracking-tight font-medium w-[320px] md:w-[400px]">
                Comment, tag teammates, share files, and stay aligned
                in real time across tasks.
              </p>
              <div className="mt-8 relative flex items-end justify-center gap-2 translate-y-8">
                <Image
                  src={tag}
                  alt="3rd"
                  width={380}
                  height={600}
                  className="hidden md:block rounded-xl w-[200px] lg:w-[500px] object-cover h-[190px] lg:h-[250px] lg:w-[35%] -translate-x-3 lg:-translate-x-8 mb-12 "
                />
                <Image
                  src={comment}
                  alt="2nd"
                  width={420}
                  height={720}
                  className="rounded-xl lg:object-cover w-[260px] h-[200px] md:w-[200px] md:h-[250px] lg:w-[500px] lg:h-[300px] translate-0 md:-translate-x-2 lg:-translate-x-3 group-hover/collab:-translate-y-[20px] transition-transform duration-500 ease-out"
                />
                <Image
                  src={share}
                  alt="4th"
                  width={380}
                  height={600}
                  className=" hidden md:block rounded-xl  w-[200px] lg:w-[500px] object-cover md:h-[190px] lg:h-[250px]  md:translate-x-5 lg:translate-x-0 mb-12"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-500 group-hover/collab:opacity-30" />
              </div>
            </motion.div>



            
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="w-full md:w-[50%] lg:w-[25%] bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 min-h-[260px] shadow-sm overflow-hidden flex flex-col justify-between"
              whileHover="hovered"
            >
              <div className="mt-6 flex flex-col items-center gap-3 px-8">
                <motion.div
                  className="w-full"
                  variants={{
                    hidden: { x: -40 },
                    visible: { x: -40 },
                    hovered: { x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={projectManage}
                    alt="Project Manage"
                    width={220}
                    height={120}
                    className="w-full rounded-xl object-cover"
                  />
                </motion.div>
                <Image
                  src={Inprogress}
                  alt="In Progress"
                  width={220}
                  height={120}
                  className="w-full rounded-xl object-cover"
                />
                <motion.div
                  className="w-full"
                  variants={{
                    hidden: { x: 40 },
                    visible: { x: 40 },
                    hovered: { x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={project}
                    alt="Project Manage 2"
                    width={220}
                    height={120}
                    className="w-full rounded-xl object-cover"
                  />
                </motion.div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-medium  text-gray-900 mb-3">
                  Smart Notifications
                </h3>
                <p className="text-[#5D5D5D] text-sm mdtext-base lg:text-lg font-medium tracking-tight">
                  Never miss a task with real-time reminders and alerts that
                  keep you on schedule.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
    );
}

export default Features;