'use client'
import { count } from 'console'
import React from 'react';
import { useState } from 'react';
import { MdOutlineAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";

function ourWorkingProcess() {
    const items=[
        {id:1,name:"01",title:"Consultation",description:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
        {id:2,name:"02",title:"Research and Strategy Development",description:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
        {id:3,name:"03",title:"Implementation",description:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
        {id:4,name:"04",title:"Monitoring and Optimization",description:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
        {id:5,name:"05",title:"Reporting and Communication",description:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
        {id:6,name:"06",title:"Continual Improvement",description:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
    ]
    const [openId,setOpenId]=useState(null);
    const toggle = (id:any)=>{
        setOpenId(openId === id ? null:id);
    }
    console.log(openId)
  return (
    <section className='flex flex-col space-y-8'>
      <div className='text-center sm:flex sm:gap-6 sm:text-left sm:items-center '>
        <span className='bg-f1 font-bold text-3xl p-0.5 sm:p-3 sm:text-[1.3rem]  lg:text-2xl'>
            Our woeking Process
        </span>
        <p className='mt-3.5 sm:w-1/3 sm:text-[0.9rem] xl:text-2xl'>
            Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      {/* Accordoins */}
      <div>
        {items.map(({id,name,title,description})=>(
        <div key={id} className={`rounded-3xl mb-4  border-1 border-b-4 border-t-0 p-4 sm:p-6 lg:px-8 md:border-1 md:border-b-4  ${openId === id?"bg-f1":"bg-f3"} `}>
            <div className='flex items-center justify-between'>
                <div className='flex  items-center  space-x-9'>
                    <h2 className='font-bold text-2xl lg:text-4xl xl:text-5xl'>{name}</h2>
                    <p className='text-[0.7rem] w-2/3 font-black sm:w-2/2 sm:text-[1.2rem] lg:text-3xl '>{title}</p>
                </div>
                <div onClick={()=>toggle(id)} className='p-1 border-2 rounded-4xl text-2xl lg:text-3xl xl:text-4xl'>
                    <MdOutlineAdd className={`${openId === id ?"hidden":"flex"}`}/>
                    <IoMdRemove className={`${openId === id ?"flex":"hidden"}`} />
                </div>
            </div>

            <div className={`${openId === id ? "flex":"hidden"} text-sm border-t-1 my-2.5 pt-2.5 xl:text-2xl `}>
                <p>{description}</p>
            </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default ourWorkingProcess
