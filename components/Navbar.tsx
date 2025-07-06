'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa6'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const menuLinks = [
    { label: 'Home', href: '/' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]
  

  const destinations = [
    { label: 'Corbett & Nainital', slug: 'corbett-nainital' },
    { label: 'Sariska Tiger and Crocodile', slug: 'sariska-tiger-crocodile' },
  ]


  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="flex flex-row justify-between items-center px-6 py-3 max-w-[1150px] mx-auto relative">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo3.png" alt="logo" width={40} height={40} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center font-medium text-sm text-gray-700">
          {menuLinks.map(link => (
            <Link key={link.label} href={link.href} className="hover:text-blue-600 transition">
              {link.label}
            </Link>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Destinations <FaChevronDown size={12} />
            </button>
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-md py-2 px-4 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {destinations.map(dest => (
                    <Link key={dest.label} href={`/trip/${dest.slug}`} className="block py-1 hover:text-blue-600">
                      {dest.label}
                    </Link>
                  ))}

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <IoMdMenu size={28} className="cursor-pointer text-black" onClick={() => setIsOpen(true)} />
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-0 left-0 w-full bg-white shadow-lg z-50 rounded-b-lg"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end px-6 py-4">
                <IoMdClose size={28} className="cursor-pointer text-black" onClick={() => setIsOpen(false)} />
              </div>
              <div className="flex flex-col gap-5 items-center justify-center pb-6 text-gray-700 text-sm font-medium">
                {menuLinks.map(link => (
                  <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <div className="w-full px-8">
                  <div className="mt-2 font-semibold">Destinations</div>
                  {destinations.map(dest => (
                    <Link
                      key={dest.label}
                      href={`/trip/${dest.slug}`}
                      className="block mt-1 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {dest.label}
                    </Link>
                  ))}

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
