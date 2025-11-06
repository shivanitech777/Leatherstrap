"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MdOutlineShoppingCart } from "react-icons/md"

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-b from-slate-50 to-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden border border-amber-100"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full h-72 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
        <Image
          src={product.img || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 space-y-3">
        <motion.h3
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          className="text-lg font-serif font-semibold text-slate-900 group-hover:text-emerald-900 transition-colors duration-300"
        >
          {product.name}
        </motion.h3>

        <motion.p
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="text-xl font-bold text-amber-600 font-serif tracking-wide"
        >
          {product.price}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-amber-50 uppercase tracking-widest font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 rounded-md flex items-center justify-center gap-2 group/btn"
        >
          <motion.div whileHover={{ rotate: 20, scale: 1.2 }} className="transition-transform">
            <MdOutlineShoppingCart size={20} />
          </motion.div>
          <span className="group-hover/btn:tracking-wider transition-all duration-300">Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProductCard
