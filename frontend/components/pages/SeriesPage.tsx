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

import {
    FaCalendar,
    FaUsers,
    FaMobileScreen,
    FaLightbulb,
    FaGlobe,
    FaCrown,
} from "react-icons/fa6";
import TrendingPhoneCard from '../global/cards/TrendingPhoneCard';
import PhoneCard from '../global/cards/PhoneCard';
import MobileFinder from '../shared/MobileFinder';
import brands from '@/public/constant/brands';
import Link from 'next/link';
import FaqSection from '../shared/FaqSection';

export const phoneOverviewInfo = [
    {
        id: 1,
        title: "Introduced",
        value: "17 January 2025",
        icon: FaCalendar,
    },
    {
        id: 2,
        title: "Target Audience",
        value: "Flagship users, professionals, creators, and power users",
        icon: FaUsers,
    },
    {
        id: 3,
        title: "Product Category",
        value: "Premium Android Smartphone",
        icon: FaMobileScreen,
    },
    {
        id: 4,
        title: "Key Innovation",
        value: "Galaxy AI, Snapdragon 8 Elite, Advanced Camera System",
        icon: FaLightbulb,
    },
    {
        id: 5,
        title: "Market Availability",
        value: "Available in 150+ countries worldwide",
        icon: FaGlobe,
    },
    {
        id: 6,
        title: "Premium Position",
        value: "Samsung's Ultra Flagship Smartphone",
        icon: FaCrown,
    },
];

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

