import React from 'react'
import Image from 'next/image'


export default function Header() {
  return (
      <div className='flex justify-center mt-6 mx-3 md:mx-0'>
          <Image
              src={"/logo_svg.svg"}
              width={500}
              height={500}
              alt={"Logo image" } />
    </div>
  )
}
