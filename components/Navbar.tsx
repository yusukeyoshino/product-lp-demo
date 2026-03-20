"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Abstract Lightning / Banana Logo */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2L10 16H16L14 30L24 14H18L20 2Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="10" y1="2" x2="24" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#737373" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Spitfire
          </span>
        </div>

        <button className="relative group px-6 py-2 rounded-full bg-white text-black font-semibold text-sm transition-all hover:scale-105">
          <span className="relative z-10">Order Now</span>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 blur-md transition-opacity"></div>
        </button>
      </div>
    </motion.nav>
  );
}
