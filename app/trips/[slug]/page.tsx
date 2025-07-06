'use client'
import { trips } from '@/lib/tripData'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import {
  FaClock, FaMapMarkerAlt, FaHiking, FaCampground,
  FaUtensils, FaBus, FaFire
} from 'react-icons/fa'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const whatsappNumber = '919140772033'

const TripDetail = () => {
  const params = useParams()
  const slug = params?.slug as string
  const trip = trips.find(t => t.slug === slug)

  if (!trip) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center">{trip.title}</h1>

      {/* Banner Image */}
      <Image
        src={trip.image}
        alt={trip.title}
        width={1200}
        height={500}
        className="rounded-xl w-full h-[400px] md:h-[500px] object-cover shadow-md"
      />

      <div className="text-center mt-10 space-y-3">
        <p className="text-lg font-semibold">Ready to join the adventure?</p>
        <div className=' flex flex-row gap-10 items-center justify-center'>
          <Link
            href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the ${trip.title} trip happening on ${trip.date}. Can you help me book it?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 text-lg font-bold shadow hover:bg-orange-500 transition"
          >
            📲 Book Now on WhatsApp
          </Link>

          <Link
            href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the ${trip.title} trip happening on ${trip.date}. Can you help me book it?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-6 py-3 text-lg font-bold shadow hover:bg-orange-500 transition"
          >
            Download Brocher
          </Link>
        </div>

      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base font-medium">
        <div className="flex items-center gap-2">
          <FaClock /> <span>{trip.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt /> <span>Pickup: {trip.pickup}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaHiking /> <span>{trip.category}</span>
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
      <Section title="Overview">
        <p className="leading-6 text-gray-700">{trip.overview}</p>
      </Section>

      {/* Itinerary */}
      <Section title="Itinerary">
        <ul className="list-disc pl-6 space-y-1">
          {trip.itinerary.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </Section>

      {/* Inclusions */}
      <Section title="Inclusions">
        <ul className="list-disc pl-6 space-y-1">
          {trip.inclusions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Exclusions */}
      <Section title="Exclusions">
        <ul className="list-disc pl-6 space-y-1">
          {trip.exclusions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Batches */}
      <Section title="Available Batches">
        <ul className="list-disc pl-6 space-y-1">
          {trip.batches.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Section>

      {/* Price Summary */}
      <Section title="Price Summary">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg bg-blue-50">Quad Sharing: <b>{trip.priceSummary.quad}</b></div>
          <div className="p-4 border rounded-lg bg-blue-50">Triple Sharing: <b>{trip.priceSummary.triple}</b></div>
          <div className="p-4 border rounded-lg bg-blue-50">Double Sharing: <b>{trip.priceSummary.double}</b></div>
        </div>
      </Section>

      {/* Things to Pack */}
      <Section title="Things to Pack">
        <ul className="list-disc pl-6 space-y-1">
          {trip.thingsToPack.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* CTA */}

    </div>
  )
}

// Section Component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
)

export default TripDetail
