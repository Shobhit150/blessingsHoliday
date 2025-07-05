'use client'

import { trips } from '@/lib/tripData'
import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import { FaClock, FaMapMarkerAlt, FaHiking, FaCampground, FaUtensils, FaBus, FaFire } from 'react-icons/fa'

const TripDetail = ({ params }: { params: { slug: string } }) => {
  const trip = trips.find((t) => t.slug === params.slug)
  if (!trip) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-center">{trip.title}</h1>

      <Image src={trip.image} alt={trip.title} width={1200} height={500} className="rounded-lg w-full h-[300px] object-cover" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <FaClock /> <span>Duration: {trip.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt /> <span>Pickup: {trip.pickup}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaHiking /> <span>Category: {trip.category}</span>
        </div>
        {trip.tags.includes('Stay') && (
          <div className="flex items-center gap-2">
            <FaCampground /> <span>Stay Included</span>
          </div>
        )}
        {trip.tags.includes('Bonfire') && (
          <div className="flex items-center gap-2">
            <FaFire /> <span>Bonfire</span>
          </div>
        )}
        {trip.tags.includes('Transfers') && (
          <div className="flex items-center gap-2">
            <FaBus /> <span>Transfers</span>
          </div>
        )}
        {trip.tags.includes('Meals') && (
          <div className="flex items-center gap-2">
            <FaUtensils /> <span>Meals Included</span>
          </div>
        )}
      </div>

      {/* Overview */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700 leading-6">{trip.overview}</p>
      </div>

      {/* Itinerary */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Itinerary</h2>
        <ul className="list-disc pl-6 space-y-1">
          {trip.itinerary.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Inclusions */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Inclusions</h2>
        <ul className="list-disc pl-6 space-y-1">
          {trip.inclusions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Exclusions */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Exclusions</h2>
        <ul className="list-disc pl-6 space-y-1">
          {trip.exclusions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Batches */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Available Batches</h2>
        <ul className="list-disc pl-6 space-y-1">
          {trip.batches.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      {/* Price Summary */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Price Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">Quad Sharing: {trip.priceSummary.quad}</div>
          <div className="p-4 border rounded-md">Triple Sharing: {trip.priceSummary.triple}</div>
          <div className="p-4 border rounded-md">Double Sharing: {trip.priceSummary.double}</div>
        </div>
      </div>

      {/* Things to Pack */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Things to Pack</h2>
        <ul className="list-disc pl-6 space-y-1">
          {trip.thingsToPack.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TripDetail
