'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { TiBackspace } from 'react-icons/ti'

const BrandHero = ({ brandHero, heroImage }: { brandHero: any, heroImage: string }) => {
    const [search, setSearch] = useState('')
    return (
        <section className='relative overflow-hidden bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
            <div className="flex flex-col-reverse items-center gap-6 px-1 py-6 sm:px-2 md:flex-row md:py-4 md:pb-10 max-w-6xl mx-auto">

                {/* Left Content */}
                <div className="flex-1  ">
                    <h1 className="text-4xl font-black leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                        {brandHero.title}
                        <span className="mt-2 block bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {brandHero.subtitle}
                        </span>
                    </h1>

                    <p className=" mt-6 max-w-2xl text-slate-600 text-base leading-relaxed md:text-lg ">
                        {brandHero.description}
                    </p>

                    {/* Input & buttons */}
                    <div className='my-4 '>
                        <input type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder='Search Phones Futures'
                            className='shadow-lg shadow-gray-300 rounded-3xl bg-white  border-gray-900 w-full md:w-[80%] h-12 py-2 px-4'
                        />
                        <div className='my-2 mt-4 flex items-center gap-2'>

                            <Link href={`/collection?search=${search}`} className='py-2 px-4 rounded-3xl bg-dark-blue text-white hover:bg-dark-blue/90 ' >Search Phone</Link>

                            {/* <button className='py-2 px-4 rounded-3xl border border-dark-blue text-dark-blue  hover:bg-dark-blue hover:text-white '>Compare Phone</button> */}
                        </div>
                    </div>

                    {/* Mobile Image section */}
                    <div className="relative md:hidden flex flex-1 items-center justify-center">

                        {/* Glow */}
                        <div className="absolute h-64 w-64 rounded-full bg-blue-600/30 blur-3xl"></div>

                        {/* Phone */}
                        <img
                            src={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${heroImage}`}
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
                                        Active Models
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                        {brandHero.stats.activeModels}+
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
                                        Average Rating
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                        {brandHero.stats.averageRating}/5
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
                                        AI Reviews
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                        <FaCheck className='text-dark-blue' />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative hidden md:flex  items-center justify-center">

                    {/* Glow */}
                    <div className="absolute h-64 w-64 rounded-full bg-blue-600/30 blur-3xl"></div>

                    {/* Phone */}
                    <img
                        src={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${heroImage}`}
                        alt="Samsung Smartphone"
                        className="relative z-10 w-72 md:w-100 lg:w-126 object-contain transition-transform duration-500 hover:-rotate-6 -rotate-12"
                    />
                </div>

            </div>
        </section>
    )
}

export default BrandHero