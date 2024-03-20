import React from 'react'
import Image from 'next/image'
import Link from "next/link";


export default function Header() {
  return (
      <div className='flex justify-center mt-6 mx-3 md:mx-0 bg-white sticky top-0 p-3'>
         <Link href={'/'}><Image
              src={"/logo_svg.svg"}
              width={500}
              height={500}
              alt={"Logo image" } /></Link> 
    </div>
  )
}
