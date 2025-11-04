"use client";

import { motion } from "framer-motion";

export default function Collections() {
  const collections = [
    {
      id: 1,
      name: "Classic Tan Leather",
      description:
        "Handcrafted from Italian tan leather — rich texture and timeless style for the modern wrist.",
      image: "/brown.jpg",
    },
    {
      id: 2,
      name: "Royal Midnight Blue",
      description:
        "Deep royal blue leather with gold stitching — a perfect blend of sophistication and strength.",
      image: "/watch.jpg",
    },
    {
      id: 3,
      name: "Vintage Ebony Black",
      description:
        "Bold, premium black leather strap — crafted to make every timepiece stand out with authority.",
      image: "/m.webp",
    },
  ];

  return (
    <section className="relative bg-[#F9F6F1] text-[#1B1B1B] py-20 overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C1F3C]/10 via-[#C8A15A]/10 to-[#3E2B23]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold bg-gradient-to-r from-[#0C1F3C] via-[#3E2B23] to-[#C8A15A] bg-clip-text text-transparent uppercase">
            Our Premium Collections
          </h2>
          <p className="mt-4 text-[#3E2B23]/80 max-w-2xl mx-auto text-lg">
            Explore our curated selection of fine leather watch straps crafted for timeless appeal.
          </p>
        </motion.div>

     
        <div className="grid md:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="group bg-white border border-[#D8C49E]/50 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
            >
            
              <div className="w-full h-64 overflow-hidden relative">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-[#0C1F3C] tracking-wide">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[#3E2B23]/80 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 w-full py-3 bg-[#0C1F3C] text-[#F9F6F1] font-semibold hover:bg-[#C8A15A] hover:text-[#1B1B1B] transition-all duration-300"
                >
                  View Collection
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2 }}
        className="mt-20 h-[3px] bg-gradient-to-r from-[#3E2B23] via-[#C8A15A] to-[#0C1F3C]"
      />
    </section>
  );
}
