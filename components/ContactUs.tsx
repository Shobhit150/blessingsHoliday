'use client'
import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div
      id="ContactUs"
      className="relative overflow-hidden rounded-[30px] max-w-[1100px] mx-auto my-8 "
    >
      {/* ✅ Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Image
          src="/images/bg_contact.webp"
          alt="Background"
          fill
          className=" object-left md:object-obtain "
        />
      </div>


      {/* ✅ Foreground Content */}
      <div className="relative z-20 flex pt-6 pb-2 flex-col md:flex-row items-center justify-center px-4 text-black">
        {/* Left */}
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
          <Image
            src="/images/question.png"
            alt="Contact Us"
            width={200}
            height={200}
            className="h-[100px] w-[100px] md:h-[20vh] md:w-[20vh]"
          />
          <div className="text-xl md:text-4xl font-bold mt-4">
            Have Doubts? Talk To <br /> Our Travel Experts!
          </div>
          <p className="flex text-sm items-center justify-center md:mt-4 font-semibold">
            We would
            <span className="text-red-600 text-3xl mx-2">❤️</span>
            to craft a trip just for you.
          </p>
        </div>

        {/* Right */}
        <div className="md:w-1/2 w-full px-4 py-2 md:p-8 flex items-center justify-center">
          <form
            className="w-full text-sm md:text-md max-w-md space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const name = (form[0] as HTMLInputElement).value
              const phone = (form[1] as HTMLInputElement).value
              const email = (form[2] as HTMLInputElement).value
              const message = (form[3] as HTMLTextAreaElement).value

              const text = encodeURIComponent(
                `Hi, I'm ${name}.\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message || 'N/A'}`
              )

              const whatsappNumber = '917838800808'
              window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
            }}
          >
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full bg-white text-black px-4 py-2 rounded-full"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full bg-white text-black px-4 py-2 rounded-full"
              required
            />
            <input
              type="email"
              placeholder="Email Id*"
              className="w-full bg-white text-black px-4 py-2 rounded-full"
              required
            />
            <textarea
              rows={2}
              placeholder="Type your message here..."
              className="w-full bg-white text-black px-4 py-2 rounded-full"
            />
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="min-w-[250px] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Request a callback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
