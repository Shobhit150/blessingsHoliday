import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
    return (
        <div className="relative h-[70vh] text-black border border-black">

            <div className='absolute opacity-20 h-full w-full border ml-[50vh]'><Image className='w-full h-full' src={'/images/image.webp'} width={1000} height={1000} alt='world map' /></div>
            <div></div>

            <div className='relative z-10 flex flex-row h-full justify-center items-center max-w-[1150px] mx-auto px-4 '>
                <div className='w-1/2 flex flex-col space-y-4'>
                    <h3 className='text-7xl font-extrabold'>
                        Discover the World's Hidden Wonders
                    </h3>
                    <p>
                        Data about trip
                    </p>
                    <b>
                        Download next trip brochure
                    </b>
                </div>
                <div className='w-1/2 flex justify-center flex-row items-center'>
                    <Image className=' h-[50vh] rounded-2xl' src={'/trips_image/manali.jpg'} width={400} height={300} alt='manali' />
                    <div className=' flex flex-col border'>
                        <div className="relative h-[20vh] w-[200px]">
                            <Image
                                src="/trips_image/manali.jpg"
                                alt="manali"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative h-[20vh] w-[200px]">
                            <Image
                                src="/trips_image/manali.jpg"
                                alt="manali"
                                fill
                                className="object-contain"
                            />
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2
