'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const whatsappNumber = '917838800808'
const toEmail = 'info@blessingholiday.com'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, message } = formData

    const gmailLink = `https://mail.google.com/mail/?view=cm&to=${toEmail}&su=${encodeURIComponent(
      'Trip Enquiry from ' + name
    )}&body=${encodeURIComponent(message + '\n\nReply to: ' + email)}`

    window.open(gmailLink, '_blank')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 text-gray-800">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-orange-600">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or want help planning your next trip? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 bg-white shadow-md rounded-xl p-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-700 transition"
        >
          Open in Gmail
        </button>
      </form>

      {/* WhatsApp CTA */}
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-500">Prefer a quick chat?</p>
        <Link
          href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in planning a trip with Blessings Holiday.`}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
        >
          <FaWhatsapp size={18} />
          Chat on WhatsApp
        </Link>
      </div>
    </div>
  )
}

export default ContactPage
