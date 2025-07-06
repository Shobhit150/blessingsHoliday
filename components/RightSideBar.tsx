import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RightSideBar = () => {
  return (
    <div className=" fixed right-0 bottom-[50vh] w-[60px] z-40 overflow-y-auto p-2 flex flex-col items-center gap-6">
      <Link
        href="https://www.instagram.com/Blessings_holiday_"
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
        href="https://wa.me/917838800808"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/WhatsApp.webp"
          alt="WhatsApp"
          width={38}
          height={38}
          className="hover:scale-110 transition"
        />
      </Link>
    </div>
  )
}

export default RightSideBar
