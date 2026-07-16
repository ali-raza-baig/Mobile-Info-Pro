import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { phoneCategories } from '@/public/constant/constant'
import TrendingPhoneCard from '@/components/global/cards/TrendingPhoneCard'

const TopRatedSection = () => {
    return (
        <>
            {/* Top Rated Section */}
            <div className='container-1 mx-auto py-10 lg:py-18 '>
                <div className='max-w-3xl mx-auto text-center'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight'>
                        Top Rated  {' '}
                        <span className='bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                            Smartphone
                        </span>{' '}
                        of the Year
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg mt-4 md:mt-6 px-3'>
                        Explore the best-performing smartphones ranked by our expert evaluations, and community ratings across camera, performance, battery, display, and overall value.
                    </p>
                </div>


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

            {/* Phones by category */}
            <div className='bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100 overflow-hidden'>
                <div className='container-1 mx-auto py-10 lg:py-18 '>
                    <div className='max-w-3xl mx-auto text-center'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight'>
                            Choose the {' '}
                            <span className='bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                                Best Phone
                            </span>{' '}
                            for Your Needs
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg mt-4 md:mt-6 px-3'>
                            Whether you're a gamer, photographer, student, or business professional, we've curated the best smartphones for every lifestyle and budget.
                        </p>
                    </div>


                    <div className='flex items-center justify-center flex-wrap gap-2 mt-4 md:mt-6'>
                        {phoneCategories.map((c) => (
                            <div key={c.title} className='bg-white-1 p-2 rounded-md flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1.5'>
                                <c.icon className='text-dark-blue text-2xl md:text-4xl lg:text-5xl shrink-0' />
                                <span className='font-medium text-xs sm:text-sm md:text-base leading-tight text-gray-600'>{c.title}</span>
                            </div>
                        ))}

                    </div>



                </div>
            </div>
        </>
    )
}

export default TopRatedSection