'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption
} from '@headlessui/react'
import { trips } from '@/lib/tripData'

export default function SearchOptions() {
  const router = useRouter()
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const allTitles = useMemo(() => {
    return [...new Set(trips.map((trip) => trip.title))]
  }, [])

  const filtered =
    query === ''
      ? allTitles
      : allTitles.filter((title) =>
          title.toLowerCase().includes(query.toLowerCase())
        )

  const handleSelect = (title: string) => {
    setSelected(title)
    const trip = trips.find((t) => t.title === title)
    if (trip) {
      router.push(`/trips/${trip.slug}`)
    }
  }

  return (
    <Combobox value={selected} onChange={handleSelect}>
      <div className="relative w-full flex flex-col items-start text-xl">
        {/* Input + Search */}
        <div className="relative flex items-center justify-center w-full text-[10px] md:text-[16px] text-black">
          <div className="flex w-full items-center justify-center">
            <ComboboxInput
              className="w-full outline-none px-4 py-4 bg-white/40 placeholder:text-white text-white"
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 150)} // small delay for option click
              placeholder="Pick Best Suitable Package"
              displayValue={() => selected}
            />
          </div>
          <div className="px-6 py-4 bg-orange-600 text-white">SEARCH</div>
        </div>

        {/* Options dropdown */}
        {isFocused && (
          <ComboboxOptions className="absolute text-black z-10 w-full mt-[100px] max-h-60 overflow-y-auto bg-white shadow-lg rounded-md">
            {filtered.length === 0 ? (
              <div className="px-4 py-2 text-gray-500">No results</div>
            ) : (
              filtered.map((title, idx) => (
                <ComboboxOption
                  key={idx}
                  value={title}
                  className={({ active }) =>
                    `px-4 py-2 cursor-pointer ${
                      active ? 'bg-blue-500 text-white' : ''
                    }`
                  }
                >
                  {title}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
