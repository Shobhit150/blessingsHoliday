'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='flex flex-row justify-between items-center px-8 py-[10px] border-b border-gray-200 relative'>
        <div>
            <Image src="/logo.png" alt="logo" width={20} height={20} />
        </div>

        <div className='hidden md:flex flex-row gap-4'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div className='md:hidden '>
            <IoMdMenu size={25} className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            <AnimatePresence>
            {isOpen && (
                <motion.div className='absolute top-0 left-0 bg-white border w-full z-50 rounded-b-lg'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.3 }}
                >
                    <IoMdClose size={28} className='cursor-pointer absolute top-4 right-8' onClick={() => setIsOpen(false)} />
                    <div className='flex flex-col gap-4 items-center justify-center py-4 mt-10'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>

    </nav>
  )
}

export default Navbar