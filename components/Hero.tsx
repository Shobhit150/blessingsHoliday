'use client'
import React, { useEffect, useRef } from 'react'

const videos = [
    "/videos/IMG_2500.mp4"
]
const Hero = () => {
    const videoRef = useRef<HTMLVideoElement[]>([])

    useEffect(() => {
        videoRef.current.forEach((video) => {
            if (video) video.playbackRate = 0.8
        });
    }, [])
    return (
        <div className='w-full h-[85vh] relative'>
            <div>
                {videos.map((src, idx) => (
                    <video
                        key={idx}
                        ref={(el) => (videoRef.current[idx] = el!)}
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover absolute animate-fade-in"
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-black/40 z-10" />

      
        <div className="relative z-20 flex items-center justify-center h-full text-white text-4xl font-bold">
            
        </div>

        </div>
    )
}

export default Hero