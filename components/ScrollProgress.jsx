"use client"

import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const progress = (scrollPosition / totalHeight) * 100;
        setScroll(progress);
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    
    }, [])
    
    return (
        <div className="fixed top-0  left-0 w-full h-[3px] z-[999] bg-transparent">
            <div className="h-full bg-purple-500 transition-all duration-200"
                style={{ width: `${scroll}%`}}
            ></div>
        </div>
    )
}

export default ScrollProgress;