const SeriesPage = () => {
    const swiperRef = useRef<SwiperType>(null)

    return (
        <>
            {/* Hero Section  */}
            <section className='relative overflow-hidden bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
                <div className="flex flex-col-reverse items-center gap-6 px-1 py-6 sm:px-2 md:flex-row md:py-1 md:pb-10 max-w-6xl mx-auto">

                    {/* Left Content */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-black leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                            Samsung
                            <span className="mt-2 block bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Galaxy S Series
                            </span>
                        </h1>

                        <p className=" mt-6 max-w-2xl text-slate-600 text-base leading-relaxed md:text-lg">
                            Discover every smartphone in the Samsung Galaxy S Series, from the earliest flagship models to the latest Galaxy S Ultra devices. Compare specifications, explore AI-powered reviews, track prices, and find the perfect Galaxy S smartphone for your needs.
                        </p>

                        {/* Input & buttons */}
                        <div className='my-4'>
                            <input type="text"
                                placeholder='Search Galaxy Phones Futures'
                                className='shadow-lg shadow-gray-300 rounded-3xl bg-white  border-gray-900 w-full md:w-[80%] h-12 py-2 px-4'
                            />
                            <div className='my-2 mt-4 flex items-center gap-2'>

                                <button className='py-2 px-4 rounded-3xl bg-dark-blue text-white hover:bg-dark-blue/90 '>Search Phone</button>

                                <button className='py-2 px-4 rounded-3xl border border-dark-blue text-dark-blue  hover:bg-dark-blue hover:text-white '>Compare Phone</button>
                            </div>
                        </div>

                        {/* Mobile Image section */}
                        <div className="relative md:hidden flex flex-1 items-center justify-center">

                            {/* Glow */}
                            <div className="absolute h-64 w-64 rounded-full bg-blue-600/30 blur-3xl"></div>

                            {/* Phone */}
                            <img
                                src="/images/samsung-test-no.png"
                                alt="Samsung Smartphone"
                                className="relative z-10 w-72 md:w-80 lg:w-96 object-contain transition-transform duration-500 hover:-rotate-6 -rotate-12"
                            />
                        </div>

                        {/* Stats  */}
                        <div className='grid grid-cols-3 gap-3'>


                            <div className="relative inline-flex overflow-hidden rounded-2xl border border-sky-100 bg-white p-5 shadow-lg backdrop-blur-sm">
                                {/* Background Glow */}
                                <div className="absolute -right-2 -bottom-2 h-20 w-20 rounded-full bg-dark-blue/70 blur-3xl"></div>

                                <div className="relative z-10 flex items-center gap-4">

                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            Flagship Features
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                            72M
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="relative inline-flex overflow-hidden rounded-2xl border border-sky-100 bg-white p-5 shadow-lg backdrop-blur-sm">
                                {/* Background Glow */}
                                <div className="absolute -right-2 -bottom-2 h-20 w-20 rounded-full bg-dark-blue/70 blur-3xl"></div>

                                <div className="relative z-10 flex items-center gap-4">

                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            Camera Rating
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                            4.8/5
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="relative inline-flex overflow-hidden rounded-2xl border border-sky-100 bg-white p-5 shadow-lg backdrop-blur-sm">
                                {/* Background Glow */}
                                <div className="absolute -right-2 -bottom-2 h-20 w-20 rounded-full bg-dark-blue/70 blur-3xl"></div>

                                <div className="relative z-10 flex items-center gap-4">

                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            Display Rating
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                            10M +
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative hidden md:flex flex-1 items-center justify-center">

                        {/* Glow */}
                        <div className="absolute h-64 w-64 rounded-full bg-blue-600/30 blur-3xl"></div>

                        {/* Phone */}
                        <img
                            src="/images/samsung-test-no.png"
                            alt="Samsung Smartphone"
                            className="relative z-10 w-72 md:w-80 lg:w-96 object-contain transition-transform duration-500 hover:-rotate-6 -rotate-12"
                        />
                    </div>

                </div>
            </section>


            {/* About Section */}
            <div className="container-1 relative z-10 py-12 md:py-20 px-4 sm:px-6">
                <div className='flex flex-col md:flex-row items-start justify-center gap-4'>
                    <div>
                        <h1 className="text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                            About Galaxy S Series
                        </h1>

                        <p className=" mt-6 max-w-2xl text-slate-600 text-base leading-relaxed md:text-lg">
                            The Samsung Galaxy S Series represents Samsung's flagship smartphone lineup, delivering cutting-edge innovation, premium materials, advanced cameras, high-performance chipsets, and industry-leading displays. Since its introduction in 2010, the Galaxy S Series has consistently set new standards for Android smartphones worldwide.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {phoneOverviewInfo.map((s,i) => (
                            <div key={i} className="col-span-1 group relative overflow-hidden rounded-2xl border border-sky-200/70 bg-linear-to-br from-white via-sky-50 to-blue-100 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1">

                                <div className="relative z-10 inline-flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 to-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <s.icon className="text-2xl" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h4 className="text-lg font-extrabold text-dark-blue">
                                            {s.title}
                                        </h4>

                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            <span className="font-semibold text-slate-800">
                                                {s.value}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}


                    </div>
                </div>
            </div>


            {/* Latest Models  */}
            <section className='bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100 overflow-hidden'>

                <div className='container-1 mx-auto py-10 lg:py-18 '>
                    <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                        Latest Galaxy S Models
                    </h1>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mt-4 md:mt-6'>

                        <div>
                            <TrendingPhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' price='$ 30000' spec='6GB 128GB' />
                        </div>
                        <div>
                            <TrendingPhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' price='$ 30000' spec='6GB 128GB' />
                        </div>
                        <div>
                            <TrendingPhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' price='$ 30000' spec='6GB 128GB' />
                        </div>
                        <div>
                            <TrendingPhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' price='$ 30000' spec='6GB 128GB' />
                        </div>


                    </div>
                </div>

            </section >

            {/* Popular Models */}

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
                        <SwiperSlide>
                            <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='Tranding' price='5000' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='Tranding' price='5000' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='Tranding' price='5000' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='Tranding' price='5000' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='Tranding' price='5000' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='Tranding' price='5000' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >

            {/* Collection Section */}

            <div className="container-1 relative z-10 py-12 md:py-20 px-4 sm:px-6">

                <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                    Find Your Perfect Galaxy S Phone
                </h1>

                <div className='my-4 md:my-6'>
                    <MobileFinder />
                </div>

            </div>


            {/* Faqs Section */}
            <section className='relative overflow-hidden bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
                <div className='container-1 mx-auto py-10 lg:py-18'>
                    <div className='mb-4 md:mb-6  '>
                        <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                            FAQ's About Galaxy S Series
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
                        Discover Related Smartphone Series
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

export default SeriesPage