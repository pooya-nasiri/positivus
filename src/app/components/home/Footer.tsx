import React from 'react'
import Image from 'next/image';
import Logo from '@/app/public/wahiteLogo.svg'
import Link from 'next/link';
import { IoLogoTwitter } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Footer() {
  return (
    <section className='bg-f2 mt-15 rounded-t-2xl text-f3 flex flex-col gap-6'>
      <div className='flex flex-col sm:flex-row sm:justify-between items-center pt-5 sm:p-6  gap-3'>
        <Link href='/' className='flex gap-2 '>
                <Image src={Logo} alt='Logo' className='w-5 ' />
                <p className='text-2xl'>Positivus</p>
            </Link>
            <div>
              <ul className='flex flex-col sm:text-sm  sm:gap-2.5 sm:flex-row  items-center'>
                <li><Link href='/' className='underline'>About us</Link></li>
                <li><Link href='/' className='underline'>Services</Link></li>
                <li><Link href='/' className='underline'>Use Cases</Link></li>
                <li><Link href='/' className='underline'>Pricing</Link></li>
                <li><Link href='/' className='underline'>Blog</Link></li>
              </ul>
            </div>

            <div className='sm:flex items-center gap-2 hidden'>
                <div className='bg-f3 text-black text-sm flex items-center justify-center p-1 rounded-2xl'><Link href='/'><FaLinkedinIn /></Link></div>
                <div className=' text-white text-2xl'><Link href='/'><MdFacebook /></Link></div>
                <div className='bg-f3 text-black  flex items-center justify-center p-0.5 rounded-2xl'><Link href='/'><IoLogoTwitter /></Link></div>
            </div>
      </div>

      <div className='sm:flex sm:items-center sm:justify-around p-3'>
        <div className='text-center'>
          <span className='bg-f1 text-f2 font-black'>Contact us:</span>
          <p>Email: nasiripooya254@gmail.com</p>
          <p>Phone: 0902-7955-686</p>
          <p>Address: 1234 Main St</p>
          <p>Moonstone City, Stardust State 12345</p>
        </div>
        <div className='bg-[#292A32] flex sm:flex-row sm:py-15 flex-col gap-3 p-3 rounded-xl mt-4'>
          <input type='email' className='border p-2 rounded-xl w-full'/>
           <button type='submit' className='w-full bg-f1 p-3 text-f2 rounded-xl'>Subscribe to news</button>
        </div>
      </div>

       <div className='flex items-center justify-center gap-2 sm:hidden'>
          <div className='bg-f3 text-black text-sm flex items-center justify-center p-1 rounded-2xl'><Link href='/'><FaLinkedinIn /></Link></div>
                <div className=' text-white text-2xl'><Link href='/'><MdFacebook /></Link></div>
                <div className='bg-f3 text-black  flex items-center justify-center p-0.5 rounded-2xl'><Link href='/'><IoLogoTwitter /></Link></div> 
       </div>

       <div className='border-t-1 border-f3 p-3 text-sm sm:flex sm:gap-7'>
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href='#' className='underline'>Privacy Policy</a>
       </div>
    </section>
  )
}
