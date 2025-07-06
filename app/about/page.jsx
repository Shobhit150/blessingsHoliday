'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
          At <span className="font-semibold text-orange-600">Blessings Holiday</span>, we believe travel isn’t just about places — it’s about people, moments, and memories.
          We curate unforgettable group trips for youth, explorers, and culture lovers who crave experiences over itineraries.
        </p>
      </section>

      {/* Mission Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-600 text-center">✨ Our Mission</h2>
        <p className="text-gray-700 leading-7 text-center max-w-3xl mx-auto">
          Ever had a trip waste your time and money? We did too! That’s why we built something better — a travel company by travelers, for travelers. We're here to create journeys worth remembering, not just checking off tourist spots.
        </p>
        <ul className="text-gray-700 leading-7 list-disc list-inside max-w-3xl mx-auto space-y-2">
          <li>✅ Discover hidden gems guidebooks miss</li>
          <li>✅ Share authentic local flavors — not just Instagram-famous dishes</li>
          <li>✅ Handpick unique stays that feel like home, but surprise you every day</li>
          <li>✅ Handle all logistics, so you focus on making memories</li>
        </ul>
      </section>

      {/* What Makes Us Different */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-600 text-center">🍲 What Makes Us Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm font-medium">
          {[
            { emoji: '🍛', text: 'Food with a story — from secret kitchens to street legends' },
            { emoji: '🏡', text: 'Stays with soul — heritage homes & eco-resorts' },
            { emoji: '🛤️', text: 'Paths less traveled — fresh and original destinations' },
            { emoji: '🧳', text: 'All-in-one care — you relax, we handle the chaos' },
          ].map(({ emoji, text }, i) => (
            <div key={i} className="p-4 bg-orange-50 rounded-lg shadow text-center space-y-2">
              <div className="text-3xl">{emoji}</div>
              <div className="text-gray-700">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600">🗺 Our Promise</h2>
        <p className="text-gray-700">
          Your next trip won't just be a vacation. It will be:
        </p>
        <ul className="text-gray-700 leading-7 list-disc list-inside space-y-2">
          <li>✅ Thoughtfully planned, not rushed</li>
          <li>✅ Seamless from start to finish</li>
          <li>✅ Rich in authentic food, culture, and local connection</li>
          <li>✅ A story worth telling — and retelling</li>
        </ul>
      </section>

      {/* Why Travel With Us */}
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

      {/* Footer CTA */}
      <section className="text-center mt-12 space-y-4">
        <h3 className="text-xl font-semibold">✨ Ready to see the world differently?</h3>
        <p className="text-gray-600">
          Let’s make your next trip unforgettable — not because it was expensive, but because it felt real.
        </p>
        <p className="text-gray-600 font-medium">📍 Hidden places. 🥘 Honest food. ❤️ Memories that matter.</p>
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
