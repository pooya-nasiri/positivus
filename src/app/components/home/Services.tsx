import React from 'react'
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import svg1 from '@/app/public/services1.svg';
import svg2 from '@/app/public/services2.svg';
import svg3 from '@/app/public/services3.svg';
import svg4 from '@/app/public/services4.svg';
import svg5 from '@/app/public/services5.svg';
import svg6 from '@/app/public/services6.svg';

function Services() {
  return (
    <section>

      <div className='text-center sm:flex sm:items-center sm:justify-start sm:text-left gap-3 sm:w-[75%] mb-10'>
        <span className='bg-f1 font-bold text-2xl p-0.5'>Services</span>
        <p className='text-[clamp(0.5rem,3.5vw,80rem)] mt-5 sm:mt-0 sm:font-light sm:text-[13px] md:text-[18.5px] lg:text-[26.9px]'>
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* Services */}
      <div className='flex flex-col relative items-stretch  justify-center sm:grid sm:grid-cols-2 sm:gap-10'>

        <div className='bg-f3 w-full  p-8 relative border-1 border-b-8 rounded-3xl mb-3'>
            <div className='absolute text-wrap max-w-[250px] '>
                <mark className='bg-f1 font-black rounded-lg p-0.5 text-[clamp(1.2rem,6vw,3rem)] sm:text-[clamp(1rem,3vw,5rem)] md:text-[clamp(1rem,2.5vw,2rem)]'>Search engine optimization</mark>
            </div>

            <div className='flex relative items-end justify-between  md:gap-10 md:mt-10 mt-[clamp(0.5rem,50vw,5.2rem)]'>
                <a href='#' className=' bottom-0 flex items-center'>
                    <p className='bg-f2 text-f1 p-2 rounded-4xl text-[clamp(1rem,7vw,2rem)] md:text-[clamp(1.125rem,2vw,50rem)]'><MdArrowOutward/></p>
                    <p className='hidden md:flex md:ml-5 lg::text-2xl md:text-[clamp(0.6rem,1.5vw,280rem)]'>Learn more</p>
                </a>
                <Image src={svg1} alt='avg' className='size-6/10 sm:size-6/10 md:w-[clamp(1rem,20vw,45rem)]'/>
            </div>
        </div>

        <div className='bg-f1 w-full  p-8 relative border-1 border-b-8 rounded-3xl mb-3'>
            <div className='absolute text-wrap max-w-[250px] '>
                <mark className='bg-f3 font-black rounded-lg p-0.5 text-[clamp(1.2rem,6vw,3rem)] sm:text-[clamp(1rem,3vw,5rem)] md:text-[clamp(1rem,2.5vw,2rem)]'>Search engine optimization</mark>
            </div>

            <div className='flex relative items-end justify-between  md:gap-10 md:mt-10 mt-[clamp(0.5rem,50vw,5.2rem)]'>
                <a href='#' className=' bottom-0 flex items-center'>
                    <p className='bg-f2 text-f1 p-2 rounded-4xl text-[clamp(1rem,7vw,2rem)] md:text-[clamp(1.125rem,2vw,50rem)]'><MdArrowOutward/></p>
                    <p className='hidden md:flex md:ml-5 lg::text-2xl md:text-[clamp(0.6rem,1.5vw,280rem)]'>Learn more</p>
                </a>
                <Image src={svg2} alt='avg' className='size-6/10 sm:size-6/10 md:w-[clamp(1rem,20vw,45rem)]'/>
            </div>
        </div>

        <div className='bg-f2 w-full  p-8 relative border-1 border-b-8 rounded-3xl mb-3'>
            <div className='absolute text-wrap max-w-[250px] '>
                <mark className='bg-f3 font-black rounded-lg p-0.5 text-[clamp(1.2rem,6vw,3rem)] sm:text-[clamp(1rem,3vw,5rem)] md:text-[clamp(1rem,2.5vw,2rem)]'>Search engine optimization</mark>
            </div>

            <div className='flex relative items-end justify-between  md:gap-10 md:mt-10 mt-[clamp(0.5rem,50vw,5.2rem)]'>
                <a href='#' className=' bottom-0 flex items-center'>
                    <p className='bg-f3 text-f2 p-2 rounded-4xl text-[clamp(1rem,7vw,2rem)] md:text-[clamp(1.125rem,2vw,50rem)]'><MdArrowOutward/></p>
                    <p className='hidden md:flex md:ml-5 lg::text-2xl md:text-[clamp(0.6rem,1.5vw,280rem)] text-f3'>Learn more</p>
                </a>
                <Image src={svg3} alt='avg' className='size-6/10 sm:size-6/10 md:w-[clamp(1rem,20vw,45rem)]'/>
            </div>
        </div>

        <div className='bg-f3 w-full  p-8 relative border-1 border-b-8 rounded-3xl mb-3'>
            <div className='absolute text-wrap max-w-[250px] '>
                <mark className='bg-f1 font-black rounded-lg p-0.5 text-[clamp(1.2rem,6vw,3rem)] sm:text-[clamp(1rem,3vw,5rem)] md:text-[clamp(1rem,2.5vw,2rem)]'>Search engine optimization</mark>
            </div>

            <div className='flex relative items-end justify-between  md:gap-10 md:mt-10 mt-[clamp(0.5rem,50vw,5.2rem)]'>
                <a href='#' className=' bottom-0 flex items-center'>
                    <p className='bg-f2 text-f1 p-2 rounded-4xl text-[clamp(1rem,7vw,2rem)] md:text-[clamp(1.125rem,2vw,50rem)]'><MdArrowOutward/></p>
                    <p className='hidden md:flex md:ml-5 lg::text-2xl md:text-[clamp(0.6rem,1.5vw,280rem)]'>Learn more</p>
                </a>
                <Image src={svg4} alt='avg' className='size-6/10 sm:size-6/10 md:w-[clamp(1rem,20vw,45rem)]'/>
            </div>
        </div>

        <div className='bg-f1 w-full  p-8 relative border-1 border-b-8 rounded-3xl mb-3'>
            <div className='absolute text-wrap max-w-[250px] '>
                <mark className='bg-f1 font-black rounded-lg p-0.5 text-[clamp(1.2rem,6vw,3rem)] sm:text-[clamp(1rem,3vw,5rem)] md:text-[clamp(1rem,2.5vw,2rem)]'>Search engine optimization</mark>
            </div>

            <div className='flex relative items-end justify-between  md:gap-10 md:mt-10 mt-[clamp(0.5rem,50vw,5.2rem)]'>
                <a href='#' className=' bottom-0 flex items-center'>
                    <p className='bg-f2 text-f1 p-2 rounded-4xl text-[clamp(1rem,7vw,2rem)] md:text-[clamp(1.125rem,2vw,50rem)]'><MdArrowOutward/></p>
                    <p className='hidden md:flex md:ml-5 lg::text-2xl md:text-[clamp(0.6rem,1.5vw,280rem)]'>Learn more</p>
                </a>
                <Image src={svg5} alt='avg' className='size-6/10 sm:size-6/10 md:w-[clamp(1rem,20vw,45rem)]'/>
            </div>
        </div>

        <div className='bg-f2 w-full  p-8 relative border-1 border-b-8 rounded-3xl mb-3'>
            <div className='absolute text-wrap max-w-[250px] '>
                <mark className='bg-f1 font-black rounded-lg p-0.5 text-[clamp(1.2rem,6vw,3rem)] sm:text-[clamp(1rem,3vw,5rem)] md:text-[clamp(1rem,2.5vw,2rem)]'>Search engine optimization</mark>
            </div>

            <div className='flex relative items-end justify-between  md:gap-10 md:mt-10 mt-[clamp(0.5rem,50vw,5.2rem)]'>
                <a href='#' className=' bottom-0 flex items-center'>
                    <p className='bg-f3 text-f2 p-2 rounded-4xl text-[clamp(1rem,7vw,2rem)] md:text-[clamp(1.125rem,2vw,50rem)]'><MdArrowOutward/></p>
                    <p className='hidden md:flex md:ml-5 lg::text-2xl md:text-[clamp(0.6rem,1.5vw,280rem)] text-f3'>Learn more</p>
                </a>
                <Image src={svg6} alt='avg' className='size-6/10 sm:size-6/10 md:w-[clamp(1rem,20vw,45rem)]'/>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Services