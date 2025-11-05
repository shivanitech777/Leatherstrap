"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = (
    { product, index }
) => {
  return (
    <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#FFFDF7]  text-center shadow-md transition-all duration-500 rounded overflow-hidden"
          >
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-5">
              <h3 className="text-[#3B3B3B] text-lg mb-2">
                {product.name}
              </h3>
              <p className="text-[#6B8E23] text-lg  mb-4">
                {product.price}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-[#283700] to-[#2c3d00] text-[#e0ffd3]  uppercase tracking-wide hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
               <MdOutlineShoppingCart size={20} />

                <span>Add to Cart</span>
              </motion.button>
            </div>
          </motion.div>
  )
}

export default ProductCard