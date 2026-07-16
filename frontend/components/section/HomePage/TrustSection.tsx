import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { statsData } from '@/public/constant/constant.js'

const TrustSection = () => {
    return (
        <div className='container-1 mx-auto py-10 lg:py-18'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight'>Trusted by Smartphone <span className='bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>Enthusiasts</span> Worldwide</h2>
                <p className='text-sm sm:text-base md:text-lg mt-4 md:mt-6 px-3'>
                    Thousands of users rely on Mobile Info Pro every day to compare devices, read AI-powered insights, and discover the perfect smartphone.
                </p>
            </div>

            <div className='grid grid-cols-2 place-items-center gap-4 md:flex md:flex-wrap md:items-center md:justify-center md:gap-6 mt-4 md:mt-6'>
                {statsData.map((s, i) => (
                    <div key={i} className={`
            flex items-center gap-3 p-3 md:p-2
            last:border-0
            md:last:border-0
            md:border-r md:border-dark-blue/20
            md:last:border-r-0
            flex-1 min-w-30 md:min-w-0 md:flex-none
            bg-white/50 md:bg-transparent rounded-lg md:rounded-none
            hover:bg-white/80 md:hover:bg-transparent transition-colors
        `}>
                        <s.icon className='text-dark-blue text-2xl md:text-4xl lg:text-5xl shrink-0' />
                        <div className='flex flex-col'>
                            <span className='text-lg sm:text-xl font-black text-dark-blue leading-tight'>
                                {s.value}
                            </span>
                            <p className='text-xs sm:text-sm md:text-base leading-tight text-gray-600'>
                                {s.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrustSection