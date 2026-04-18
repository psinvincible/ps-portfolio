"use client"

import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { ovo } from "@/app/layout";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <section
    id="about"
    className="w-full px-6 md:px-[10%] py-20 scroll-mt-10"
    >

      <div className="text-center ">
        <h2 className={`text-3xl md:text-5xl font-semibold ${ovo.className}`}>About Me</h2>
        <p className="text-gray-500 mt-2">A quick introduction</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1}}
            className="w-64 md:w-80"
          >
            <Image 
            src={assets.user_image}
            alt="profile"
            className="rounded-2xl "
            />
          </motion.div>

          <div className="flex-1">
            <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}
            >
              I'm a <span className="font-semibold">Full Stack Developer</span>{" "} specializing in building scalable and user-friendly web applications. I work mainly with{" "} <span className="font-semibold">React, Next.js, Node.js, Express.js, and MongoDB</span>
              <br />
              <br />
              As a fresher, I focus on writing clean code, building real-world projects, and continuously improving my problem solving skills.
            </motion.p>

            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              className="grid sm:grid-cols-3 gap-6 mt-8"
            >
              <div className="p-5 border-[0.5px] border-gray-400 rounded-xl">
                <h3 className="font-semibold text-lg ">Projects</h3>
                <p className="text-sm text-gray-500 mt-1">Built multiple MERN & Next.js projects</p>
              </div>

              <div className="p-5 border-[0.5px] border-gray-400 rounded-xl">
                <h3 className="font-semibold text-lg ">Tech Stack</h3>
                <p className="text-sm text-gray-500 mt-1">MERN, Next.js, Tailwind CSS</p>
              </div>

              <div className="p-5 border-[0.5px] border-gray-400 rounded-xl">
                <h3 className="font-semibold text-lg ">Learning</h3>
                <p className="text-sm text-gray-500 mt-1">Always exploring new technologies</p>
              </div>
            </motion.div>

            <div className="mt-10">
              <h3 className="font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3 ">
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "Tailwind CSS",
                ].map((skill, i) => (
                  <span key={i} className={`px-4 py-1 text-sm border rounded-full transition ${isDarkMode ? "hover:bg-white/10" : "bg-gray-100"} `}>{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-semibold mb-4">Tools I Use</h3>
            <div className="flex flex-wrap gap-4">
              {toolsData.map((tool, index) => (
                <div key={index}
                  className="w-12 h-12 flex items-center justify-center border rounded-lg hover:scale-110 transition"
                >
                  <Image src={tool} alt="tool" className="w-6"/>
                </div>
              ))}

            </div>
            </div>

          </div>

      </div>
    </section>
  );
};

export default About;
