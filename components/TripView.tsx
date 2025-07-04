'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
const months = ['July 2025', 'August 2025', 'September 2025', 'October 2025', 'November 2025', 'December 2025']
const whatsappNumber = '919140772033' // your number
const tripData: Record<string, {
    title: string
    location: string
    date: string
    price: string
    image: string
}[]> = {
    'July 2025': [
        {
            title: "Manali Adventure", location: "Himachal", date: "12-18 July", price: "₹18,999",
            image: "/images/trip1.JPG"
        },
        {
            title: "Goa Beach Chill", location: "Goa", date: "25-30 July", price: "₹14,999",
            image: "/images/trip1.JPG"
        },
        {
            title: "Manali Adventure", location: "Himachal", date: "12-18 July", price: "₹18,999",
            image: "/images/trip1.JPG"
        },
        {
            title: "Manali Adventure", location: "Himachal", date: "12-18 July", price: "₹18,999",
            image: "/images/trip1.JPG"
        }
    ],
    'August 2025': [
        {
            title: "Leh-Ladakh Roadtrip", location: "Ladakh", date: "15-24 August", price: "₹29,999",
            image: "/images/trip1.JPG"
        }
    ],
}

const Details = () => {
    const [selectedMonth, setSelectedMonth] = useState('July 2025')

    return (
        <div className="px-4 py-8 max-w-[1150px] m-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Upcoming Group Trips For You 🥳
            </h2>

            {/* Month Selector */}
            <motion.div
                className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar px-2"
                drag="x"
                dragConstraints={{ left: -300, right: 0 }}
            >
                {months.map((month) => (
                    <button
                        key={month}
                        onClick={() => setSelectedMonth(month)}
                        className={`px-4 py-2 border rounded-full text-sm whitespace-nowrap transition ${selectedMonth === month
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700'
                            }`}
                    >
                        {month}
                    </button>
                ))}
            </motion.div>

            {/* Trip Cards (Scrollable Horizontally) */}
            <div className="py-2 px-2">
                <div className="overflow-x-auto md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-max md:w-full">



                        {(tripData[selectedMonth] || []).map((trip, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[340px] md:min-w-[360px] max-w-xs bg-white overflow-hidden flex-shrink-0 md:m-auto"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image
                                    src={trip.image}
                                    alt={trip.title}
                                    width={200}
                                    height={200}
                                    className="w-full h-[300px] rounded-lg object-cover"
                                />
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold">{trip.title}</h3>
                                    <p className="text-sm text-gray-600">{trip.location}</p>
                                    <p className="text-sm text-gray-600">{trip.date}</p>
                                    <p className="text-blue-600 font-semibold mt-2">{trip.price}</p>
                                    <Link
                                        href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the ${trip.title} trip in ${trip.date}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition"
                                    >
                                        Book on WhatsApp
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                        {(tripData[selectedMonth] || []).length === 0 && (
                            <p className="text-gray-500 col-span-full">No trips available for {selectedMonth}</p>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details
