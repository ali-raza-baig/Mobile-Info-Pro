'use client'
import React, { useState } from 'react'
import FaqsCard from '../global/FaqsCard'

const FaqSection = ({ faqs }: { faqs: { question: string, answer?: string }[] }) => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
        <div className=' p-1 grid grid-cols-1 md:grid-cols-2 gap-4  h-130 overflow-y-auto md:h-full'>
            {faqs?.map((f, i) => (
                <FaqsCard key={i} question={f.question} answer={f.answer} activeIndex={activeIndex} index={i} toggleIndex={toggleIndex} />
            ))}
        </div>
    )
}

export default FaqSection