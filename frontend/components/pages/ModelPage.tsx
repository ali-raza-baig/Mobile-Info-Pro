'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { samsungGalaxyS24, phoneSpecifications, demoImages } from '@/public/constant/model.test'
import SpecificationSection from '../section/SpecificationSection';
import TrendingPhoneCard from '../global/cards/TrendingPhoneCard';
import FaqSection from '../shared/FaqSection';


const samsungFaqs: any[] = []
const menu = [
    { name: 'Info', value: 'info' },
    { name: 'Price', value: 'price' },
    { name: 'Spec', value: 'spec' },
    { name: 'Competitors', value: 'competitors' },
    { name: 'Ai Review', value: 'ai-review' },
    { name: 'Reviews', value: 'reviews' },
    { name: "Faq's", value: 'faqs' },
]




const ModelPage = ({ params }: any) => {
    const [selectedTab, setSelectedTab] = useState('info')
    const [selectedImage, setSelectedImage] = useState(demoImages[0]);

    return (
        <div className="">
            {/* Title */}
            <div className='bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
                <div className='container-1 mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                        Samsung Galaxy S24 Ultra
                    </h2>
                </div>
            </div>

            {/* Menu Tabs */}
            <div className='sticky top-16 z-50 bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
                <div className='container-1 mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center md:justify-center overflow-x-auto gap-1 sm:gap-2 py-2 scrollbar-hide'>
                        {menu.map((m) => (
                            <Link href={`#${m.value}`}
                                key={m.value}
                                onClick={() => setSelectedTab(m.value)}
                                className={`whitespace-nowrap py-2 px-3 sm:px-4 text-sm sm:text-base font-medium rounded-lg transition-colors duration-200 ${selectedTab === m.value
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {m.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Model Page Hero section */}
            <div id='info' className=' container-1 mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
                    {/* Images side */}
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            {/* Thumbnails */}
                            <div className='flex sm:flex-col gap-2 sm:gap-3 order-2 sm:order-1 overflow-x-auto sm:overflow-y-auto sm:max-h-100 scrollbar-none'>
                                {demoImages.map((i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedImage(i)}
                                        className={`shrink-0 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${selectedImage === i
                                            ? 'border-blue-600 shadow-md'
                                            : 'border-transparent hover:border-gray-300'
                                            }`}
                                    >
                                        <img
                                            src={i}
                                            className='w-full h-full object-cover'
                                            alt="Phone thumbnail"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className='flex-1 order-1 sm:order-2'>
                                <div className='bg-white rounded-xl shadow-sm overflow-hidden aspect-4/3 sm:aspect-auto sm:h-100'>
                                    <img
                                        src={selectedImage}
                                        alt="Phone main view"
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className='w-full lg:w-1/2'>
                        <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6'>
                            <div className='grid grid-cols-1 gap-3'>
                                {phoneSpecifications.map((s) => (
                                    <div key={s.id} className='flex items-center gap-3'>
                                        <div className='shrink-0 p-2 bg-indigo-50 rounded-lg'>
                                            <s.icon className='text-xl text-indigo-600' />
                                        </div>
                                        <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                                            <span className='font-medium text-gray-700'>{s.title}</span>
                                            <span className='text-gray-400'>—</span>
                                            <span className='font-semibold text-gray-900'>{s.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-6 pt-6 border-t border-gray-100'>
                                <div className='flex flex-wrap items-center justify-between gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <span className='text-sm font-medium text-gray-600'>Price</span>
                                        <span className='text-gray-300'>—</span>
                                        <span className='text-2xl font-black text-indigo-600'>$300</span>
                                    </div>

                                    <div className='flex  gap-2'>
                                        <button className='px-4 py-2 bg-orange-500 text-white rounded-lg font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200'>
                                            View All Prices
                                        </button>
                                        <button className='px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200'>
                                            Compare Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* All Pricing section */}

            <div id='price' className='container-1 mx-auto px-1 sm:px-4 lg:px-6 py-4 '>
                <h2 className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                    Available Variants & Pricing
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6'>
                        <div className='grid grid-cols-2 gap-4 '>
                            {/* Left Column - Storage, Price, Store */}
                            <div className='space-y-3'>
                                {/* Storage */}
                                <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                                    <span className='font-medium text-gray-600'>Storage</span>
                                    <span className='text-gray-300'>—</span>
                                    <span className='font-semibold text-gray-900'>6GB | 128GB</span>
                                </div>


                                {/* Price */}
                                <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                                    <span className='font-medium text-gray-600'>Price</span>
                                    <span className='text-gray-300'>—</span>
                                    <span className='font-semibold text-indigo-600 text-lg'>$3,000</span>
                                </div>


                            </div>

                            {/* Right Column - Region and Action */}
                            <div className=''>
                                {/* Region */}
                                <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                                    <span className='font-medium text-gray-600'>Region</span>
                                    <span className='text-gray-300'>—</span>
                                    <span className='font-semibold text-gray-900'>UK</span>
                                </div>

                                {/* Store */}

                                <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                                    <span className='font-medium text-gray-600'>Store</span>
                                    <span className='text-gray-300'>—</span>
                                    <span className='font-semibold text-gray-900'>Amazon</span>
                                </div>
                                {/* Action Button */}
                                <div className='mt-4 sm:mt-6'>
                                    <Link href={'/'} className='text-white-1 bg-dark-blue px-4 py-2 rounded-md'>
                                        <span className=''>Go to Store</span>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Specification section */}
            <div id='spec'>

                <SpecificationSection />
            </div>


            {/* Compitator section */}

            <div id='competitors' className='container-1 mx-auto '>
                <h2 className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                    Top Compitators
                </h2>


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

            {/* Review Section */}
            <div id='reviews' className='container-1 mx-auto px-2'>
                <h2 className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                    Review on Galaxy S24
                </h2>
                <p className='text-start leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt quaerat qui ad minus illum quo praesentium, odit corrupti quia voluptatibus asperiores impedit libero similique est accusamus vero? Laborum temporibus officia nisi eius quos aspernatur ad, officiis harum tenetur maxime neque iure veniam sit! Sit reprehenderit recusandae vero. Id vel mollitia iusto vero dolores odio! Consequuntur doloribus ipsam, quisquam consectetur porro, similique odit dolores voluptatibus distinctio voluptas sapiente praesentium dignissimos inventore iure aperiam beatae obcaecati officia modi. Aut sed, reprehenderit quia, rerum in necessitatibus voluptatum praesentium fuga voluptate animi, porro temporibus fugiat ipsam perspiciatis aliquid. Cupiditate quo asperiores debitis optio, tempore necessitatibus voluptates iste ipsa quos exercitationem corrupti rem tempora assumenda alias adipisci accusamus ducimus reprehenderit ex. Sed minima ratione adipisci distinctio iusto blanditiis placeat similique, quo maiores repudiandae soluta corrupti obcaecati provident rerum corporis. Dolor rem sint recusandae doloremque incidunt ullam maiores eum repellendus dicta, quam libero distinctio vero voluptatem eveniet qui ipsum optio. Asperiores odio cum magni ex. Dicta repellat incidunt corrupti repudiandae dolore. In, sit repudiandae odio illum enim atque error suscipit aperiam voluptatibus voluptates sint molestias ex nostrum aut deleniti sunt quod, nemo voluptatem dolore debitis? Reprehenderit, pariatur quaerat alias aperiam quo error neque esse eaque.</p>
            </div>

            {/* AI Review Section */}
            <div id='ai-review' className='container-1 mx-auto px-2'>
                <h2 className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                    Ai  Review on Galaxy S24
                </h2>
                <p className='text-start leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt quaerat qui ad minus illum quo praesentium, odit corrupti quia voluptatibus asperiores impedit libero similique est accusamus vero? Laborum temporibus officia nisi eius quos aspernatur ad, officiis harum tenetur maxime neque iure veniam sit! Sit reprehenderit recusandae vero. Id vel mollitia iusto vero dolores odio! Consequuntur doloribus ipsam, quisquam consectetur porro, similique odit dolores voluptatibus distinctio voluptas sapiente praesentium dignissimos inventore iure aperiam beatae obcaecati officia modi. Aut sed, reprehenderit quia, rerum in necessitatibus voluptatum praesentium fuga voluptate animi, porro temporibus fugiat ipsam perspiciatis aliquid. Cupiditate quo asperiores debitis optio, tempore necessitatibus voluptates iste ipsa quos exercitationem corrupti rem tempora assumenda alias adipisci accusamus ducimus reprehenderit ex. Sed minima ratione adipisci distinctio iusto blanditiis placeat similique, quo maiores repudiandae soluta corrupti obcaecati provident rerum corporis. Dolor rem sint recusandae doloremque incidunt ullam maiores eum repellendus dicta, quam libero distinctio vero voluptatem eveniet qui ipsum optio. Asperiores odio cum magni ex. Dicta repellat incidunt corrupti repudiandae dolore. In, sit repudiandae odio illum enim atque error suscipit aperiam voluptatibus voluptates sint molestias ex nostrum aut deleniti sunt quod, nemo voluptatem dolore debitis? Reprehenderit, pariatur quaerat alias aperiam quo error neque esse eaque.</p>
            </div>

            {/* Faqs section */}

            <section id='faqs' className=''>
                <div className='container-1 mx-auto py-10 lg:py-18'>
                    <div className='mb-4 md:mb-6  '>
                        <h2 className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                            FAQ's About Samsung Phones
                        </h2>
                    </div>
                    <div>
                        <FaqSection faqs={samsungFaqs} />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ModelPage