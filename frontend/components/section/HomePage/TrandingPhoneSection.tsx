'use client'
import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PhoneCard from '@/components/global/cards/PhoneCard';
import { useModel } from '@/context/ModelContext';



const TrandingPhoneSection = () => {
    const swiperRef = useRef<SwiperType>(null)
    const { models } = useModel()
    return (
        <div className='container-1 mx-auto py-10 lg:py-18 min-w-20 max-w-20'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight'>
                    Trending{' '}
                    <span className='bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                        Smartphones
                    </span>{' '}
                    Right Now
                </h2>
                <p className='text-sm sm:text-base md:text-lg mt-4 md:mt-6 px-4'>
                    Discover the devices people are searching, comparing, and reviewing the most this week.
                </p>
            </div>

            <div className='mt-4 md:mt-6 relative flex items-end justify-end py-2 gap-4'>

                <button onClick={() => swiperRef.current?.slidePrev()}
                    className='bg-dark-emerald text-white-1 p-2 rounded-full hover:text-primary-3'
                >
                    <FaArrowLeft size={18} />
                </button>

                <button onClick={() => swiperRef.current?.slideNext()}
                    className='bg-dark-emerald text-white-1 p-2 rounded-full hover:text-primary-3'
                >
                    <FaArrowRight size={18} />
                </button>


            </div>


            <div>
                <Swiper
                    slidesPerView={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        // Optional: add a breakpoint for larger screens (e.g., desktops)
                        1224: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },

                    }}

                    loop={true}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
                    className='py-6 px-2'
                >
                    {models?.tranding.map((m: any, i: any) => (
                        <div key={i}>
                            <SwiperSlide >
                                <PhoneCard image={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${m.images[0].img}`} name={m.name} badge='new' price={m?.content?.details.estimatedPrice?.usa?.min} link={`/model/${m.slug}`} chip={m.specifications.performance.chipset.name ?? ''} battery={m.specifications.battery.capacity} />
                            </SwiperSlide>

                        </div>))}
                </Swiper>
            </div>
        </div >
    )
}

export default TrandingPhoneSection