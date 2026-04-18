import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { ovo } from "@/app/layout";

const Work = ({ isDarkMode }) => {
  return (
    <section id="work" className="w-full px-6 md:px-[10%] py-20 scroll-mt-10">
      <div className="text-center">
        <h2 className={`text-3xl md:text-5xl font-semibold ${ovo.className}`}>
          Projects
        </h2>
        <p className="text-gray-500 mt-2">Some of my recent works</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className=" border-[0.5px] border-gray-400 rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 ">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 border rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-5 ">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm px-4 py-2 border rounded hover:bg-gray-100"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="text-sm px-4 py-2 bg-black text-white rounded hover:opacity-80"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/psinvincible/"
          target="_blank"
          className="px-6 py-3 border rounded-full hover:bg-gray-100 transition"
        >
          View more on GitHub
        </a>
      </div>
    </section>
  );
};

export default Work;
