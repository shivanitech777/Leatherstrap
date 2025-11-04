"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "Shop", "Collections", "About", "Contact"];

  return (
    <header className="bg-[#0C0C0C] text-[#F2E8D5] font-['Playfair_Display'] fixed w-full top-0 z-50 shadow-xl border-b-2 border-[#4A2C2A]">
   
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-3xl font-bold tracking-wider"
          style={{ fontFamily: "'Walt Disney Script', 'Playfair Display', serif" }}
        >
          <Link
            href="/"
            className="bg-gradient-to-r from-[#1E3A8A] via-[#B89B4A] to-[#4A2C2A] bg-clip-text text-transparent hover:opacity-90 transition-all duration-300"
          >
            LeatherAura
          </Link>
        </motion.div>

        <nav className="hidden md:flex space-x-10 text-lg">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4, type: "spring" }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="hover:text-[#B89B4A] transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

      
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-[#F2E8D5]"
        >
          <motion.svg
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </motion.svg>
        </motion.button>
      </div>

     
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-[#1A1A1A] border-t border-[#4A2C2A] py-4 flex flex-col items-center space-y-4"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-[#F2E8D5] hover:text-[#B89B4A] transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      )}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-[3px] bg-gradient-to-r from-[#1E3A8A] via-[#B89B4A] to-[#4A2C2A]"
      />
    </header>
  );
}
