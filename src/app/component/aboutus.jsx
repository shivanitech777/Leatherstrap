"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative bg-gradient-to-b from-[#F5F1E8] via-[#FFFBF5] to-[#F5F1E8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
         
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#1B5E3F]/20 to-[#D4AF37]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative">
                <Image
                  src="/watch.jpg"
                  alt="Premium leather watch strap craftsmanship"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl border-2 border-[#D4AF37]/30 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37]/50 opacity-50 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

         
          <motion.div variants={itemVariants} className="space-y-8 order-1 lg:order-2">
         
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-sm uppercase tracking-[0.15em] text-[#1B5E3F] font-semibold">Our Heritage</span>
            </motion.div>

            
            <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-6xl text-[#1B5E3F] leading-tight">
              Crafted with{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/30 to-transparent blur-lg opacity-60" />
                <span className="relative text-[#D4AF37]">Excellence</span>
              </span>
            </motion.h2>

           
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-lg text-[#3A3A3A] leading-relaxed font-light">
                At The Leather Aura, we blend timeless craftsmanship with modern sophistication. Every leather strap we
                create carries a story — of precision, patience, and an unwavering passion for detail. Our mission is to
                redefine elegance through quality that endures.
              </p>

              <p className="text-lg text-[#3A3A3A] leading-relaxed font-light">
                Inspired by minimalist design and the luxury of comfort, our watch straps are meticulously handcrafted
                using ethically sourced materials. Each piece is designed to complement your individuality and elevate
                your everyday moments.
              </p>
            </motion.div>

          
            <motion.div variants={itemVariants} className="pt-6">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(27, 94, 63, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="relative px-8 py-4 bg-gradient-to-r from-[#1B5E3F] to-[#0F3D2A] text-[#F5F1E8] font-semibold text-lg rounded-lg overflow-hidden group"
              >
                <span className="relative z-10">Explore Our Collection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F0E68C] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 border-t border-[#D4AF37]/30 space-y-4">
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-serif text-[#1B5E3F]">100%</p>
                  <p className="text-sm text-[#3A3A3A]">Premium Leather</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-[#1B5E3F]">15+</p>
                  <p className="text-sm text-[#3A3A3A]">Years Crafting</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
