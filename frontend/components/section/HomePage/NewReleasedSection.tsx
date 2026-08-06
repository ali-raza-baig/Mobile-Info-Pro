'use client'
import React, { useRef } from 'react'
import PhoneCard from '@/components/global/cards/PhoneCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import { useModel } from '@/context/ModelContext';


const NewReleasedSection = () => {
    const swiperRef = useRef<SwiperType>(null)
    const { models } = useModel()
    return (
        <section className='bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100 overflow-hidden'>

            <div className='container-1 mx-auto py-10 lg:py-18 '>
                <div className='max-w-3xl mx-auto text-center'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight'>
                        Discover the {' '}
                        <span className='bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                            Latest Smartphone
                        </span>{' '}
                        Releases
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg mt-4 md:mt-6 px-3'>
                        Stay ahead with the newest smartphones from leading brands. Explore official specifications, AI-powered first impressions, pricing, and launch highlights.
                    </p>
                </div>



                <div className=''>

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
                        className='py-6 px-2 flex items-center justify-center'
                    >
                        {models?.new.map((m: any, i: any) => (
                            <div key={i}>
                                <SwiperSlide >
                                    <PhoneCard image={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${m.images[0].img}`} name={m.name} badge='new' price={m?.content?.details.estimatedPrice?.usa?.min} link={`/model/${m.slug}`} chip={m.specifications.performance.chipset.name ?? ''} battery={m.specifications.battery.capacity} />
                                </SwiperSlide>

                            </div>))}


                    </Swiper>

                </div>
            </div >
        </section>
    )
}

export default NewReleasedSection