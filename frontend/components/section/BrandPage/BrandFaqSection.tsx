import FaqSection from '@/components/shared/FaqSection';
import brands from '@/public/constant/brands';
import Link from 'next/link';
import React from 'react'

export const samsungFaqs = [
    {
        question: "Which Samsung phone has the best camera?",
        answer:
            "Samsung's Galaxy S Ultra series typically offers the best camera system, featuring high-resolution sensors, advanced zoom capabilities, excellent low-light performance, and AI-powered photography. The latest Ultra models are ideal for photography enthusiasts and content creators."
    },
    {
        question: "Which Galaxy phone offers the best value?",
        answer:
            "The Galaxy A series provides the best balance of price and features for most users. Models like the Galaxy A55 and A35 offer quality displays, reliable performance, long battery life, and multiple years of software updates at a more affordable price than flagship devices."
    },
    {
        question: "How long does Samsung provide software updates?",
        answer:
            "Samsung provides different update policies depending on the device. Recent flagship Galaxy S and Z series phones receive up to 7 years of Android OS and security updates, while many Galaxy A series devices receive between 4 and 6 years of support."
    },
    {
        question: "Which Samsung phone is best for gaming?",
        answer:
            "Galaxy S Ultra models are the best choice for gaming thanks to their flagship Snapdragon or Exynos processors, high refresh rate AMOLED displays, large batteries, advanced cooling systems, and Game Booster optimization."
    },
    {
        question: "What is Samsung Knox?",
        answer:
            "Samsung Knox is Samsung's enterprise-grade security platform built into Galaxy devices. It provides hardware-level protection, secure data storage, biometric security, encrypted folders, and features that help protect personal and business information."
    },
    {
        question: "Are Samsung phones water resistant?",
        answer:
            "Many premium Samsung Galaxy phones include IP67 or IP68 water and dust resistance. These ratings help protect devices from accidental splashes and temporary water immersion. However, water resistance may decrease over time and does not cover saltwater or high-pressure water exposure."
    },
    {
        question: "Which Galaxy series is right for me?",
        answer:
            "Choose the Galaxy S series for flagship performance and premium cameras, the Galaxy Z series for foldable innovation, the Galaxy A series for affordable everyday use, and the Galaxy M series if you prioritize long battery life and value."
    },
    {
        question: "How do I compare Samsung phones?",
        answer:
            "Compare Samsung phones by considering display size, processor, RAM, storage, camera quality, battery capacity, charging speed, software support, water resistance, and price. Identifying your priorities—such as photography, gaming, productivity, or budget—makes it easier to choose the right Galaxy device."
    }
];

const BrandFaqSection = () => {
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
                        <FaqSection faqs={samsungFaqs} />
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
                                key={b.id}
                                className='rounded-md bg-white-1 p-2 transition-all duration-200 hover:-translate-y-1.5 flex flex-col items-center justify-center gap-1 shrink-0'
                            >
                                <img
                                    src={b.img}
                                    title={b.metaTitle}
                                    loading='lazy'
                                    alt={b.alt}
                                    className='w-30 h-30'
                                />
                                <span className='text-sm md:text-base font-black'>{b.brandName}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandFaqSection