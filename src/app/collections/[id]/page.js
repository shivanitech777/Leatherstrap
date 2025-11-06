"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Star, Heart } from "lucide-react"
import { useState } from "react"

const productDetails = {
  1: {
    name: "Classic Tan Leather",
    category: "Classic Collection",
    price: "₹8900",
    rating: 4.8,
    reviews: 124,
    image: "/straps.jpg",
    description: "Timeless elegance in natural tan leather that combines sophistication with comfort.",
    details: [
      "Premium Italian leather sourced from sustainable tanneries",
      "100% vegetable-tanned for durability and character",
      "Hand-stitched with precision engineering",
      "Compatible with most watch lugs 18-24mm",
      "Develops unique patina over time",
    ],
    specifications: {
      Material: "Italian Leather",
      Width: "18-24mm (Adjustable)",
      Thickness: "3.5mm",
      Weight: "28g",
      Color: "Natural Tan",
    },
  },
}

export default function ProductPage({ params }) {
  const [liked, setLiked] = useState(false)
  const product = productDetails[params.id] || productDetails[1]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link href="/collections">
          <motion.div
            className="flex items-center text-emerald-700 font-semibold hover:text-amber-500 transition-colors w-fit"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collections
          </motion.div>
        </Link>
      </motion.div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <motion.span
              className="inline-block text-amber-600 font-semibold text-sm mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {product.category}
            </motion.span>

            <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-slate-600 text-sm">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <motion.div
              className="text-4xl font-bold text-emerald-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.price}
            </motion.div>

            {/* Description */}
            <p className="text-slate-600 mb-8 font-light leading-relaxed">{product.description}</p>

            {/* Details List */}
            <div className="mb-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">Premium Features</h3>
              <ul className="space-y-3">
                {product.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-slate-100 rounded-lg p-6 mb-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-slate-600 text-sm font-semibold mb-1">{key}</p>
                    <p className="text-slate-900 font-light">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart
              </motion.button>

              <motion.button
                onClick={() => setLiked(!liked)}
                className={`px-6 py-4 border-2 rounded-lg transition-colors duration-300 ${
                  liked ? "border-red-500 bg-red-50" : "border-slate-300 hover:border-red-500"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : "text-slate-600"}`} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products Section */}
      <motion.div
        className="mt-20 py-16 bg-emerald-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Explore More Collections</h2>
          <p className="text-emerald-100 mb-8 font-light">
            Discover other premium leather straps that complement your style
          </p>
          <Link href="/collections">
            <motion.button
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Collections
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
