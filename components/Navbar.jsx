import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import { ovo } from "@/app/layout";
import Image from "next/image";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${isDarkMode ? 'hidden' : ''}`}>
        <Image src={assets.header_bg_color} alt="" className="w-full"></Image>
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/95 backdrop:filter backdrop:blur-lg shadow-sm"
            : ""
        } ${isDarkMode ? 'bg-theme shadow-theme': ''}`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          ></Image>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "shadow-sm bg-white/50 backdrop:blur-lg "
          } ${isDarkMode ? 'border border-white/50 bg-transparent' : ''}`}
        >
          <li>
            <a className={ovo.className} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className={ovo.className} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className={ovo.className} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className={ovo.className} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className={ovo.className} href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            ></Image>
          </button>

          <a
            href="#contact"
            className={`${ovo.className} hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ${isDarkMode ? 'border-white/50 hover:bg-[#2a004a]' : 'hover:bg-[#fcf4ff]'}`}
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow-icon"
              className="w-3"
            ></Image>
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            ></Image>
          </button>
        </div>

        {/* ------------mobile menu ----------- */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ${isDarkMode ? 'hover-theme text-theme' : ''} `}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            ></Image>
          </div>
          <li>
            <a className={ovo.className} href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className={ovo.className} href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a className={ovo.className} href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className={ovo.className} href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className={ovo.className} href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
