"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="relative bg-gradient-to-b from-emerald-900 to-black text-white border-t-2 border-amber-600/30 overflow-hidden">
     
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-black to-emerald-900 blur-3xl -z-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
       
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12"
        >
         
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Royal</span>
              <span className="text-white ml-2">Luxury</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Redefining luxury through timeless elegance. Crafted for discerning tastes and unforgettable moments.
            </p>
          </motion.div>

      
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Collections", "About", "Contact", "Support"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Get in Touch</h4>
            <div className="space-y-3 text-sm md:text-base text-gray-300">
              <p>
                <span className="text-amber-400 font-semibold">Email:</span>
                <br />
                hello@royalluxury.com
              </p>
              <p>
                <span className="text-amber-400 font-semibold">Phone:</span>
                <br />
                +1 (555) 123-4567
              </p>
              <p>
                <span className="text-amber-400 font-semibold">Address:</span>
                <br />
                123 Luxury Avenue, Elite City, EC 12345
              </p>
            </div>
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8"
        />

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>© {currentYear} Royal Luxury. All Rights Reserved.</p>

          <div className="flex gap-4">
            {["Instagram", "Twitter", "LinkedIn"].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ color: "#FCD34D", y: -2 }}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600"
        />
      </div>
    </footer>
  )
}
