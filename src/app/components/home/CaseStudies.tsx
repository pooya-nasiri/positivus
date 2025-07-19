import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { text } from 'stream/consumers';
function CaseStudies() {
    const items =[
        {id:1,text:"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."},
        {id:2,text:"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."},
        {id:3,text:"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."}
    ]
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

      <div className='flex overflow-scroll xl:overflow-hidden sm:items-center md:space-x-0 md:p-[clamp(0.5rem,2vw,1.25rem)] lg:p-[clamp(1.25rem,2vw,2.25rem)]  md:justify-center space-x-4 sm:bg-f2 sm:rounded-3xl '>
        {items.map((item)=>(
              <div key={item.id} className='justify-around flex flex-col bg-f2 space-y-5 min-w-60 text-f3 min-h-6 p-5   px-6 rounded-3xl text-[0.8rem] lg:text-[clamp(0.5rem,1.5vw,1.25rem)] '>
            <p>
                {item.text}
            </p>
            <a className='flex items-center text-f1 gap-0.5 '>
                Learn more
                <MdArrowOutward className='size-7'/>
            </a>
        </div>
        ))}
      </div>
    </section>
  )
}

export default CaseStudies
