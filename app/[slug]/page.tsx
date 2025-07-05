// app/trips/[slug]/page.tsx

import { trips } from '@/lib/tripData'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import {
  FaClock,
  FaMapMarkerAlt,
  FaHiking,
  FaCampground,
  FaUtensils,
  FaBus,
  FaFire
} from 'react-icons/fa'

// ✅ Server Component: receives `params` directly from Next.js
export default function TripDetail({ params }: { params: { slug: string } }) {
  const trip = trips.find((t) => t.slug === params.slug)

  if (!trip) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-center">{trip.title}</h1>

      <Image
        src={trip.image}
        alt={trip.title}
        width={1200}
        height={500}
        className="rounded-lg w-full h-[300px] object-cover"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
        <Info icon={<FaClock />} label={`Duration: ${trip.duration}`} />
        <Info icon={<FaMapMarkerAlt />} label={`Pickup: ${trip.pickup}`} />
        <Info icon={<FaHiking />} label={`Category: ${trip.category}`} />
        {trip.tags.includes('Stay') && <Info icon={<FaCampground />} label="Stay Included" />}
        {trip.tags.includes('Bonfire') && <Info icon={<FaFire />} label="Bonfire" />}
        {trip.tags.includes('Transfers') && <Info icon={<FaBus />} label="Transfers" />}
        {trip.tags.includes('Meals') && <Info icon={<FaUtensils />} label="Meals Included" />}
      </div>

      <Section title="Overview">
        <p className="text-gray-700 leading-6">{trip.overview}</p>
      </Section>

      <Section title="Itinerary">
        <List items={trip.itinerary} />
      </Section>

      <Section title="Inclusions">
        <List items={trip.inclusions} />
      </Section>

      <Section title="Exclusions">
        <List items={trip.exclusions} />
      </Section>

      <Section title="Available Batches">
        <List items={trip.batches} />
      </Section>

      <Section title="Price Summary">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">Quad Sharing: {trip.priceSummary.quad}</div>
          <div className="p-4 border rounded-md">Triple Sharing: {trip.priceSummary.triple}</div>
          <div className="p-4 border rounded-md">Double Sharing: {trip.priceSummary.double}</div>
        </div>
      </Section>

      <Section title="Things to Pack">
        <List items={trip.thingsToPack} />
      </Section>
    </div>
  )
}

// ✅ Reusable Components

const Info = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2">{icon} <span>{label}</span></div>
)

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    {children}
  </section>
)

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-1">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)
