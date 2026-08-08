'use client'
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
    FiSearch,
    FiTrendingUp,
    FiCpu,
    FiCamera,
    FiBattery,
    FiStar,
} from "react-icons/fi";



const HomeHero = () => {

    const [search, setSearch] = useState('')


    return (
        <section className="relative  overflow-hidden bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100">


            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="h-full w-full" style={{
                    backgroundImage: `
                            linear-gradient(rgba(14, 165, 233, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14, 165, 233, 0.2) 1px, transparent 1px)
                        `,
                    backgroundSize: '60px 60px',
                }} />
            </div>

            <div className="container-1 relative z-10 py-12 md:py-20 px-4 sm:px-6">
                <div className="mx-auto max-w-6xl">

                    {/* Badge - Animated */}
                    <div className="flex justify-center animate-fade-in-down">
                        <div className="group relative rounded-full border border-sky-200/50 bg-white/80 px-5 py-2.5 text-xs font-semibold text-sky-700 shadow-lg shadow-sky-200/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-300/30 md:text-sm">
                            <span className="absolute -inset-px rounded-full bg-linear-to-r from-sky-400 via-blue-400 to-indigo-400 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-50" />
                            <span className="relative flex items-center gap-2">
                                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                📱 Compare 5,000+ Smartphones
                                <span className="hidden sm:inline">•</span>
                                <span className="hidden sm:inline">AI Reviews</span>
                                <span className="hidden sm:inline">•</span>
                                <span className="hidden sm:inline">Live Specs</span>
                                <FiTrendingUp className="text-emerald-500" />
                            </span>
                        </div>
                    </div>

                    {/* Heading with Animated Gradient */}
                    <div className="mx-auto mt-8 max-w-4xl text-center animate-fade-in-up [animation-delay:200ms]">
                        <h1 className="text-4xl font-black leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                            Find Your Next
                            <span className="relative block mt-1 bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                                Perfect Smartphone
                            </span>
                        </h1>

                        {/* <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:mt-6 md:text-lg lg:text-xl">
                            Search thousands of smartphones, compare specifications side by
                            side, explore AI-powered reviews, benchmark scores, camera
                            quality, battery life, and discover the best phone for your
                            budget.
                        </p> */}


                        <div className="mx-auto mt-8 max-w-2xl">
                            <div className="hidden md:flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100">

                                {/* Search Icon */}
                                <div className="pl-5 text-gray-400">
                                    <FiSearch size={22} />
                                </div>

                                {/* Input */}
                                <input
                                    type="text"
                                    name="search"
                                    value={search} onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search by mobile name, brand, model..."
                                    className="h-14 w-full bg-transparent px-4 text-gray-700 placeholder:text-gray-400 outline-none"
                                />

                                {/* Button */}
                                <Link href={`/collection?search=${search}`} className="m-2 flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-300 active:scale-95"

                                >
                                    <FiSearch />
                                    Search
                                </Link>
                            </div>

                            <div className="md:hidden flex flex-col items-center ">


                                {/* Input */}
                                <input
                                    type="text"
                                    name="search"
                                    value={search} onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search by mobile name, brand, model..."
                                    className="h-14 w-full bg-white rounded-md px-4 text-gray-700 placeholder:text-gray-400 outline-none"
                                />

                                {/* Button */}
                                <button className="m-2 w-full flex h-11 items-center gap-2 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-6 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-300 active:scale-95">
                                    <FiSearch />
                                    Search
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Feature Pills - Floating stats */}
                    <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8 animate-fade-in-up [animation-delay:400ms]">
                        {[
                            { icon: FiCpu, label: 'AI Reviews', color: 'sky' },
                            { icon: FiCamera, label: 'Camera Compare', color: 'blue' },
                            { icon: FiBattery, label: 'Battery Tests', color: 'emerald' },
                            { icon: FiStar, label: 'Expert Ratings', color: 'amber' },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-1.5 rounded-full border border-${item.color}-200/50 bg-white/70 px-3 py-1.5 text-xs font-medium text-${item.color}-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg md:gap-2 md:px-4 md:py-2 md:text-sm`}
                            >
                                <item.icon className={`text-${item.color}-500`} size={16} />
                                {item.label}
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 md:mt-10 md:gap-10 md:text-sm animate-fade-in-up [animation-delay:600ms]">
                        <span className="flex items-center gap-1.5">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Trusted by 2M+ users
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
                            5,000+ devices
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                            Updated daily
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                            100% free
                        </span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HomeHero;