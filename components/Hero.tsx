'use client'
import React, { useEffect, useRef, useState } from 'react'
import SearchOptions from './SearchOptions'
import { AnimatePresence, motion } from 'framer-motion'

const videos = [
    "/videos/IMG_2500.mp4"
]

const rotatingWords = [
    'Food & Culture',
    'Diverse Landscape',
    'New Friendships'
]

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement[]>([])
    const [yOffset, setYOffset] = useState(40)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setYOffset(window.innerWidth >= 768 ? 70 : 40)
        }

        handleResize() // set on mount
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingWords.length)
        }, 3000) // Change every 3s

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        videoRef.current.forEach((video) => {
            if (video) video.playbackRate = 0.8
        });
    }, [])
    return (
        <div className='w-full h-[60vh] md:h-[85vh] relative'>
            <div>
                {videos.map((src, idx) => (
                    <video
                        key={idx}
                        ref={(el) => {
                            if (el) {
                                el.playbackRate = 0.8
                                videoRef.current[idx] = el
                            }
                        }}
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        disableRemotePlayback
                        className="w-full h-full object-cover absolute"
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-black/40 z-10" />


            <div className="relative z-20 flex items-center justify-center h-full text-white text-4xl font-bold flex-col text-center">
                <div className="text-4xl md:text-[65px] font-bold mb-6 flex flex-col justify-center w-full ">
                    <div>
                        Book to Experience
                    </div>

                    <div className="relative h-[40px] md:h-[70px] overflow-hidden text-nowrap">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                initial={{ y: yOffset, opacity: 1 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -yOffset, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
                            >
                                {rotatingWords[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="w-full max-w-md px-4">
                    <SearchOptions />
                </div>
            </div>

        </div>
    )
}

export default Hero