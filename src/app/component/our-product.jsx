"use client";

import { motion } from "framer-motion";
import ProductCard from "./product-card";


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
  
];

export default function OurProduct() {
  return (
    <section className=" bg-gradient-to-b from-[#F5F1E8] via-[#EAE3D5] to-[#E3DAC9] py-16 px-6 md:px-16 font-['cormorant']">
    
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl text-[#6B8E23] tracking-wide">
        Our Premium Collections
        </h2>
        <p className="mt-4 text-[#4A4A4A] text-lg max-w-2xl mx-auto">
          Elegant handcrafted straps that embody luxury and timeless design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2  mx-auto">
        {collections.map((product, index) => (
         <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

