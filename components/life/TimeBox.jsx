import React from 'react'

const TimeBox = ({label, value}) => {
  return (
        <div className='bg-white/20 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-6 text-center hover:scale-105 transition w-full'>
        <h2 className='text-xl md:text-3xl font-bold text-white wrap-break-word leading-tight'>{String(value).padStart(2, "0")}</h2>
        <p className='text-white/70 mt-1 text-sm md:text-base'>{label}</p>     
        </div>
  )
}

export default TimeBox;
