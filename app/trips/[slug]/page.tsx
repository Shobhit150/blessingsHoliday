'use client'
import { trips } from '@/lib/tripData'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaClock, FaMapMarkerAlt, FaHiking, FaCampground,
  FaUtensils, FaBus, FaFire, FaWhatsapp, FaFileDownload
} from 'react-icons/fa'

const whatsappNumber = '917838800808'

const TripDetail = () => {
  const params = useParams()
  const slug = params?.slug as string
  const trip = trips.find(t => t.slug === slug)

  if (!trip) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-orange-700">{trip.title}</h1>

      {/* Banner */}
      <Image
        src={trip.image}
        alt={trip.title}
        width={1200}
        height={500}
        className="rounded-xl w-full h-[400px] md:h-[500px] object-cover shadow-lg"
      />

      {/* CTA */}
      <div className="text-center mt-4 space-y-4">
        <p className="text-xl font-semibold">🎒 Ready to make memories?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the ${trip.title} trip on ${trip.date}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition"
          >
            <FaWhatsapp /> Book Now on WhatsApp
          </Link>

          <Link
            href={`https://wa.me/${whatsappNumber}?text=Hi, please share the brochure for ${trip.title} trip.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow hover:bg-orange-600 transition"
          >
            <FaFileDownload /> Download Brochure
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base font-medium">
        <TripInfo icon={<FaClock />} label={trip.duration} />
        <TripInfo icon={<FaMapMarkerAlt />} label={`Pickup: ${trip.pickup}`} />
        <TripInfo icon={<FaHiking />} label={trip.category} />
        {trip.tags.includes('Stay') && <TripInfo icon={<FaCampground />} label="Stay Included" />}
        {trip.tags.includes('Bonfire') && <TripInfo icon={<FaFire />} label="Bonfire" />}
        {trip.tags.includes('Transfers') && <TripInfo icon={<FaBus />} label="Transfers" />}
        {trip.tags.includes('Meals') && <TripInfo icon={<FaUtensils />} label="Meals Included" />}
      </div>

      {/* Overview */}
      <Section title="📝 Trip Overview">
        <p className="text-gray-700 leading-7">{trip.overview}</p>
      </Section>

      {/* Itinerary */}
      <Section title="🗓️ Day-wise Itinerary">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {trip.itinerary.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </Section>

      {/* Inclusions */}
      <Section title="✅ What's Included">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {trip.inclusions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Exclusions */}
      <Section title="❌ Exclusions">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {trip.exclusions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Batches */}
      <Section title="📅 Upcoming Batches">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {trip.batches.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Section>

      {/* Price Summary */}
      <Section title="💰 Price Summary (per person)">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <PriceBox label="Double/Triple Sharing" value={trip.price} />
          
        </div>
      </Section>

      {/* Packing */}
      <Section title="🎒 Things to Pack">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {trip.thingsToPack.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>
    </div>
  )
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-2xl font-bold mb-3 text-orange-700">{title}</h2>
    {children}
  </div>
)

const TripInfo = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg shadow-sm">
    <span className="text-orange-600">{icon}</span>
    <span>{label}</span>
  </div>
)

const PriceBox = ({ label, value }: { label: string; value: string }) => (
  <div className="border p-4 rounded-md bg-blue-50 shadow">
    <div className="text-md font-medium">{label}</div>
    <div className="text-lg font-bold text-blue-700">{value}</div>
  </div>
)

export default TripDetail
