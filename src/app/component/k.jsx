"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CategoryStraps() {
  const categories = [
    {
      title: "Full-Grain Leather",
      img: "/all.jpg",
      desc: "Premium top-layer leather known for durability and natural texture.",
    },
    {
      title: "Top-Grain Leather",
      img: "/black.jpg",
      desc: "Smooth and refined, offering a clean and polished appearance.",
    },
    {
      title: "Genuine Leather",
      img: "/blue strap.webp",
      desc: "Affordable and stylish for everyday use with a classic feel.",
    },
    {
      title: "Suede Leather",
      img: "/brown.jpg",
      desc: "Soft and velvety texture that adds a warm premium vibe.",
    },
    {
      title: "Nubuck Leather",
      img: "/m.webp",
      desc: "Slightly brushed surface for a luxurious matte finish.",
    },
    {
      title: "Vegetable-Tanned Leather",
      img: "/straps.jpg",
      desc: "Eco-friendly leather with rich, natural character that ages beautifully.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F5F1E8] via-[#FFFBF5] to-[#F5F1E8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
    
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-[#1B5E3F]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
      
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] text-[#1B5E3F] font-semibold"
          >
            Collection
          </motion.span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#1B5E3F] mt-4 mb-6 leading-tight">
            Premium Leather <span className="text-[#D4AF37]">Types</span>
          </h2>
          <p className="text-xl text-[#3A3A3A] max-w-3xl mx-auto leading-relaxed font-light">
            Discover our refined leather variations, each curated to deliver elegance and quality for discerning watch
            strap enthusiasts.
          </p>
        </motion.div>

       
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group relative"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#1B5E3F]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-[#E8DCC8] group-hover:border-[#D4AF37] transition-colors duration-500 shadow-lg group-hover:shadow-2xl">
            
                <div className="relative w-full h-64 overflow-hidden bg-[#F5F1E8]">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="w-full h-full">
                    <Image src={cat.img || "/placeholder.svg"} alt={cat.title} fill className="object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E3F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 space-y-4">
                  <motion.h3
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    className="text-2xl font-serif text-[#1B5E3F] group-hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {cat.title}
                  </motion.h3>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed font-light">{cat.desc}</p>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-[#1B5E3F] font-semibold text-sm mt-4"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
