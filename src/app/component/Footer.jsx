"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0C] text-[#F2E8D5] font-['Playfair_Display'] border-t-2 border-[#4A2C2A] pt-10 pb-6 relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#B89B4A] to-[#4A2C2A] blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
   
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl cormorant bg-gradient-to-r from-[#9dae11] via-[#B89B4A] to-[#9dae11]  hover:opacity-90  bg-clip-text text-transparent"
            style={{ fontFamily: "cormorant" }}
          >
            The Leather Auraa
          </h2>
          <p className="mt-3 text-sm text-[#CBBF9D] max-w-xs">
            Timeless elegance crafted in every leather strap. Designed for those who value luxury and precision.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >

          <h3 className="text-xl cormorant text-[#B89B4A] mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Shop", "Collections", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-[#014911] transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-xl cormorant text-[#B89B4A] mb-3">Get in Touch</h3>
          <p className="text-sm text-[#CBBF9D] lato">
            641, Satya The Hive, Dwarka Expressway, <br />
            Gurugram, Haryana 122505 <br />
            <span className="block mt-2">📞 +91 98765 43210</span>
            <span className="block mt-1">✉️ support@leatheraura.com</span>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center mt-10 border-t border-[#4A2C2A]/40 pt-4"
      >
        <p className="text-sm text-[#CBBF9D]">
          © {currentYear} TheLeatherAura. All Rights Reserved.  
        </p>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#4A2C2A] via-[#B89B4A] to-[#1E3A8A]"
      />
    </footer>
  );
}
