'use client'
import Image from 'next/image'
import { FaPhoneAlt, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import React, { useRef, useState } from 'react'

const steps = [
  {

    title: 'Choose Your Travel Destination',
    description: 'From a buffet of trip itineraries handcrafted by our travel experts.',
    bgImage: '/images/trip_step1.webp',
  },
  {

    title: 'Ask Queries & Book Your Trip!',
    description: 'Connect with us over a call, solve your queries and book your trip.',
    bgImage: '/images/trip_step2.webp',
  },
  {

    title: 'Ohai, Your Trip Day Has Arrived',
    description: 'Keep your adventure spirit high and pack your bags for a lifetime experience.',
    bgImage: '/images/trip_step2.webp',
  },
  {

    title: 'Share #InstaPerfect Memories...',
    description: 'Flaunt your memorable travel memories over social media with your dear ones.',
    bgImage: '/images/trip_step1.webp',
  }
]


const TripSteps = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    const cards = container?.querySelectorAll('.step-card')
    const target = cards?.[index] as HTMLElement
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      setCurrentIndex(index)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1)
  }

  const handleNext = () => {
    if (currentIndex < steps.length - 1) scrollToIndex(currentIndex + 1)
  }

  return (
    <div className="py-16 px-4 max-w-[1100] mx-auto">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">How To Plan Your Stress-Free Trip</h2>
        <div className="w-20 h-[2px] bg-black mx-auto mt-2" />
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-2 py-4 gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-2"
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="step-card snap-center relative max-w-[250px] md:max-w-none bg-cover bg-center rounded-xl flex flex-col justify-between text-center shadow-md flex-shrink-0 h-[300px] md:h-[350px]"
            style={{ backgroundImage: `url(${step.bgImage})` }}
          >
            <div className="absolute -top-2 -right-2 w-full h-full rounded-xl bg-gray-200 opacity-100 shadow-lg z-[-1]" />

            <div className="p-6 flex-1 flex flex-col justify-center items-center mb-10">
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>


          </div>
        ))}

      </div>

      {/* Arrows + Dots */}
      <div className="mt-6 md:hidden flex flex-col items-center justify-center gap-3">
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
            disabled={currentIndex === steps.length - 1}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-center text-sm text-gray-800">
        <p className="mb-2 font-medium">Call us or drop a Hi on WhatsApp at</p>
        <div className="flex justify-center gap-4 text-lg items-center text-blue-600 font-semibold">
          {/* Phone Link */}
          <a href="tel:+917838800808" className="flex items-center gap-2 hover:underline">
            <FaPhoneAlt />
            +91 7838800808
          </a>

          <span className="mx-2">|</span>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/917838800808?text=Hey%20there!%20👋%20I'm%20interested%20in%20knowing%20more%20about%20your%20upcoming%20trips%20✈️%20🌄%20Please%20share%20the%20details!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 hover:underline"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default TripSteps
