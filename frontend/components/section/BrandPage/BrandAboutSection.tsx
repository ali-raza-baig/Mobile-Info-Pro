import React from 'react'

import {
    FaCalendar,
    FaLocationDot,
    FaMobileScreen,
    FaAndroid,
    FaGlobe,
    FaLink,
} from "react-icons/fa6";

export const samsungBrandInfo = [
    {
        id: 1,
        title: "Founded",
        value: "1 March 1938",
        icon: FaCalendar,
    },
    {
        id: 2,
        title: "Headquarters",
        value: " South Korea",
        icon: FaLocationDot,
    },
    {
        id: 3,
        title: "Popular Series",
        value: "Galaxy S, Galaxy Z, Galaxy A, Galaxy M, Galaxy F",
        icon: FaMobileScreen,
    },
    {
        id: 4,
        title: "Operating System",
        value: "Android (One UI)",
        icon: FaAndroid,
    },
    {
        id: 5,
        title: "Global Presence",
        value: "120 countries worldwide",
        icon: FaGlobe,
    },
    {
        id: 6,
        title: "Official Website",
        value: "https://www.samsung.com",
        icon: FaLink,
    },
];

const BrandAboutSection = () => {
    return (
        <div className="container-1 relative z-10 py-12 md:py-20 px-4 sm:px-6">
            <div className='flex flex-col md:flex-row items-start justify-center gap-4'>
                <div>
                    <h1 className="text-3xl font-black leading-[1.1] text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
                        About Samsung
                    </h1>

                    <p className=" mt-6 max-w-2xl text-slate-600 text-base leading-relaxed md:text-lg">
                        Samsung is one of the world's leading smartphone manufacturers, known for innovation in displays, cameras, foldable technology, and premium Android experiences. Its Galaxy lineup serves everyone from budget-conscious users to flagship enthusiasts.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {samsungBrandInfo.map((s,i) => (
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
    )
}

export default BrandAboutSection