import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { ovo } from "@/app/layout";

const Services = ({ isDarkMode }) => {
  const services = [
    {
      icon: assets.web_icon,
      title: "Full Stack Web Apps",
      desc: "Building scalable web applications using MERN stack and Next.js with authentication, APIs, and database integration.",
    },
    {
      icon: assets.ui_icon,
      title: "Frontend Development",
      desc: "Creating responsive and modern UI using React, Next.js, and Tailwind CSS with clean design and performance focus.",
    },
    {
      icon: assets.mobile_icon,
      title: "Backend Development",
      desc: "Developing REST APIs, authentication systems, and server-side logic using Node.js, Express, and MongoDB.",
    },
    {
      icon: assets.project_icon,
      title: "Project Development",
      desc: "Building real-world projects like dashboards, admin panels, and portfolio systems with full functionality.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full px-6 md:px-[10%] py-20 scroll-mt-10"
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className={`text-3xl md:text-5xl font-semibold ${ovo.className}`}>
          What I Build
        </h2>
        <p className="text-gray-500 mt-2">
          My development capabilities
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="p-6 border-[0.5px] border-gray-400 rounded-xl hover:shadow-lg transition"
          >
            <Image src={service.icon} alt="" className="w-10 mb-4" />

            <h3 className="text-lg font-semibold mb-2">
              {service.title}
            </h3>

            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed"`}>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
