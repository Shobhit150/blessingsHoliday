// app/[trips]/[slug]/page.tsx
'use client'
import { trips } from '@/lib/tripData'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  FaClock, FaMapMarkerAlt, FaHiking, FaCampground,
  FaUtensils, FaBus, FaFire, FaWhatsapp, FaFileDownload,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa'

const whatsappNumber = '917838800808'

const TripDetail = () => {
  const params = useParams()
  const slug = params?.slug as string
  const trip = trips.find(t => t.slug === slug)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % (trip?.image.length || 1))
    }, 5000)
  }

  useEffect(() => {
    if (trip?.image?.length) {
      startSlider()
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [trip?.image])

  if (!trip) return notFound()

  const images = Array.isArray(trip.image) ? trip.image : [trip.image]

  const handleArrowClick = (direction: 'left' | 'right') => {
    setCurrentImageIndex(prev => {
      const newIndex =
        direction === 'left'
          ? (prev - 1 + images.length) % images.length
          : (prev + 1) % images.length
      return newIndex
    })
    startSlider()
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-orange-700">{trip.title}</h1>

      {/* Image Slider */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Arrows & Dots */}
      <div className="flex justify-center items-center gap-6 mt-4">
        <button
          onClick={() => handleArrowClick('left')}
          className="bg-white/80 p-2 rounded-full shadow hover:scale-110 transition"
        >
          <FaChevronLeft />
        </button>

        <div className="flex gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition duration-300 ${idx === currentImageIndex ? 'bg-black' : 'bg-gray-400/50'}`}
            />
          ))}
        </div>

        <button
          onClick={() => handleArrowClick('right')}
          className="bg-white/80 p-2 rounded-full shadow hover:scale-110 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* CTA */}
      <div className="text-center mt-4 space-y-4">
      <p className="text-xl font-semibold">{trip.discription}</p>


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

      {/* Always show price */}
      <Section title="💰 Price Summary (per person)">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <PriceBox label="Double/Triple Sharing" value={trip.price} />
        </div>
      </Section>

      {/* If not disclosed, hide rest */}
      {!trip.disclosed ? null : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base font-medium">
            <TripInfo icon={<FaClock />} label={trip.duration} />
            <TripInfo icon={<FaMapMarkerAlt />} label={`Pickup: ${trip.pickup}`} />
            <TripInfo icon={<FaHiking />} label={trip.category} />
            {trip.tags.includes('Stay') && <TripInfo icon={<FaCampground />} label="Stay Included" />}
            {trip.tags.includes('Bonfire') && <TripInfo icon={<FaFire />} label="Bonfire" />}
            {trip.tags.includes('Transfers') && <TripInfo icon={<FaBus />} label="Transfers" />}
            {trip.tags.includes('Meals') && <TripInfo icon={<FaUtensils />} label="Meals Included" />}
          </div>

          <Section title="📝 Trip Overview">
            <p className="text-gray-700 leading-7">{trip.overview}</p>
          </Section>

          <Section title="🗓️ Day-wise Itinerary">
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {trip.itinerary.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Section>

          <Section title="✅ What's Included">
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {trip.inclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="❌ Exclusions">
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {trip.exclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="📅 Upcoming Batches">
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {trip.batches.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </Section>

          <Section title="🎒 Things to Pack">
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {trip.thingsToPack.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        </>
      )}
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