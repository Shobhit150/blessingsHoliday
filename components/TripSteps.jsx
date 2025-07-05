'use client'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

const steps = [
  {
    icon: '/icons/location_pin.svg',
    title: 'Choose Your Travel Destination',
    description: 'From a buffet of trip itineraries handcrafted by our travel experts.'
  },
  {
    icon: '/icons/msg_query.svg',
    title: 'Ask Queries & Book Your Trip!',
    description: 'Connect with us over a call, solve your queries and book your trip.'
  },
  {
    icon: '/icons/travling_van.svg',
    title: 'Ohai, Your Trip Day Has Arrived',
    description: 'Keep your adventure spirit high and pack your bags for a lifetime experience.'
  },
  {
    icon: '/icons/mobile.svg',
    title: 'Share #InstaPerfect Memories...',
    description: 'Flaunt your memorable travel memories over social media with your dear ones.'
  }
]

const TripSteps = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">How To Plan Your Stress-Free Trip</h2>
        <div className="w-20 h-[2px] bg-black mx-auto mt-2" />
      </div>

      {/* Cards Wrapper */}
      <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto no-scrollbar px-2">
        {steps.map((step, i) => (
          <div
            key={i}
            className="min-w-[250px] md:min-w-0 bg-gray-100 rounded-xl p-6 flex flex-col items-center text-center shadow-md flex-shrink-0"
          >
            <Image src={step.icon} alt={step.title} width={50} height={50} className="mb-4" />
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-12 text-center text-sm text-gray-800">
        <p className="mb-2 font-medium">Call us or drop a Hi on WhatsApp at</p>
        <div className="flex justify-center gap-4 text-lg items-center text-blue-600 font-semibold">
          <FaPhoneAlt /> +91 8076602635
          <span className="mx-2">|</span>
          <FaWhatsapp className="text-green-600" /> WhatsApp
        </div>
      </div>
    </div>
  )
}

export default TripSteps
