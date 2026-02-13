import React from 'react'

const SecondsRing = ({seconds}) => {
    const radius = 40;
    const stroke = 6;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;

    const progress = seconds / 60;
    const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className='flex flex-col items-center justify-center'>
        <svg height={radius * 2} width={radius * 2}>
            <circle
          stroke="rgba(255,255,255,0.2)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-500"
        />
        </svg>
        <span className='text-white mt-2 text-sm'>seconds</span>
    </div>
  )
}

export default SecondsRing;

