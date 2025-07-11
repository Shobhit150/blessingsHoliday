'use client'
import React, { useState } from 'react'
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6'
import Link from 'next/link'
import { trips } from '@/lib/tripData'
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6'

const seenTitles = new Set<string>()
const destinations = trips
  .filter(trip => {
    if (seenTitles.has(trip.title)) return false
    seenTitles.add(trip.title)
    return true
  })
  .map(trip => ({
    title: trip.title,
    slug: trip.slug,
    id: trip.id
  }))

const Footer = () => {
  const [num, setNum] = useState<string>('+91 78388 00808');

  return (
    <footer className="bg-gray-900 text-white px-6 py-12 mt-10 pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:underline">
                Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Weekend Trips */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Weekend Trips</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {destinations.map((dest) => (
              <li key={dest.id}>
                <Link href={`/trips/${dest.slug}`} className="hover:underline">
                  {dest.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <ul className="space-y-3 text-sm text-gray-300 mb-4">
            <li className="flex items-center gap-2">
              <FaInstagram />
              <a
                href="https://instagram.com/Blessings_holiday_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            {/* <li className="flex items-center gap-2">
              <FaFacebookF />
              <a
                href="https://facebook.com/blessingsholiday"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li> */}
            <li className="flex items-center gap-2">
              <FaWhatsapp />
              <a
                href="https://wa.me/917838800808"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </li>
            {/* <li className="flex items-center gap-2">
              <FaYoutube />
              <a
                href="https://youtube.com/@blessingsholiday"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
            </li> */}
            {/* <li className="flex items-center gap-2">
              <FaXTwitter />
              <a
                href="https://twitter.com/blessingsholiday"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div>
          <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
            <FaPhone className="inline-block" />
            <span>+91 78388 00808</span>
          </p>
          <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
            <FaEnvelope className="inline-block" />
            <span>info@blessingsholiday.com</span>
          </p>
          <p className="text-sm text-gray-300 mt-2 flex gap-2 items-start">
            <FaLocationDot size={16} className="inline-block" />
            <span>11, Rani Jhansi Road <br/> New Delhi</span>
          </p>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
