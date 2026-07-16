import React from 'react'

const BlogSection = () => {
    return (
        <div className='container-1 mx-auto py-10 lg:py-18 min-w-20 max-w-20'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight'>
                    Latest Mobile{' '}
                    <span className='bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                        News & Industry
                    </span>{' '}
                    Updates
                </h2>
                <p className='text-sm sm:text-base md:text-lg mt-4 md:mt-6 px-3'>
                    From flagship launches and software updates to AI innovations and industry trends, stay informed with the latest developments in the smartphone world.
                </p>
            </div>


            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 my-10">
                {/* Featured Card */}
                <div className="md:col-span-2 lg:row-span-2 bg-white rounded-xl shadow-md overflow-hidden">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgheOJOnQqT1QMHZxocq9rskCE8QwBraxOHYif5MC0A&s=10"
                        alt=""
                        className="w-full h-72 object-cover"
                    />

                    <div className="p-6">
                        <span className="inline-block bg-sky-600 text-white text-xs px-3 py-1 rounded-full uppercase">
                            Industry Updates
                        </span>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                            <span>July 8, 2026</span>
                            <span>•</span>
                            <span>8 Min Read</span>
                        </div>

                        <h2 className="text-3xl font-bold mt-3 leading-tight">
                            The Rollable Revolution: How Mobile Screens Are Evolving Beyond the
                            Fold
                        </h2>

                        <p className="text-gray-600 mt-4">
                            Exclusive deep dive into the engineering breakthroughs and user
                            experience design challenges defining the future of flexible displays.
                        </p>

                        <p className="text-gray-600 mt-4">
                            Exclusive deep dive into the engineering breakthroughs and user
                            experience design challenges defining the future of flexible displays.
                        </p>

                        <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                            Read More →
                        </button>
                    </div>
                </div>

                {/* Small Cards */}
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgheOJOnQqT1QMHZxocq9rskCE8QwBraxOHYif5MC0A&s=10"
                            alt=""
                            className="w-full h-36 object-cover"
                        />

                        <div className="p-4 flex flex-col flex-1">
                            <span className="inline-block w-fit bg-sky-600 text-white text-[10px] px-2 py-1 rounded-full uppercase">
                                Reviews
                            </span>

                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                                <span>June 28, 2026</span>
                                <span>•</span>
                                <span>5 Min Read</span>
                            </div>

                            <h3 className="font-semibold text-lg mt-2 line-clamp-2">
                                iPhone 17 Pro Max vs. S26 Ultra: A Powerhouse Performance Showdown
                            </h3>

                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                Our laboratory benchmark results reveal remarkable real-world
                                efficiency and performance.
                            </p>

                            <button className="mt-auto pt-4 text-sm font-medium hover:text-sky-600">
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default BlogSection