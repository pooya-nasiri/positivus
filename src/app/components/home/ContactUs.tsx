import React from 'react'
import svg from '@/app/public/contactUs.svg'
import Image from 'next/image'
export default function ContactUs() {
  return (
    <section>
      <div className='text-center sm:flex sm:items-center gap-4 mb-10 '>
        <div>
        <span className='bg-f1 font-black text-2xl p-1 md:text-3xl lg:text-4xl xl:text-5xl'>ContactUs</span>
        </div>
        <h2 className='mt-1.5 text-[clamp(0.8rem,4vw,1rem)] sm:text-[clamp(0.3rem,4vw,1.2rem)] lg:text-[clamp(0.3rem,4vw,1.7rem)] xl:text-[clamp(0.3rem,4vw,1.9rem)] sm:w-[65%]'>Connect with Us: Let's Discuss Your Digital Marketing Needs</h2>
      </div>

      <div className='flex relative bg-gray-100 rounded-2xl p-10 justify-center items-center'>
        <form className='sm:min-w-100'>
            <div className='flex accent-f1 gap-1.5 mb-8 '>
            <h4><input className='size-5' type="radio" name='g'/> Say Hi</h4>
            <h4><input className='size-5' type="radio" name='g'/> Get a Quote</h4>
            </div>
            <div>
                <h3>Name</h3>
                <input className='bg-white border-2 rounded-xl p-2 w-full' type="text" name="name" placeholder='Name' />
                <h3 className='mt-2'>Email*</h3>
                <input className='bg-white border-2 rounded-xl p-2 w-full' type="text" name="name" placeholder='Email*' />
                <h3 className='mt-2'>Message*</h3>
                <input className='bg-white border-2 rounded-xl p-2 h-20 w-full' type="text" name="name" placeholder='Message*' />
            </div>
            <button className='mt-4 w-full bg-f2 text-f3 p-4 rounded-2xl hidden sm:block' type='submit'>Send Message</button>
        </form>
        <div className='w-30 h-30 left-0 top-0 absolute bg-f1 rounded-tl-xl rounded-br-xl hidden sm:flex'></div>
        <div className='w-30 h-30 bottom-0 right-0 absolute bg-f2 rounded-tl-xl hidden  rounded-br-xl sm:flex'></div>
      </div>
            <button className='mt-4 w-full bg-f2 text-f3 p-4 rounded-2xl sm:hidden' type='submit'>Send Message</button>
    </section>
  )
}
