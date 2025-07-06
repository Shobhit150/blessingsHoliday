'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { trips } from '@/lib/tripData'

const months = ['July 2025', 'August 2025', 'September 2025']
const whatsappNumber = '917838800808'

const Details = () => {
  const [selectedMonth, setSelectedMonth] = useState('July 2025')
  const filteredTrips = trips.filter(trip => trip.tag === selectedMonth)

  return (
    <div className="px-4 py-8 max-w-[1100px] m-auto -mt-[46px] md:-mt-[55px]">
      {/* Month Selector */}
      <div className="relative z-30 flex overflow-x-auto no-scrollbar px-4 justify-center">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`
              px-2 py-2 md:px-6 md:py-4 text-sm border whitespace-nowrap transition-colors duration-200
              ${selectedMonth === month
                ? 'bg-orange-600 text-white border-orange-500'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'}
            `}
          >
            {month}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center mt-10">
        Upcoming Group Trips For You 🥳
      </h2>

      {/* Trip Cards */}
      <div className="py-2 px-2">
        <div className="overflow-x-auto md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="m-4 flex md:grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 w-max md:w-full">
            {filteredTrips.length > 0 ? (
              filteredTrips.map((trip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border shadow-xl shadow-gray-300 rounded-[14px] p-3 min-w-[340px] md:min-w-[400px] max-w-[400px] bg-white overflow-hidden flex-shrink-0 md:m-auto"
                >
                  <Link href={`/trips/${trip.slug}`} className="block">
                    <Image
                      src={trip.image[0]}
                      alt={trip.title}
                      width={200}
                      height={200}
                      className="w-full h-[300px] rounded-t-lg object-cover"
                    />
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">{trip.title}</h3>
                      <p className="text-sm text-gray-600">{trip.location}</p>
                      <p className="text-sm text-gray-600">{trip.date}</p>
                      <div className="border rounded-lg border-orange-600 flex flex-col justify-evenly mt-2">
                        <p className="flex-1 text-[10px] bg-[rgb(253,244,244)] rounded-lg p-2">
                          STARTS FROM
                        </p>
                        <p className="text-emerald-600 flex-1 p-2 font-bold">
                          {trip.price}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* WhatsApp Button outside link */}
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the ${trip.title} trip in ${trip.date}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-orange-600 border-2 mt-4 px-4 py-2 bg-orange-600 text-white rounded-md text-sm hover:bg-orange-500 transition"
                  >
                    Book on WhatsApp
                  </Link>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">
                No trips available for {selectedMonth}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
