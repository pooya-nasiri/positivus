import React from 'react';
import Image from 'next/image';
import svg from '@/app/public/CAT.svg';
function CAT() {
  return (
    <section className='flex items-center '>
        <div className='bg-f3 rounded-3xl p-8 md:p-[clamp(2rem,4vw,3rem)]  sm:grid sm:grid-cols-2'>
      <div className='flex flex-col space-y-4 sm:flex-1/2'>
        <h2 className='font-black text-[clamp(1.5rem,8vw,2rem)] sm:text-[clamp(1rem,3vw,1.3rem)] md:text-[clamp(1.3rem,3vw,1.2rem)] lg:text-[clamp(1.7rem,3vw,2rem)] xl:text-[clamp(2rem,3vw,2.2rem)] 2xl:text-[2.3rem]'>
            Let’s make things happen
        </h2>
        <p className='text-[clamp(0.9rem,4.5vw,5rem)] sm:text-[clamp(0.6rem,1.5vw,0.7rem)] md:text-[clamp(0.7rem,1.5vw,1rem)] lg:text-[clamp(1rem,1.5vw,1.4rem)] xl:text-[1.4rem]'>
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
        </p>
        <a href='#' className='bg-f2 text-f3 p-5 text-[clamp(1rem,5vw,2rem)] sm:text-[clamp(0.5rem,1.3vw,0.8rem)] xl:text-[1rem] xl:p-5 sm:max-w-1/2 sm:p-4 rounded-xl text-center '>
            Get your free proposal
        </a>
      </div>
        </div>

      <div className='sm:w-[15rem] md:w-[clamp(16rem,30vw,20rem)] lg:w-[clamp(20rem,30vw,38rem)] xl:scale-113  absolute right-15 sm:flex sm:flex-1/2 hidden '>
        <Image src={svg} alt='svg' />
      </div>
    </section>
  )
}

export default CAT;
