"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden ">
  
      <Image
        src="/black.jpg" 
        alt="Luxury Leather Watch Strap"
        fill
        sizes="100vw"
        className="object-cover object-center brightness-[0.45]"
        priority
      />

<motion.div
  initial={{ backgroundPosition: "0% 50%" }}
  animate={{ backgroundPosition: "100% 50%" }}
  transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
  className="h-[3px] bg-gradient-to-r from-[#4A5D3B] via-[#C2A25A] to-[#EAD58C] bg-[length:200%_200%]"
/>


      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl  leading-tight text-[#9dae11] cormorant"
        >
          Handcrafted Luxury Leather <br />
          <span className="text-[#B89B4A]">Watch Straps</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-5 text-lg text-[#E6DCC4] max-w-2xl mx-auto lato"
        >
          Experience the art of craftsmanship. Every strap tells a story — of tradition, elegance,
          and timeless design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 border  bg-[#4b5c09] text-[white] text-lg hover:bg-[#4b5c09] hover:text-[#F2E8D5] transition-all duration-300 shadow-md uppercase tracking-wide">
            Explore Collection
          </button>
          <button className="px-8 py-3 border border-[#4b5c09]] text-[white]  text-lg hover:bg-[#4b5c09] hover:white-[#0C0C0C] transition-all duration-300 uppercase tracking-wide">
            Learn More
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#4b5c09] via-[#4b5c09] to-[#4b5c09]"
      />
    </section>
  );
}