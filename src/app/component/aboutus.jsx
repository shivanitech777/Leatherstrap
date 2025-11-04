"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-[#F9F6F1] text-[#1B1B1B] overflow-hidden font-['Lato']">
     
      <section className="relative py-24 px-6 md:px-12 text-center bg-gradient-to-b from-[#1A1A1A] to-[#4A2C2A] text-[#F9F6F1]">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-[#B89B4A] uppercase"
        >
          About Our Craft
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 max-w-3xl mx-auto text-[#F9F6F1]/90 text-lg leading-relaxed"
        >
          We design and handcraft premium leather watch straps that celebrate timeless craftsmanship,
          comfort, and class — made for those who appreciate perfection in every detail.
        </motion.p>
      </section>

    
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
      
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[420px] overflow-hidden border border-[#B89B4A]/40 shadow-md bg-white"
        >
          <img
            src="/images/leather-workshop.jpg"
            alt="Leather Craftsmanship"
            className="w-full h-full object-cover"
          />
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-[#1E3A8A] uppercase mb-6">
            Handcrafted to Perfection
          </h2>
          <p className="text-[#3E2B23]/90 leading-relaxed mb-4">
            Each of our leather straps begins its journey in the hands of master artisans. Using
            full-grain leather sourced from the world’s finest tanneries, every piece is cut,
            stitched, and finished by hand to achieve lasting elegance and comfort.
          </p>
          <p className="text-[#3E2B23]/90 leading-relaxed">
            The result — a watch strap that feels as luxurious as it looks, embodying heritage,
            quality, and precision in every detail.
          </p>
        </motion.div>
      </section>

      
      <section className="bg-[#1A1A1A] text-[#F9F6F1] py-20 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-12">
      
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[420px] overflow-hidden border border-[#B89B4A]/50 shadow-md bg-white"
        >
          <img
            src="/images/leather-materials.jpg"
            alt="Leather Materials"
            className="w-full h-full object-cover"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-[#B89B4A] uppercase mb-6">
            Finest Materials, Timeless Appeal
          </h2>
          <p className="text-[#F9F6F1]/90 leading-relaxed mb-4">
            Our straps are made from ethically sourced, full-grain leather that develops a rich
            patina over time — enhancing the story of every watch it graces.
          </p>
          <p className="text-[#F9F6F1]/80 leading-relaxed">
            From supple Italian leather to durable stainless-steel clasps, every element is chosen to
            deliver unmatched strength and sophistication.
          </p>
        </motion.div>
      </section>


      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
       
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[420px] overflow-hidden border border-[#B89B4A]/40 shadow-md bg-white"
        >
          <img
            src="/images/leather-heritage.jpg"
            alt="Leather Heritage"
            className="w-full h-full object-cover"
          />
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-[#1E3A8A] uppercase mb-6">
            A Legacy of Craftsmanship
          </h2>
          <p className="text-[#3E2B23]/90 leading-relaxed mb-4">
            Rooted in the age-old traditions of leather artistry, our brand was born from a passion
            for heritage and refinement. Each strap we create pays homage to classic horology while
            embracing modern sensibilities.
          </p>
          <p className="text-[#3E2B23]/90 leading-relaxed">
            With every product, we strive to preserve the spirit of craftsmanship — ensuring your
            watch strap becomes not just an accessory, but a lifelong companion.
          </p>
        </motion.div>
      </section>


      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2 }}
        className="h-[3px] bg-gradient-to-r from-[#4A2C2A] via-[#B89B4A] to-[#1E3A8A]"
      />
    </main>
  );
}
