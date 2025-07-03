"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/app/icon.png'
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
function Layuot() {
    const [active,setActive]=useState(false)
    console.log(active)
  return (
    <header className='grid-cols-1 relative bg-white'>
        <section className='relative flex items-center justify-between'>
            <Link href='/' className='flex items-center gap-1 text-2xl lg:text-3xl xl:text-5xl'>
                <Image src={Logo} alt='Logo' className='size-5 xl:size-10 lg:size-6'/>
                <p>Positivus</p>
            </Link>
        {/* Link pages */}
        <div>
            <FaBars onClick={()=>setActive(!active)} className={`${active ?"hidden": "flex"} sm:hidden`}/>
            <FaBarsStaggered onClick={()=>setActive(!active)} className={`${active ?"flex": "hidden"} text-green-400 sm:hidden`}/>
            <nav>
                <ul className='text-sm hidden sm:flex lg:text-lg lg:space-x-5 xl:text-2xl items-center'>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>About Us</Link></li>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>Services</Link></li>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>Use Cases</Link></li>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>Pricing</Link></li>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>Blog</Link></li>
                <li><Link href='/' className='focus:bg-f1 border-1 p-2 rounded-lg'>Request a quote</Link></li>
            </ul>
            </nav>
        </div>
        </section>
        <nav className={`absolute bg-white ${active ? "flex":'hidden'}`}>
            <ul className='space-y-2'>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>About Us</Link></li>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>Services</Link></li>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>Use Cases</Link></li>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>Pricing</Link></li>
                <li><Link href='/' className='focus:bg-f1 p-1 rounded-lg px-1.5'>Blog</Link></li>
                <li><Link href='/' className='focus:bg-f1 border-2 p-1 rounded-lg'>Request a quote</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Layuot
