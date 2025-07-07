'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { trips } from '@/lib/tripData'

const months = ['July 2025', 'August 2025', 'September 2025']

const PackagePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800 space-y-16">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-orange-600">Explore Our Packages</h1>
        <p className="text-gray-600">
          Pick your next adventure — we’ve curated the best group travel experiences for you.
        </p>
      </div>

      {months.map((month) => {
        const monthTrips = trips.filter((trip) => trip.tag === month)
        if (monthTrips.length === 0) return null

        return (
          <div key={month} className="space-y-6">
            {/* Month Heading */}
            <h2 className="text-2xl font-semibold text-orange-500 border-b pb-1 border-orange-300">
              {month}
            </h2>

            {/* Trips Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {monthTrips.map((trip, index) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PackagePage
