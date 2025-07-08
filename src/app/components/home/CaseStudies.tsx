import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import Marquee from 'react-fast-marquee';
function CaseStudies() {
  return (
    <section className='flex flex-col space-y-15'>
        {/* Titile */}
      <div className='text-center sm:flex sm:gap-6 sm:text-left sm:items-center '>
        <span className='bg-f1 font-bold text-2xl p-0.5 sm:p-2 sm:text-[1rem] lg:text-2xl'>
            Case Studies
        </span>
        <p className='mt-3.5 text-[clamp(0.7rem,3.3vw,50rem)] sm:w-1/2 sm:m-0 sm:text-[clamp(0.6rem,1.5vw,0.7rem)] md:text-[clamp(0.7rem,1.5vw,1rem)] lg:text-[clamp(1rem,1.5vw,2rem)]'>
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div  className=' overflow-x-scroll  xl:py-30 snap-x flex sm:bg-f2 sm:rounded-3xl  sm:w-full gap-15 sm:p-15 xl:px-45  '>

        <div className=' bg-f2 min-w-[265px] snap-start p-5 space-y-4 rounded-3xl sm:rounded-sm sm:border-r-2 sm:border-f3 sm:w-1/2 sm:py-0'>
            <p className='text-f3 text-[0.9rem] sm:text-[0.9rem]'>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a className='text-f1 flex items-center gap-1.5'>
                Learn More
                <MdArrowOutward className='size-7 rotate-18'/>
            </a>
            </div>

        <div className=' bg-f2 min-w-[265px]  p-5 space-y-4 rounded-3xl sm:rounded-sm sm:border-r-2 sm:border-f3 sm:w-1/2 sm:py-0'>
            <p className='text-f3 text-[0.9rem] sm:text-[0.9rem]'>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a className='text-f1 flex items-center gap-1.5'>
                Learn More
                <MdArrowOutward className='size-7 rotate-18'/>
            </a>
            </div>

        <div className=' bg-f2 min-w-[265px]  p-5 space-y-4 rounded-3xl sm:rounded-sm sm:border-r-2 sm:border-f3 sm:w-1/2 sm:py-0'>
            <p className='text-f3 text-[0.9rem] sm:text-[0.9rem]'>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a className='text-f1 flex items-center gap-1.5'>
                Learn More
                <MdArrowOutward className='size-7 rotate-18'/>
            </a>
            </div>
        

      </div>
    </section>
  )
}

export default CaseStudies
