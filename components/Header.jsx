"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { ovo } from "@/app/layout";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const Header = ({ isDarkMode }) => {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="w-28 md:w-32 rounded-full border-2 border-gray-300"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`text-3xl md:text-5xl font-semibold mt-6 ${ovo.className}`}
      >
        Hi, I'm <span className="text-purple-500">Prince Prajapati</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`text-lg md:text-2xl mt-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
      >
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1500,
            "MERN Stack Developer",
            1500,
            "Next.js Developer",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={`max-w-xl mt-4 text-gray-600 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
      >
        I build scalable web applications using modern technologies like React,
        Next.js, Node.js, and MongoDB. Passionate about clean code and problem
        solving.
      </motion.p>

      <div className="flex gap-2 flex-wrap justify-center mt-4 text-sm">
        <span className={`px-3 py-1  ${isDarkMode ? "border border-white" : "bg-gray-200"} rounded-full`}>React</span>
        <span className={`px-3 py-1  ${isDarkMode ? "border border-white" : "bg-gray-200"} rounded-full`}>Next.js</span>
        <span className={`px-3 py-1  ${isDarkMode ? "border border-white" : "bg-gray-200"} rounded-full`}>Node.js</span>
        <span className={`px-3 py-1  ${isDarkMode ? "border border-white" : "bg-gray-200"} rounded-full`}>Express.js</span>
        <span className={`px-3 py-1  ${isDarkMode ? "border border-white" : "bg-gray-200"} rounded-full`}>MongoDB</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mt-6"
      >
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`px-6 py-3 rounded-full hover:scale-105 transition dark: dark: ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
        >
          Contact Me
        </button>

        <a
          href="/prince_resume.pdf"
          target="_blank"
          className="px-6 py-3 border rounded-full hover:scale-105 transition"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-6 mt-6 "
      >
        <a href="https://github.com/psinvincible" target="_blank">
          <Image src={assets.git_icon} alt="github" className="w-6 rounded-full" />
        </a>

        <a href="https://www.linkedin.com/in/prajapatiprince3" target="_blank">
          <Image src={assets.linkedin_icon} alt="linkedin" className="w-6 rounded-full" />
        </a>
      </motion.div>
    </section>
  );
};

export default Header;
