"use client";

import { motion } from "framer-motion";
import Image from "next/image";
  
export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-[#142100] via-[#213400] to-[#1a2800] py-20 px-8 text-[#2e3323]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
    
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <Image
            src="/watch.jpg"
            alt="About watch strap"
            width={480}
            height={480}
            className=" shadow-lg border-4 border-[#c9d8a3]"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-[cormorant] mb-6 text-[#f0ffaf]">
            Our <span className="text-[#4b5c09"> Journey</span>
          </h2>

          <p className="text-lg leading-relaxed text-white mb-6">
            At The Leather Aura , we blend timeless craftsmanship with modern sophistication.
            Every leather strap we make carries a story — of precision, patience, and a passion
            for detail. Our mission is to redefine elegance through quality that lasts.
          </p>

          <p className="text-lg leading-relaxed text-white mb-8">
            Inspired by the art of minimalism and the luxury of comfort, our watch straps are 
            handcrafted using ethically sourced materials. Each piece is designed to complement 
            your individuality and elevate your everyday look.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-[#4b5c09] text-white  text-lg shadow-md hover:bg-[#6e7b46] transition "
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
