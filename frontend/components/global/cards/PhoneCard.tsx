import React from 'react'
import { IoHardwareChipOutline } from 'react-icons/io5'
import { LuMicrochip } from 'react-icons/lu'
import { MdBatteryCharging20, MdOutlineBattery1Bar } from 'react-icons/md'

interface IProps {
    badge?: string
    image: string,
    imgAlt?: string
    name: string
    price: string
    compare?: string
}

const PhoneCard = ({ badge, image, imgAlt, name, price, compare }: IProps) => {
    return (
        <div className='relative flex flex-col rounded-md shadow-xs shadow-dark-blue py-2 p-1 transition-all duration-300  hover:-translate-y-1.5 hover:shadow-md w-77'>
            {/* Badge */}
            {badge && (<div className='absolute top-0 right-0.5 py-1 px-3 rounded-md bg-dark-blue text-white-1'>
                {badge}
            </div>)}
            {/* image */}
            <img src={image} alt={imgAlt} className='w-full h-50 object-cover' />
            {/* details */}
            <div className='p-2'>
                <div className='flex items-start justify-between gap-4'>
                    <h4 className=' text-lg font-black leading-tight'>{name}</h4>
                    <div className='flex items-center'>
                        <p className='text-xl font-bold!'>${price}{""} </p>
                        <span> {''}est.</span>
                    </div>
                </div>

                <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-1 md:mt-3'>
                    <div className='flex gap-1 items-start'>
                        {/* icon */}
                        <LuMicrochip className='text-[1.2em] text-dark-blue shrink-0' />
                        <span className='text-base'>A17 Pro 48 Main Cam</span>
                    </div>
                    <div className='flex gap-1 items-start'>
                        {/* icon */}
                        <IoHardwareChipOutline className=' text-[1.2em] text-dark-blue shrink-0' />
                        <span>4-128 GB </span>
                    </div>
                    <div className='flex gap-1 items-start'>
                        {/* icon */}
                        <MdOutlineBattery1Bar className=' text-[1.2em] text-dark-blue shrink-0' />
                        <span>5000 mAh </span>
                    </div>
                </div>

            </div>

            {/* buttons */}
            <div className='flex items-center justify-center gap-2 '>
                {compare && (
                    <button className='rounded-lg bg-dark-blue text-white py-2 px-4'>{compare} </button>
                )}

                <button className={` rounded-lg bg-dark-emerald text-white py-2 px-4 ${compare ? '' : 'w-full m-1'}`}>View Details </button>

            </div>
        </div>
    )
}

export default PhoneCard