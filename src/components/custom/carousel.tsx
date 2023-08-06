import Image from 'next/image'
import React from 'react'

export default function Carousel() {
  return (
    <div className='flex items-center flex-row justify-evenly gap-2 w-full h-fit'>
        <Image width={100} height={50} alt="Java" src='/java.png'/>
        <Image width={100} height={50} alt="Java" src='/spring.png'/>
        <Image width={100} height={50} alt="Java" src='/reactjs.png'/>
        <Image width={100} height={50} alt="Java" src='/angular.png'/>
    </div>
  )
}
