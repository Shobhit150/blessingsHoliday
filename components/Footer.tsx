import React from 'react'
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 mt-10 pt-20">
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
            <li>Jim Corbett & Nainital</li>
            <li>Sariska Tiger and Crocodile</li>
            
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
          <p className="text-sm text-gray-300">
            11, <br />
            Rani Jhansi road, New Delhi- 110055
          </p>
          <p className="text-sm text-gray-300 mt-2">
            📞 +91 78388 00808<br />
            ✉️ info@blessingsholiday.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
