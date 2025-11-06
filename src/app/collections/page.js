"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Classic Tan Leather",
    category: "Classic Collection",
    price: "$89",
    image: "/premium-tan-leather-watch-strap.jpg",
    description: "Timeless elegance in natural tan leather",
  },
  {
    id: 2,
    name: "Royal Green Suede",
    category: "Premium Collection",
    price: "$129",
    image: "/royal-green-luxury-leather-watch-strap.jpg",
    description: "Sophisticated suede in deep emerald tones",
  },
  {
    id: 3,
    name: "Black Oxford",
    category: "Executive Collection",
    price: "$119",
    image: "/black-oxford-leather-watch-strap-elegant.jpg",
    description: "Professional black leather, perfectly refined",
  },
  {
    id: 4,
    name: "Cognac Croc",
    category: "Luxury Collection",
    price: "$149",
    image: "/cognac-crocodile-leather-luxury-watch-strap.jpg",
    description: "Exotic texture with rich cognac hues",
  },
  {
    id: 5,
    name: "Burgundy Leather",
    category: "Heritage Collection",
    price: "$109",
    image: "/burgundy-leather-luxury-watch-strap.jpg",
    description: "Deep wine tones with traditional craftsmanship",
  },
  {
    id: 6,
    name: "Navy Blue Premium",
    category: "Contemporary",
    price: "$119",
    image: "/navy-blue-premium-leather-watch-strap.jpg",
    description: "Modern navy with sophisticated grain",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-4 font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Our Collections
        </motion.h1>
        <motion.p
          className="text-lg text-slate-600 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover our curated selection of premium leather watch straps, crafted with precision and elegance
        </motion.p>

        {/* Gold Divider */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link href={`/collections/${product.id}`}>
                <motion.div className="group cursor-pointer" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  {/* Card Container */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Overlay with Category */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                        initial={{ opacity: 0 }}
                      >
                        <span className="text-amber-300 text-sm font-semibold font-serif">{product.category}</span>
                      </motion.div>

                      {/* Price Badge */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          className="bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          {product.price}
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.h2
                        className="font-serif text-xl font-bold text-slate-900 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {product.name}
                      </motion.h2>

                      <motion.p
                        className="text-slate-600 text-sm mb-4 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {product.description}
                      </motion.p>

                      {/* CTA */}
                      <motion.div
                        className="flex items-center text-emerald-700 font-semibold text-sm group-hover:text-amber-500 transition-colors duration-300"
                        whileHover={{ x: 4 }}
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>

                    {/* Bottom Gold Accent Line */}
                    <motion.div
                      className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4 font-bold">Can't Find Your Perfect Strap?</h2>
          <p className="text-emerald-100 mb-8 font-light">
            Contact our team for custom orders and bespoke collections tailored to your preferences
          </p>
          <motion.button
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
