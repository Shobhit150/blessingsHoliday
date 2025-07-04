'use client'
import { useState } from 'react'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption
} from '@headlessui/react'
import { FaLocationDot } from "react-icons/fa6";
const searchOptions = [
    'New York',
    'San Francisco',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Delhi',
    'Mumbai',
]
import { IoSearch } from "react-icons/io5";
export default function SearchOptions() {
    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('')

    const filtered =
        query === ''
            ? searchOptions
            : searchOptions.filter((city) =>
                city.toLowerCase().includes(query.toLowerCase())
            )

    return (
        <div className="w-full max-w-md">
            <Combobox value={selected} onChange={(value) => setSelected(value as string)}>
                <div className="relative w-full flex flex-col items-start text-xl">
                    <div className='text-sm  border border-white px-4 py-2 rounded-t-[10px] text-black bg-white'>
                        Trip Package
                    </div>
                    <div className='relative flex text-[10px] w-full rounded-b-[10px] rounded-r-[10px] bg-white text-black px-4 py-4 text-center'>
                        <div className='flex w-full items-center'>
                            <FaLocationDot size={20} />
                            <ComboboxInput
                                className="w-full outline-none px-2 py-2"
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Pick Best Suitable Package"
                            />
                        </div>
                        <div>
                        <IoSearch  size={32}/>
                        </div>

                    </div>

                    <ComboboxOptions className="absolute text-black z-10 w-full mt-[100px] max-h-60 overflow-y-auto">
                        {filtered.length === 0 && (
                            <div className="px-4 py-2 text-gray-500">No results</div>
                        )}
                        {filtered.map((city, idx) => (
                            <ComboboxOption
                                key={idx}
                                value={city}
                                className={({ active }) =>
                                    `px-4 py-2 cursor-pointer ${active ? 'bg-blue-500 text-white' : ''}`
                                }
                            >
                                {city}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </div>
            </Combobox>
        </div>
    )
}
