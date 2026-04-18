"use client";

import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import { ovo } from "@/app/layout";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "top" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Work", href: "work" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 px-6 lg:px-12 py-4 flex justify-between items-center transition-all duration-300 ${isScroll ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-transparent"} ${isDarkMode ? "bg-black/40 backdrop-blur-lg" : ""}`}
      >
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-28 cursor-pointer"
        />

        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  document
                    .getElementById(`${link.href}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${ovo.className} hover:text-white transition hover:bg-purple-300 px-2 rounded-2xl`}
              >
                {link.name}
              </button>
            </li>
          ))}
          <a
            href={"/life"}
            className={`${ovo.className} hover:text-purple-500 transition`}
          >
            LifeLine
          </a>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((p) => !p)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className={`fixed top-0 right-0 w-64 h-screen ${isDarkMode ? "bg-black" : "bg-white"} z-50 p-8 flex flex-col gap-6`}
          >
            <button onClick={() => setMenuOpen(false)}>
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt=""
                className="w-5"
              />
            </button>
            {navLinks.map((link, i) => (
              //close the menu once the button is clicked
              <button
                key={i}
                onClick={() => {
                  setMenuOpen(false);
                  document
                    .getElementById(`${link.href}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${ovo.className} hover:text-purple-500 transition`}
              >
                {link.name}
              </button>
            ))}
            <a
              href={"/life"}
              className={`${ovo.className} hover:text-purple-500 transition`}
            >
              LifeLine
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
