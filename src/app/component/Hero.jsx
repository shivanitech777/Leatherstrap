"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900">
     
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/30 via-emerald-600/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-gradient-radial from-amber-500/20 via-amber-600/10 to-transparent rounded-full blur-3xl"
        />
        
       
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,150,105,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,150,105,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        
       
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-emerald-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
          
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-12"
          >
           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 backdrop-blur-xl border border-emerald-400/30 shadow-lg shadow-emerald-500/20"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400 shadow-lg shadow-emerald-400/50"
              />
              <span className="text-sm Libre text-emerald-100 tracking-wider">EXCLUSIVE LUXURY COLLECTION</span>
            </motion.div>


            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="block text-3xl sm:text-7xl md:text-8xl   mb-4">
                  <span className="block text-white drop-shadow-2xl libreCaslonDisplay tracking-wider font-normal">TIMELESS</span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400 bg-clip-text text-transparent filter font-normal drop-shadow-[0_0_30px_rgba(16,185,129,0.5)] libreCaslonDisplay tracking-wider pb-2">
                    ELEGANCE
                  </span>
                </span>
                
                
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-500 rounded-full origin-left shadow-lg shadow-emerald-500/50"
                />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-xl lg:text-xl text-emerald-100/90 leading-relaxed max-w-2xl  "
              >
                Where heritage meets innovation. Each masterpiece is meticulously crafted 
                to transcend time, embodying the pinnacle of luxury and sophistication.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex flex-wrap gap-5"
            >
              <Link href="/collections">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white  font-bold text-lg shadow-2xl shadow-emerald-500/50 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3 poppinsDisplay">
                    Explore Collection
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-3 border-2  border-emerald-400/50 bg-emerald-500/10 backdrop-blur-xl text-emerald-100 text-lg hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 Libre"
                >
                  <span className="flex items-center gap-2">
                    Discover Heritage
                  </span>
                </motion.button>
              </Link>
            </motion.div>

          
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="hidden md:grid grid-cols-3 gap-8 pt-12 border-t border-emerald-500/20 Libre"
            >
              {[
                { number: "25+", label: "Years Legacy", icon: "★" },
                { number: "10K+", label: "Elite Clients", icon: "◆" },
                { number: "99%", label: "Excellence", icon: "✓" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-emerald-400 group-hover:text-amber-400 transition-colors">
                        {stat.icon}
                      </span>
                      <p className="text-5xl font-bold bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent">
                        {stat.number}
                      </p>
                    </div>
                    <p className="text-sm text-emerald-200/70 font-medium uppercase tracking-widerr">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[400px] lg:h-[550px]">
             
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-amber-500/20 to-emerald-500/30 blur-3xl"
              />

              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full perspective-1000"
              >
                <div className="relative h-full  overflow-hidden shadow-2xl shadow-emerald-500/30 border border-emerald-400/20">
                  <Image 
                    src="/green.jpg" 
                    alt="Premium Luxury Product" 
                    fill 
                    className="object-cover"
                    priority
                  />
                  
                
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-amber-500/10" />
                  
                
                  <motion.div
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />

                  <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-2xl" />
                  <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-amber-400/50 rounded-br-2xl" />
                </div>

             
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -top-6 -right-6 px-5 py-3 bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl shadow-emerald-500/50 border border-emerald-400/30 backdrop-blur-xl"
                >
                  <p className="text-xs font-bold text-white uppercase tracking-widerst">Premium</p>
                  <p className="text-xs text-emerald-100">Handcrafted</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="absolute -bottom-6 -left-6 px-6 py-3 bg-gradient-to-br from-amber-500 to-amber-700 shadow-2xl shadow-amber-500/50 border border-amber-400/30 backdrop-blur-xl"
                >
                  <p className="text-xs text-amber-100 uppercase tracking-widerr">Limited Edition</p>
                  <p className="text-xs font-bold text-white">★★★★★</p>
                </motion.div>
              </motion.div>

            
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-amber-500/40 to-emerald-500/40 rounded-full blur-3xl"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 30, 0],
                  rotate: [0, -360, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-emerald-500/40 to-amber-500/40 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

     
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}   