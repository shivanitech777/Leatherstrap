"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="relative overflow-hidden min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-white via-emerald-50/30 to-white">
     
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-amber-100 to-amber-50 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
         
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight">
                <motion.span
                  className="bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Timeless
                </motion.span>
                <br />
                <motion.span
                  className="text-emerald-900"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  Elegance
                </motion.span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
                Crafted with precision and luxury in mind. Each piece tells a story of sophistication, heritage, and
                timeless craftsmanship.
              </motion.p>
            </motion.div>

         
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/collections"
                  className="inline-block px-8 sm:px-10 py-4 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Collection
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="inline-block px-8 sm:px-10 py-4 border-2 border-emerald-900 text-emerald-900 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300"
                >
                  Our Story
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8 border-t border-emerald-200">
              {[
                { number: "25+", label: "Years" },
                { number: "10K+", label: "Clients" },
                { number: "99%", label: "Satisfied" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-900">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative h-96 md:h-[600px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/premium-leather-luxury-product-showcase.jpg" alt="Premium Luxury Product" fill className="object-cover" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>

           
            <motion.div
              animate={{ y: [0, -20, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-2xl opacity-40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
