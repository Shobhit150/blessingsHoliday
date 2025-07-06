'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { trips } from '@/lib/tripData'

const whatsappNumber = '917838800808'

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 text-gray-800">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600">
          Who We Are
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-7">
          At <span className="font-semibold text-orange-600">Blessings Holiday</span>, we believe travel isn't just about places — it's about people, moments, and memories.
          We curate unforgettable group trips for youth, explorers, and culture lovers who want more than just sightseeing.
        </p>
      </section>

      {/* Our Mission */}
      <section className="flex justify-center gap-10 items-center flex-col">
        
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">✨ Our Mission</h2>
          <p className="text-gray-700 leading-6">
            We're not a typical travel agency. We're a community of explorers crafting experiences that blend adventure, culture, and new friendships.
            Whether it's camping under the stars in Himachal, discovering hidden lakes in Uttarakhand, or dancing on beaches in Goa — every trip we plan is designed to give you stories worth remembering.
          </p>
        
        {/* <Image
          src="/about_us/team.webp"
          alt="Our Team"
          width={600}
          height={400}
          className="rounded-xl object-cover shadow-xl"
        /> */}
      </section>

      {/* Why Choose Us */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-orange-600">Why Travel With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm font-medium">
          {[
            { emoji: '🚐', text: 'Comfortable Travel' },
            { emoji: '🧭', text: 'Unique Offbeat Destinations' },
            { emoji: '👨‍👩‍👧‍👦', text: 'Curated Group Experiences' },
            { emoji: '💬', text: '24/7 On-Trip Support' },
          ].map(({ emoji, text }, i) => (
            <div key={i} className="p-4 bg-orange-50 rounded-lg shadow text-center space-y-2">
              <div className="text-3xl">{emoji}</div>
              <div className="text-gray-700">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Trips */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">🚀 Our Top Adventures</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {trips.slice(0, 3).map((trip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border shadow-xl shadow-gray-300 rounded-[14px] p-3 min-w-[340px] md:min-w-[400px] max-w-[400px] bg-white overflow-hidden"
            >
              <Image
                src={trip.image}
                alt={trip.title}
                width={400}
                height={300}
                className="w-full h-[300px] rounded-t-lg object-cover"
              />
              <div className="mt-4 space-y-1">
                <h3 className="text-lg font-semibold">{trip.title}</h3>
                <p className="text-sm text-gray-600">{trip.location}</p>
                <p className="text-sm text-gray-600">{trip.date}</p>

                <div className="border rounded-lg border-orange-600 flex flex-col mt-2">
                  <p className="text-[10px] bg-[rgb(253,244,244)] p-2 rounded-t-lg">
                    STARTS FROM
                  </p>
                  <p className="text-emerald-600 font-bold p-2">
                    {trip.price}
                  </p>
                </div>

                <Link
                  href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the ${trip.title} trip on ${trip.date}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-orange-600 border-2 mt-4 px-4 py-2 bg-orange-600 text-white rounded-md text-sm hover:bg-orange-500 transition"
                >
                  Book on WhatsApp
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center mt-12 space-y-4">
        <h3 className="text-xl font-semibold">Still thinking?</h3>
        <p className="text-gray-600">Drop us a message and we'll help you find your perfect trip.</p>
        <Link
          href={`https://wa.me/${whatsappNumber}?text=Hi, I'm looking to plan a group trip.`}
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
          target="_blank"
        >
          💬 Let's Chat on WhatsApp
        </Link>
      </section>
    </div>
  )
}

export default AboutUs
