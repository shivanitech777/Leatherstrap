"use client"

import { motion } from "framer-motion"
import ProductCard from "./product-card"

const collections = [
  {
    id: 1,
    name: "Classic Tan Leather Strap",
    price: "₹3,499",
    img: "/watch.jpg",
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

export default function CollectionsPage() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-emerald-50 to-amber-50 py-20 px-4 sm:px-6 md:px-12 lg:px-16 font-serif">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-10 right-20 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-10 left-20 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-25"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-900 font-semibold tracking-widest text-xs uppercase rounded-full mb-6 border border-emerald-200"
          >
            ✨ New Arrivals
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 to-amber-700 bg-clip-text text-transparent mb-4 tracking-tight">
            New Collections
          </h2>
          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite selection of handcrafted premium leather watch straps, each piece a testament to
            elegance and superior craftsmanship.
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
