'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'How do I book a trip with Blessings Holiday?',
    answer:
      'Booking is super simple! Just click on the "Book on WhatsApp" button on your desired trip, and our team will assist you instantly.',
  },
  {
    question: 'Are your trips suitable for solo travelers or only groups?',
    answer:
      'Our trips are perfect for both solo travelers and groups. Many of our clients come solo and leave with lifelong friends.',
  },
  {
    question: 'What kind of accommodation is provided during trips?',
    answer:
      'We provide clean, comfortable stays ranging from hotels to guesthouses or camps, depending on the destination and weather.',
  },
  {
    question: 'What does the trip cost include?',
    answer:
      'Our packages typically include transportation, accommodation, meals (as specified), trip captain, and fun group activities. Inclusions vary by trip and are listed in each itinerary.',
  },
  {
    question: 'Where is the pickup and drop location for group trips?',
    answer:
      'Most weekend trips have a Delhi-to-Delhi pickup and drop facility. Details are mentioned on each trip page.',
  },
  {
    question: 'How can I get the full itinerary and packing list?',
    answer:
      'Each trip detail page includes the itinerary, inclusions, exclusions, and a list of things to pack.',
  },
  {
    question: 'What if I’ve never traveled in a group before?',
    answer:
      'That’s totally okay! Many of our travelers are first-timers. Our trip captains ensure everyone feels included and has a great time.',
  },
  {
    question: 'Is the Jungle Safari in Jim Corbett included in the package?',
    answer:
      'Yes, the jungle ride is usually included in the Jim Corbett itinerary. Refer to the trip details for exact coverage.',
  },
  {
    question: 'How do I contact support quickly?',
    answer:
      'You can message us directly on WhatsApp at +91 78388 00808 for instant support and guidance.',
  },
  {
    question: 'What’s your refund or cancellation policy?',
    answer:
      'Cancellations made well in advance are usually eligible for partial refunds depending on notice period. Reach out on WhatsApp for exact policy details.',
  },
]


export default function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto px-4 mt-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="space-y-2 pb-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border border-b last:border-b border-gray-200 rounded-lg"
          >
            <AccordionTrigger className=" px-4 py-3 font-medium text-left">
              {faq.question}
            </AccordionTrigger>

            <AccordionContent
              className="px-4 pb-4 text-gray-600 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
