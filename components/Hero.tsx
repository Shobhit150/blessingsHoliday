'use client'
import React, { useEffect, useState } from 'react'
import SearchOptions from './SearchOptions'
import { AnimatePresence, motion } from 'framer-motion'



const rotatingWords = [
    'Food & Culture',
    'Diverse Landscape',
    'New Friendships'
]

const Hero = () => {

    const [index, setIndex] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingWords.length)
        }, 4000) // Change every 3s

        return () => clearInterval(interval)
    }, [])


    return (
        <div className='w-full h-[60vh] md:h-[75vh] relative'>
            <div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover absolute"
                >
                    <source src="/videos/output.mp4" type="video/mp4" />
                    <source src="/videos/output.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 flex items-center justify-center h-full text-white text-4xl font-bold flex-col text-center">
                <div className="text-4xl md:text-[65px] font-bold mb-6 flex flex-col justify-center w-full ">
                    <div>
                        Book to Experience
                    </div>

                    <div className="relative h-[40px] md:h-[70px] overflow-hidden text-nowrap">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                initial={{ y: 70, opacity: 1 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -70, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
                            >
                                {rotatingWords[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="w-full max-w-md md:max-w-2xl px-4">
                    <SearchOptions />
                </div>
            </div>

        </div>
    )
}

export default Hero