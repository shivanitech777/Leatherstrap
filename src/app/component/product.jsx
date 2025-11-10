"use client";

import { motion } from "framer-motion";
import ProductCard from "./product-card";


const products = [
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
  
];

export default function ProductPage() {
  return (
    <section className=" bg-gradient-to-b from-[#F5F1E8] via-[#EAE3D5] to-[#E3DAC9] py-8 md:py-16 px-3 md:px-16 font-[cormorant]">
    
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-4 md:mb-8"
      >
        <h2 className="text-4xl md:text-5xl  text-[#6B8E23] tracking-wide">
          Premium Leather Collection
        </h2>
        <p className="mt-4 text-[#4A4A4A] text-lg max-w-2xl mx-auto">
          Elegant handcrafted straps that embody luxury and timeless design.
        </p>
      </motion.div>

      <div className="grid  grid-cols-2 lg:grid-cols-5 gap-2  mx-auto">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

