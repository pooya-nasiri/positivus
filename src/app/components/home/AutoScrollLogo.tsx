import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image';
import logo1 from "@/app/public/companyLogo1.svg"
import logo2 from "@/app/public/companyLogo2.svg"
import logo3 from "@/app/public/companyLogo3.svg"
import logo4 from "@/app/public/companyLogo4.svg"
import logo5 from "@/app/public/companyLogo5.svg"
import logo6 from "@/app/public/companyLogo6.svg"
function AutoScrollLogo() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <Marquee direction='right' autoFill speed={35} className="flex items-center ">
        <Image src={logo1} alt='Logo' className='w-25  mx-5 p-0'/>
        <Image src={logo2} alt='Logo' className='w-25  mx-5 p-0'/>
        <Image src={logo3} alt='Logo' className='w-25  mx-5 p-0'/>
        <Image src={logo4} alt='Logo' className='w-25  mx-5 p-0'/>
        <Image src={logo5} alt='Logo' className='w-25  mx-5 p-0'/>
        <Image src={logo6} alt='Logo' className='w-25  mx-5 p-0'/>
      </Marquee>
      
      <Marquee direction='right' autoFill speed={35} delay={11.3} className="flex items-center sm:hidden">
        <Image src={logo1} alt='Logo' className='w-25  mx-5 p-0 sm:hidden'/>
        <Image src={logo2} alt='Logo' className='w-25  mx-5 p-0 sm:hidden'/>
        <Image src={logo3} alt='Logo' className='w-25  mx-5 p-0 sm:hidden'/>
        <Image src={logo4} alt='Logo' className='w-25  mx-5 p-0 sm:hidden'/>
        <Image src={logo5} alt='Logo' className='w-25  mx-5 p-0 sm:hidden'/>
        <Image src={logo6} alt='Logo' className='w-25  mx-5 p-0 sm:hidden'/>
      </Marquee>
    </section>
  )
}

export default AutoScrollLogo
