'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption
} from '@headlessui/react'
import { FaLocationDot } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import { trips } from '@/lib/tripData'

export default function SearchOptions() {
    const router = useRouter()
    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('')

    // Get all unique titles
    const allTitles = useMemo(() => {
        return [...new Set(trips.map(trip => trip.title))]
    }, [])

    const filtered =
        query === ''
            ? allTitles
            : allTitles.filter((title) =>
                title.toLowerCase().includes(query.toLowerCase())
            )

    // When an item is selected
    const handleSelect = (title: string) => {
        setSelected(title)

        // Get corresponding slug
        const trip = trips.find(t => t.title === title)
        if (trip) {
            router.push(`/trips/${trip.slug}`)
        }
    }

    return (
        <div>
            <Combobox value={selected} onChange={handleSelect}>
                <div className="relative w-full flex flex-col items-start text-xl">
                    
                    <div className='relative flex items-center justify-center text-[10px] md:text-[16px] w-full   text-black px-4 py-4 text-center'>
                        <div className='flex w-full items-center justify-center '>
                            
                            <ComboboxInput
                                className="w-full outline-none px-4 py-4 bg-white/40 placeholder:text-white"
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Pick Best Suitable Package"
                                displayValue={() => selected}
                            />
                        </div>
                        <div className=' px-6 py-4 bg-orange-600 text-white'>
                            SEARCH
                        </div>
                    </div>

                    <ComboboxOptions className="absolute text-black z-10 w-full mt-[100px] max-h-60 overflow-y-auto bg-white shadow-lg rounded-md">
                        {filtered.length === 0 ? (
                            <div className="px-4 py-2 text-gray-500">No results</div>
                        ) : (
                            filtered.map((title, idx) => (
                                <ComboboxOption
                                    key={idx}
                                    value={title}
                                    className={({ active }) =>
                                        `px-4 py-2 cursor-pointer ${active ? 'bg-blue-500 text-white' : ''}`
                                    }
                                >
                                    {title}
                                </ComboboxOption>
                            ))
                        )}
                    </ComboboxOptions>
                </div>
            </Combobox>
        </div>
    )
}
