"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/75 backdrop-blur-xl shadow-sm border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="hidden sm:block text-xl font-serif tracking-wide">
              <span className="text-emerald-900 font-bold">Royal</span>
              <span className="text-amber-600">Luxury</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.nav
          className="hidden md:flex gap-8 text-emerald-900 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                color: "#B8860B",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Link href={link.href} className="relative group">
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex gap-4 items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-emerald-900 focus:outline-none transition-colors hover:text-amber-600"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md text-emerald-900 shadow-lg px-4 sm:px-6 py-4 space-y-3 border-b border-emerald-100"
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-amber-600 transition-colors"
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </header>
  )
}
