"use client"

import { Phone, Instagram, Twitter, Facebook, Menu, X } from "lucide-react"
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <header className="w-full animate-fadeIn fixed z-50 bg-white shadow-md">
      <div className="bg-teal-800 w-full py-3 px-4 md:px-20">
        <div className="flex items-center justify-between text-white flex-wrap">
          <a href="tel:(571) 520 5039" className="cursor-pointer flex items-center gap-1">
            <div className="flex items-center gap-8">
              <span className="hidden md:inline text-xl font-bold md:text-xl">Speak with a Care Coordinator Today</span>
              <div className="flex flex-row gap-2 items-center">
                <Phone size={24} />
                <span className="text-xl font-bold md:text-xl">Call us: (571) 520 5039</span>
              </div>
            </div>
          </a>

          {/* <Link
            href="https://careliving.clearcareonline.com/quick-apply/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold"
          >
            Now Hiring
          </Link> */}

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://www.instagram.com/carelivinghome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.x.com/carelivinghome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61572990697550"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              <Facebook size={24} />
            </Link>
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between py-4 px-4 md:px-20">
        <Link href="/" className="relative z-50">
          <img src="/carelivinglogo.svg" alt="CareLiving Logo" className="h-8 md:h-10" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 xl:hidden">
          <Button asChild variant="default" className="bg-primary text-white hover:bg-primary/90 rounded-xl">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex gap-6 text-sm md:text-base text-text items-center">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="https://careliving.clearcareonline.com/quick-apply/" target="_blank" className="hover:text-primary transition-colors">CareLivers</Link>
          <Link href="/waitlist" className="hover:text-primary transition-colors">Waitlist</Link>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-white px-2 py-2 rounded-xl transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 top-[120px] z-40 "
            >
              <div className="flex flex-col gap-6 text-lg p-6 bg-white shadow-lg rounded-b-2xl">
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/resources"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="https://careliving.clearcareonline.com/quick-apply/" target="_blank"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  CareLivers
                </Link>
                <Link
                  href="/waitlist"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Waitlist
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header