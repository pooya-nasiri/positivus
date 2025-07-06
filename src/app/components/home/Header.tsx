import React from 'react';
import Image from 'next/image';
import headerLogo from "@/app/public/headerLogo.svg"
function Header() {
  return (
    <header className='sm:grid sm:grid-cols-2 items-center justify-between xl:flex'>
        <section className='space-y-2 xl:flex-1/2'>
            <h1 className=' font-black text-[clamp(1rem,10vw,3rem)] sm:text-[clamp(1rem,5vw,5rem)] xl:text-[clamp(1rem,15vw,6rem)]'>
                Navigating the digital landscape for success
            </h1>
            <Image src={headerLogo}alt='Logo' className='sm:hidden'/>
            <p className='text-[clamp(1rem,1.5vw,10rem)] sm:text-[clamp(0.9rem,1vw,5rem)] md:text-[clamp(1.1rem,1vw,5rem)] lg:text-[clamp(1.2rem,1vw,5rem)] xl:text-3xl font-light'>
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button  className='bg-f2 w-full py-[clamp(1rem,5vw,5rem)] text-f3 rounded-xl sm:p-2.5 sm:w-fit xl:py-5 xl:text-xl xl:px-5 mt-1.5 cursor-pointer'>Book a consultation</button>
        </section>
        {/* Tablet and more device */}
        <section>
            <Image src={headerLogo} alt='Logo' className='hidden sm:flex size-auto xl:flex-1/2'/>
        </section>
    </header>
  )
}

export default Header
