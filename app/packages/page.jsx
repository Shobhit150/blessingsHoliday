'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { trips } from '@/lib/tripData'

const months = ['July 2025', 'August 2025', 'September 2025']

const PackagePage = () => {
  const [selectedMonth, setSelectedMonth] = useState('July 2025')

  const filteredTrips = trips.filter((trip) => trip.tag === selectedMonth)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-orange-600">Explore Our Packages</h1>
        <p className="text-gray-600">
          Pick your next adventure — we’ve curated the best group travel experiences for you.
        </p>
      </div>

      {/* Month Selector */}
      <div className="flex justify-center gap-4">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`px-4 py-2 text-sm rounded-full border font-medium transition ${
              selectedMonth === month
                ? 'bg-orange-600 text-white'
                : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Trips Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
              className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              <Link href={`/trips/${trip.slug}`} className="block group">
                <Image
                  src={trip.image[0]}
                  alt={trip.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-bold text-gray-800">{trip.title}</h3>
                  <p className="text-sm text-gray-500">
                    {trip.location} • {trip.date}
                  </p>
                  <p className="text-lg font-semibold text-emerald-600">{trip.price}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {trip.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Trips Fallback */}
      {filteredTrips.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500"
        >
          No trips available for {selectedMonth} yet. Stay tuned!
        </motion.p>
      )}
    </div>
  )
}

export default PackagePage
