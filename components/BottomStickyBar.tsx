'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'

const BottomStickyBar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed md:hidden bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-between items-center text-sm font-medium text-black">
        {/* Call */}
        <a
          href="tel:+919140772033"
          className="w-full flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition"
          aria-label="Call Us"
        >
          <FaPhoneAlt className="text-blue-600" size={20} />
          Call
        </a>

        <div className="w-[1px] bg-gray-300 h-6" />

        {/* Email */}
        <a
          href="mailto:tripplanner@example.com"
          className="w-full flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition"
          aria-label="Email Us"
        >
          <FaEnvelope className="text-red-600" size={20} />
          Email
        </a>

        <div className="w-[1px] bg-gray-300 h-6" />

        {/* Query Page */}
        <Link
          href="/contact"
          className="w-full flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition"
          aria-label="Send Query"
        >
          <FaQuestionCircle className="text-green-600" size={20} />
          Query
        </Link>
      </div>
    </div>
  )
}

export default BottomStickyBar
