"use client"
import Image from 'next/image';
import svg1 from '@/app/public/team1.svg';
import svg2 from '@/app/public/team2.svg';
import svg3 from '@/app/public/team3.svg';
import svg4 from '@/app/public/team4.svg';
import svg5 from '@/app/public/team5.svg';
import svg6 from '@/app/public/team6.svg';
import { useState } from 'react';
function Team() {
    const [active,setActive]=useState(6)
    const items=[
        {id:1,svg:svg1,name:"John Smith",expertise:"CEO and Founder",commentary:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"},
        {id:2,svg:svg2,name:"Jane Doe",expertise:"Director of Operations",commentary:"7+ years of experience in project management and team leadership. Strong organizational and communication skills"},
        {id:3,svg:svg3,name:"Michael Brown",expertise:"Senior SEO Specialist",commentary:"5+ years of experience in SEO and content creation. Prcoficient in keyword research and on-page optimization"},
        {id:4,svg:svg4,name:"Emily Johnson",expertise:"PPC Manager",commentary:"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"},
        {id:5,svg:svg5,name:"Brian Williams",expertise:"Social Media Specialist",commentary:"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"},
        {id:6,svg:svg6,name:"Sarah Kim",expertise:"Content Creator",commentary:"2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"},
        {id:7,svg:svg1,name:"John Smith",expertise:"CEO and Founder",commentary:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"},
        {id:8,svg:svg1,name:"John Smith",expertise:"CEO and Founder",commentary:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"},
        {id:9,svg:svg1,name:"John Smith",expertise:"CEO and Founder",commentary:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"},
        {id:10,svg:svg1,name:"John Smith",expertise:"CEO and Founder",commentary:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"},
    ]
  return (
    <section>
      <div className='text-center sm:flex sm:items-center gap-4 mb-10 '>
        <div>
        <span className='bg-f1 font-black text-2xl p-1 md:text-3xl lg:text-4xl xl:text-5xl'>Team</span>
        </div>

        <h2 className='mt-1.5 text-[clamp(0.8rem,4vw,1rem)] sm:text-[clamp(0.3rem,4vw,1.2rem)] lg:text-[clamp(0.3rem,4vw,1.7rem)] xl:text-[clamp(0.3rem,4vw,1.9rem)] sm:w-[65%]'>
            Meet the skilled and experienced team behind our successful digital marketing strategies
        </h2>
      </div>
      {/* team */}
      <div>
        <div className='sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3'>
            {items.slice(0,active).map(({id,svg,name,expertise,commentary})=>(
                <div key={id} className='bg-f3 p-6 border-1 border-t-0 border-b-4 rounded-3xl mb-5 sm:mb-0  lg:border-1 lg:border-b-8 '>
                    <div className='flex items-end justify-between relative border-b-1 pb-3 mb-3'>
                    <Image src={svg} alt='svg' className='w-2/5'/>
                    <div className='text-[clamp(0.6rem,5vw,1.3rem)] text-center p-0 m-0 sm:text-[1rem] md:text-[0.7rem] lg:text-sm xl:text-xl'>
                        <h3 className='font-bold'>{name}</h3>
                        <p>{expertise}</p>
                    </div>
                    <div className='absolute right-0 top-0 bg-f2 text-f1 p-0 size-6  rounded-4xl xl:size-8 flex items-center justify-center'>in</div>
                    </div>
                    <p className='text-[clamp(0.9rem,4vw,1.2rem)] sm:text-[0.7rem] md:text-[0.6rem] lg:text-sm xl:text-2xl'>{commentary}</p>
                </div>
            ))}
        </div>

        <div className='sm:mt-5 sm:w-1/4 sm:flex sm:justify-self-end sm:text-sm lg:text-2xl text-xl' >
            <button onClick={()=>setActive(items.length)}  className={`${active==6?"block":"hidden"} bg-f2 text-f3 p-5 rounded-2xl  w-full`}><p>See all team</p></button>
            <button onClick={()=>setActive(6)} className={`${active==6?"hidden":"block"} bg-f2 text-f3 p-5 rounded-2xl  w-full`} >See all team</button>
        </div>
        
      </div>
    </section>
  )
}

export default Team
