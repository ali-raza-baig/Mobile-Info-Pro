'use client'
import FaqSection from '@/components/shared/FaqSection';
import { useMyContext } from '@/context/Context';
import Link from 'next/link';
import React from 'react'


const BrandFaqSection = ({ brandFaq }: { brandFaq: any }) => {
    const { brands } = useMyContext()
    if (brandFaq.length === 0) {
        return (
            <div>Faq's not Available</div>
        )
    }
    return (
        <>
            <section className='relative overflow-hidden bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
                <div className='container-1 mx-auto py-10 lg:py-18'>
                    <div className='mb-4 md:mb-6  '>
                        <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                            FAQ's About Samsung Phones
                        </h1>
                    </div>
                    <div>
                        <FaqSection faqs={brandFaq} />
                    </div>
                </div>
            </section>

            <div className='container-1 mx-auto py-10 lg:py-18'>
                <div className='mb-4 md:mb-8  '>
                    <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                        Discover Similar Smartphone Brands
                    </h1>
                </div>

                <div>
                    <div className='flex items-center justify-center flex-wrap gap-4 mt-4 md:mt-6'>
                        {brands.slice(0, 8).map((b) => (
                            <Link href={`/brand/${b.slug}`}
                                key={b._id}
                                className='rounded-md bg-white-1 p-2 transition-all duration-200 hover:-translate-y-1.5 flex flex-col items-center justify-center gap-1 shrink-0'
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${b.logo}`}
                                    loading='lazy'
                                    alt={b.name}
                                    className='w-30 h-30'
                                />
                                <span className='text-sm md:text-base font-black'>{b.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandFaqSection