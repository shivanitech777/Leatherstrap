"use client"

import { motion } from "framer-motion"
import ProductCard from "./product-card"

const collections = [
  {
    id: 1,
    name: "Classic Tan Leather Strap",
    price: "₹3,499",
    img: "/all.jpg",
  },
  {
    id: 2,
    name: "Royal Black Leather Strap",
    price: "₹3,999",
    img: "/single.jpg",
  },
  {
    id: 3,
    name: "Olive Heritage Strap",
    price: "₹4,299",
    img: "/m.webp",
  },
  {
    id: 4,
    name: "Vintage Brown Leather Strap",
    price: "₹3,799",
    img: "/brown.jpg",
  },
  {
    id: 5,
    name: "Vintage Brown Leather Strap",
    price: "₹3,799",
    img: "/damnnbro.jpg",
  },
]

export default function OurProduct() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-amber-50 to-emerald-50 py-20 px-4 sm:px-6 md:px-12 lg:px-16 font-serif">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block mb-4">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-amber-600 font-semibold tracking-widest text-sm uppercase">Luxury Collection</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-700 bg-clip-text text-transparent mb-4 tracking-tight">
            Our Premium Collections
          </h2>
          <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Handcrafted leather straps that embody timeless elegance and uncompromising quality for the discerning
            collector.
          </p>
        </motion.div>

        <div className="grid  grid-cols-2 lg:grid-cols-5 gap-2  mx-auto">
          {collections.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
