import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

interface IProps {
    activeIndex: number | null
    index?: number
    toggleIndex?: any
    question?: string
    answer?: string
}

const FaqsCard = ({ question, answer, activeIndex, index, toggleIndex }: IProps) => {

    return (
        <div
            className={`group rounded-xl border transition-all duration-300 p-3
  ${activeIndex === index
                    ? "border-blue-500 bg-linear-to-br from-sky-50 via-white to-indigo-50 shadow-lg"
                    : "border-slate-200 bg-white hover:border-sky-300 hover:shadow-md"
                }`}
        >
            {/* Question  */}
            <div onClick={() => toggleIndex(index)} className='text-sm md:text-base font-semibold leading-7 flex items-center justify-between cursor-pointer'>
                <h4>{question}</h4>
                <IoIosArrowDown
                    className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                        }`}
                />
            </div>

            {/* answer */}
            <div
                className={`grid transition-all leading-relaxed duration-300 ease-in-out ${activeIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-gray-600 leading-7">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FaqsCard