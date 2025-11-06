"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FFFBF5] via-white to-[#F5F1E8] text-[#1B5E3F] pt-24">
    
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center px-4 py-16 md:py-20"
      >
        <motion.h1
          className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <span className="text-[#1B5E3F]">Connect</span>
          <span className="text-[#D4AF37] ml-4">With Us</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-[#1B5E3F]/70 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We&apos;re passionate about crafting premium leather watch straps. Have questions? Let&apos;s start a conversation.
        </motion.p>

       
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
      
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-1 space-y-6"
          >
           
            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border-2 border-[#E8DCC8] hover:border-[#D4AF37] transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <motion.div className="flex items-start gap-4" whileHover={{ x: 4 }}>
                <div className="p-3 bg-gradient-to-br from-[#1B5E3F]/10 to-[#D4AF37]/10 rounded-xl group-hover:from-[#1B5E3F]/20 group-hover:to-[#D4AF37]/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[#1B5E3F]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#1B5E3F] mb-2">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-[#D4AF37] hover:text-[#1B5E3F] transition-colors font-semibold"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-[#1B5E3F]/50 mt-1">Mon-Fri, 10am-6pm IST</p>
                </div>
              </motion.div>
            </motion.div>

          
            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border-2 border-[#E8DCC8] hover:border-[#D4AF37] transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <motion.div className="flex items-start gap-4" whileHover={{ x: 4 }}>
                <div className="p-3 bg-gradient-to-br from-[#1B5E3F]/10 to-[#D4AF37]/10 rounded-xl group-hover:from-[#1B5E3F]/20 group-hover:to-[#D4AF37]/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#1B5E3F]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#1B5E3F] mb-2">Email</h3>
                  <a
                    href="mailto:hello@theleatheraura.com"
                    className="text-[#D4AF37] hover:text-[#1B5E3F] transition-colors font-semibold break-all text-sm"
                  >
                    hello@theleatheraura.com
                  </a>
                  <p className="text-sm text-[#1B5E3F]/50 mt-1">We reply within 24 hours</p>
                </div>
              </motion.div>
            </motion.div>

            
            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border-2 border-[#E8DCC8] hover:border-[#D4AF37] transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <motion.div className="flex items-start gap-4" whileHover={{ x: 4 }}>
                <div className="p-3 bg-gradient-to-br from-[#1B5E3F]/10 to-[#D4AF37]/10 rounded-xl group-hover:from-[#1B5E3F]/20 group-hover:to-[#D4AF37]/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#1B5E3F]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#1B5E3F] mb-2">Location</h3>
                  <p className="text-[#1B5E3F] font-medium">Connaught Place</p>
                  <p className="text-sm text-[#1B5E3F]/70">New Delhi, India</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

       
          <motion.form
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 bg-white rounded-2xl p-10 md:p-14 border-2 border-[#E8DCC8] hover:border-[#D4AF37] transition-all duration-500 shadow-lg hover:shadow-2xl"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-serif font-bold text-[#1B5E3F] mb-10 uppercase tracking-tight"
            >
              Send Your Message
            </motion.h2>

        
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-[#1B5E3F] mb-3 uppercase tracking-wide">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{
                      borderColor: "#1B5E3F",
                      boxShadow: "0 0 0 4px rgba(27, 94, 63, 0.08)",
                      scale: 1.02,
                    }}
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formState.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFBF5] border-2 border-[#E8DCC8] p-4 rounded-lg focus:border-[#1B5E3F] focus:outline-none transition-all duration-300 text-[#1B5E3F] placeholder-[#A0A0A0] font-medium"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-[#1B5E3F] mb-3 uppercase tracking-wide">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{
                      borderColor: "#1B5E3F",
                      boxShadow: "0 0 0 4px rgba(27, 94, 63, 0.08)",
                      scale: 1.02,
                    }}
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFBF5] border-2 border-[#E8DCC8] p-4 rounded-lg focus:border-[#1B5E3F] focus:outline-none transition-all duration-300 text-[#1B5E3F] placeholder-[#A0A0A0] font-medium"
                  />
                </motion.div>
              </div>

            
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-[#1B5E3F] mb-3 uppercase tracking-wide">
                  Subject
                </label>
                <motion.input
                  whileFocus={{
                    borderColor: "#1B5E3F",
                    boxShadow: "0 0 0 4px rgba(27, 94, 63, 0.08)",
                    scale: 1.02,
                  }}
                  type="text"
                  name="subject"
                  placeholder="Custom leather strap inquiry"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="w-full bg-[#FFFBF5] border-2 border-[#E8DCC8] p-4 rounded-lg focus:border-[#1B5E3F] focus:outline-none transition-all duration-300 text-[#1B5E3F] placeholder-[#A0A0A0] font-medium"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-[#1B5E3F] mb-3 uppercase tracking-wide">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{
                    borderColor: "#1B5E3F",
                    boxShadow: "0 0 0 4px rgba(27, 94, 63, 0.08)",
                    scale: 1.02,
                  }}
                  placeholder="Tell us about your inquiry..."
                  name="message"
                  rows="6"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#FFFBF5] border-2 border-[#E8DCC8] p-4 rounded-lg focus:border-[#1B5E3F] focus:outline-none transition-all duration-300 resize-none text-[#1B5E3F] placeholder-[#A0A0A0] font-medium"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(27, 94, 63, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full bg-gradient-to-r from-[#1B5E3F] to-[#0F3D2A] text-white font-semibold px-8 py-5 rounded-xl overflow-hidden group text-lg transition-all duration-300 mt-4"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F0E68C] opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
              </motion.button>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl border-2 border-[#E8DCC8] overflow-hidden shadow-xl hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-500"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.869640786226!2d77.21672177535807!3d28.613939275658772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3f8db6d093%3A0x14855a69e8e3cb41!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
