'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'

const BottomStickyBar: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  // Email handler for dynamic behavior
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const toEmail = 'info@blessingsholiday.com'
    const subject = 'Trip Enquiry'
    const body = 'Hi, I would like to know more about your travel packages.'

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

    if (isMobile) {
      // Open Gmail app on mobile (via mailto)
      const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
    } else {
      // Open Gmail on desktop browser
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${toEmail}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
      window.open(gmailLink, '_blank')
    }
  }

  return (
    <div className="fixed md:hidden bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-between items-center text-sm font-medium text-black">
        {/* Call */}
        <a
          href="tel:+917838800808"
          className="w-full flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition"
          aria-label="Call Us"
        >
          <FaPhoneAlt className="text-blue-600" size={20} />
          Call
        </a>

        <div className="w-[1px] bg-gray-300 h-6" />

        {/* Email (dynamic handler) */}
        <button
          onClick={handleEmailClick}
          className="w-full flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition"
          aria-label="Email Us"
        >
          <FaEnvelope className="text-red-600" size={20} />
          Email
        </button>

        <div className="w-[1px] bg-gray-300 h-6" />

        {/* Contact Page */}
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
