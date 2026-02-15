"use client"
import { timelineData } from '@/assets/assets'
import React from 'react'

const page = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='min-h-screen py-20 px-6 '>
        <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:4xl font-bold text-center mb-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 pt-2 pb-2'>My Journey Timeline</h2>

            <div className='relative border-l border-white/20'>
                {timelineData.map((data, index) => (
                    <div key={index} className='mb-12 ml-6 group relative'>

                        <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 group-hover:scale-110 transition'>
                            <span className='h-3 w-3 rounded-full bg-white'></span>
                        </span>

                        <div className='flex'>
                        <h3 className='text-xl ml-5 font-semibold text-indigo-400'>
                            {data.year} 
                        </h3>{Number(data.year) === currentYear && (<div className="mt-2.5 ml-1 bg-green-500 h-2 w-2 rounded-full animate-pulse"></div>)}
                        </div>

                        <div className='mt-2 p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition duration-300'>
                            <h4 className='font-semibold text-lg mb-1'>{data.title}</h4>
                            
                            <p className='text-gray-400 text-sm leading-relaxed'>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default page;
