"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F2E8D5] text-[#1A1A1A] pt-28 md:pt-36 pb-20">
    
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 via-[#B89B4A]/10 to-[#4A2C2A]/10" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
    
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[#1E3A8A] via-[#4A2C2A] to-[#B89B4A] bg-clip-text text-transparent font-['Playfair_Display']"
          >
            Timeless Leather <br /> Straps for Every Watch
          </h1>
          <p className="mt-5 text-lg text-[#4A2C2A] max-w-md mx-auto md:mx-0">
            Discover craftsmanship and elegance combined. Our royal leather straps are designed for those who value class and comfort.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8"
          >
            <button className="px-8 py-3 rounded-full bg-[#1E3A8A] text-[#F2E8D5] text-lg font-semibold shadow-lg hover:bg-[#B89B4A] hover:text-[#0C0C0C] transition-all duration-300">
              Shop Now
            </button>
          </motion.div>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl border-[6px] border-[#B89B4A]/70 bg-white group">
            <Image
              src="/black.jpg"  
              alt="Luxury Leather Watch Strap"
              fill
              sizes="(max-width: 768px) 256px, (max-width: 1200px) 420px, 420px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          
            <motion.div
              initial={{ opacity: 0.2, scale: 0.9 }}
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1, 0.95] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0 rounded-full border-[3px] border-[#1E3A8A]/70 pointer-events-none"
            />
          </div>
        </motion.div>
      </div>

   
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
        className="mt-16 h-[3px] bg-gradient-to-r from-[#4A2C2A] via-[#B89B4A] to-[#1E3A8A]"
      />
    </section>
  );
}
