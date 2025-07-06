'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const BottomStickyBar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed md:hidden bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-between items-center text-sm font-medium text-black">
        <a
          href="tel:+919140772033"
          className="w-full flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition"
          aria-label="Call Us"
        >
          <FaPhoneAlt className="text-blue-600" />
          Call
        </a>

        <div className="w-[1px] bg-gray-300 h-6" />

        <a
          href="https://wa.me/9140772033?text=Hi, I want to know more about your trips!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-green-600" />
          WhatsApp
        </a>

        <div className="w-[1px] bg-gray-300 h-6" />

        <Link
          href="/contact"
          className="w-full flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition"
          aria-label="Send Query"
        >
          <FaEnvelope className="text-red-500" />
          Query
        </Link>
      </div>
    </div>
  )
}

export default BottomStickyBar
