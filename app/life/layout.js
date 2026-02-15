"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LifeLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Portfolio", href: "/" },
    { name: "Lifeline", href: "/life" },
    { name: "Timeline", href: "/life/timeline" },
    { name: "Detailed Me", href: "/life/detailedMe" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="top-4 z-50 flex justify-center px-3 ">
        <div className="mt-5 flex gap-1 p-1 rounded-full bg-white/10 backdrop-md border border-white/20 overflow-x-auto no-scrollbar">

          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`whitespace-nowrap px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${pathname === item.href ? "bg-white/20 text-white shadow" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
