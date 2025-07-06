import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RightSideBar = () => {
  return (
    <div className=" fixed right-0 bottom-[100px] w-[60px] z-40 overflow-y-auto p-2 flex flex-col items-center gap-6">
      <Link
        href="https://www.instagram.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/instagram.webp"
          alt="Instagram"
          width={30}
          height={30}
          className="hover:scale-110 transition"
        />
      </Link>

      <Link
        href="https://wa.me/919140772033"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/WhatsApp.webp"
          alt="WhatsApp"
          width={35}
          height={35}
          className="hover:scale-110 transition"
        />
      </Link>
    </div>
  )
}

export default RightSideBar
