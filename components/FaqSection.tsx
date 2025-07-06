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
    question: 'What adventure activities to enjoy in Himachal Pradesh?',
    answer:
      'You can enjoy trekking, paragliding, skiing, river rafting, and mountain biking, especially in areas like Manali and Kullu.',
  },
  {
    question: 'What are the local delicacies to try in Himachal Pradesh?',
    answer:
      'Try dishes like Siddu, Chana Madra, Babru, Dham, and Tudkiya Bhath for a true Himachali taste.',
  },
  {
    question: 'What shopping items to shop for in Himachal?',
    answer:
      'Woollen shawls, Tibetan handicrafts, wooden artifacts, and handmade jewelry are popular buys.',
  },
  {
    question: 'What to pack for a trip to Himachal?',
    answer:
      'Pack warm clothes, trekking shoes, medicines, sunscreen, and ID proofs. Include rain gear if visiting during monsoon.',
  },
  {
    question: 'How is the weather in Himachal?',
    answer:
      'The weather ranges from pleasant in summers to snowy and freezing in winters, depending on altitude and season.',
  },
  {
    question: 'What are the popular dishes to try in Himachal?',
    answer:
      'Try dishes like Dham, Bhey, Chana Madra, Aktori, and Trout fish.',
  },
  {
    question: 'What is the local mode of transportation in Himachal Pradesh?',
    answer:
      'Local buses, shared taxis, private cabs, and auto-rickshaws are commonly used.',
  },
  {
    question: 'What makes Himachal Pradesh a popular tourist destination?',
    answer:
      'Its serene landscapes, adventure sports, spiritual spots, and colonial towns make it ideal for all types of travelers.',
  },
  {
    question: 'Are there any spiritual destinations in Himachal Pradesh?',
    answer:
      'Yes, visit places like Manikaran, Tabo Monastery, Bhimakali Temple, and Jwala Devi Temple.',
  },
  {
    question: 'What is unique about Tibetan Monasteries in Himachal?',
    answer:
      'They offer vibrant culture, peaceful surroundings, prayer wheels, and ancient Buddhist teachings, especially in Dharamshala and Spiti.',
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
