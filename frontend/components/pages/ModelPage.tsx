'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import SpecificationSection from '../section/SpecificationSection';
import TrendingPhoneCard from '../global/cards/TrendingPhoneCard';
import FaqSection from '../shared/FaqSection';
import {
    FaCamera,
    FaBatteryFull,
    FaMobileScreen,
    FaMemory,
    FaMicrochip,
    FaRulerCombined,
} from "react-icons/fa6";
import { competitorModels } from '@/app/action';
import Loading from '../layout/Loading';
import EstimatedPriceCard from '../global/cards/EstimatedPriceCard';


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




const ModelPage = ({ details }: any) => {
    const priceObj = details?.content?.details.estimatedPrice
    const phoneSpecifications = [
        {
            id: 1,
            title: "Camera",
            value: `${details.specifications.camera.rear[0].megapixel.toFixed(1)} MP Camera`,
            icon: FaCamera,
        },
        {
            id: 2,
            title: "Battery",
            value: ` ${details.specifications.battery.capacity} ${details.specifications.battery.type} Battery`,
            icon: FaBatteryFull,
        },
        {
            id: 3,
            title: "Display",
            value: `${details.specifications.display.size} ${details.specifications.display.type}`,
            icon: FaMobileScreen,
        },
        {
            id: 4,
            title: "Processor",
            value: `${details.specifications.performance.chipset.name}`,
            icon: FaMicrochip,
        },
        {
            id: 5,
            title: "Dimensions",
            value: `${details.specifications.design.dimensions.height} mm × ${details.specifications.design.dimensions.width} mm × ${details.specifications.design.dimensions.thickness} mm`,
            icon: FaRulerCombined,
        },
        {
            id: 6,
            title: "Memory",
            value: "6GB RAM, ROM Storage",
            icon: FaMemory,
        },
    ];

    const [selectedTab, setSelectedTab] = useState('info')
    const [selectedImage, setSelectedImage] = useState(`${process.env.NEXT_PUBLIC_URL_IMAGES}/${details.images[0].img}`);
    const [competitors, setCompetitors] = useState<any[]>([])

    const fetchCompetitors = async () => {
        try {
            const models = await competitorModels({ max: priceObj.usa.max, min: priceObj.usa.min })
            setCompetitors(models)
        } catch (error) {
            console.log(`Error in fetching competitors.`, error)
        }
    };

    useEffect(() => {
        fetchCompetitors()
    }, [])

    return (
        <div className="">
            {/* Title */}
            <div className='bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
                <div className='container-1 mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                        {details.brandId.name} {details.name}
                    </h2>
                </div>
            </div>

            {/* Menu Tabs */}
            <div className='sticky top-18 z-50 bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
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
                                {details.images.map((i: { img: string, alt: string }) => (
                                    <div
                                        key={i.img}
                                        onClick={() => setSelectedImage(i.img)}
                                        className={`shrink-0 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${selectedImage === i.img
                                            ? 'border-blue-600 shadow-md'
                                            : 'border-transparent hover:border-gray-300'
                                            }`}
                                    >
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${i.img}`}
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
                                        src={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${details.images[0].img}`}
                                        alt={details.images[0].alt}
                                        className='w-full h-full object-cover p-1'
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
                                        <span className='text-2xl font-black text-indigo-600'>{`$ ${details.content.details.estimatedPrice.usa.min ?? 0} - ${details.content.details.estimatedPrice.usa.max} `}</span>
                                    </div>

                                    <div className='flex  gap-2'>
                                        <Link href={'#price'} className='px-4 py-2 bg-orange-500 text-white rounded-lg font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200'>
                                            View All Prices
                                        </Link>
                                        {/* <button className='px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200'>
                                            Compare Now
                                        </button> */}
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
                    {/* Estimated price cards */}
                    {priceObj.usa && (
                        <>

                            <EstimatedPriceCard price={`${priceObj.usa.currency} ${priceObj.usa.min} - ${priceObj.usa.max}`}
                                region='USA'
                            />
                        </>
                    )}

                    {priceObj.uk && (
                        <>

                            <EstimatedPriceCard price={`${priceObj.uk.currency} ${priceObj.uk.min} - ${priceObj.uk.max}`}
                                region='UK'
                            />
                        </>
                    )}

                    {priceObj.canada && (
                        <>

                            <EstimatedPriceCard price={`${priceObj.canada.currency} ${priceObj.canada.min} - ${priceObj.canada.max}`}
                                region='Canada'
                            />
                        </>
                    )}

                    {priceObj.china && (
                        <>

                            <EstimatedPriceCard price={`${priceObj.china.currency} ${priceObj.china.min} - ${priceObj.china.max}`}
                                region='China'
                            />
                        </>
                    )}

                </div>
            </div>

            {/* Specification section */}
            <div id='spec'>

                <SpecificationSection spec={details.specifications} name={details.name} />
            </div>


            {/* Compitator section */}

            <div id='competitors' className='container-1 mx-auto '>
                <h2 className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                    Top Competitors
                </h2>


                {competitors.length <= 0 && (<div className='flex items-center justify-center'>
                    <div className='text-center text-lg'>
                        No Compitators found.
                    </div>
                </div>)}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mt-4 md:mt-6'>

                    {competitors.map((c, i) => (
                        <div key={i}>
                            <TrendingPhoneCard image={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${c?.images?.[0]?.img}`} name={c?.name} price={`$ ${c?.content?.details.estimatedPrice?.usa?.min}`}  link={`/model/${c?.slug}`} />
                        </div>
                    ))}
                </div>



            </div>

            {/* Review Section */}
            <section
                id="reviews"
                className="container-1 mx-auto px-4 py-10 md:py-16"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="border-l-4 border-blue-600 pl-5 mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                            Expert Review
                        </p>

                        <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                            Review on {details.name}
                        </h2>
                    </div>

                    <article className="max-w-4xl">
                        <p className="text-base md:text-lg leading-8 text-slate-700 whitespace-pre-line">
                            {details.content.details.humanReview}
                        </p>
                    </article>
                </div>
            </section>

            {/* Divider */}
            <div className="container-1 mx-auto px-4">
                <div className="max-w-5xl mx-auto border-t border-slate-200" />
            </div>

            {/* AI Review Section */}
            <section
                id="ai-review"
                className="container-1 mx-auto px-4 py-10 md:py-16"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="border-l-4 border-emerald-600 pl-5 mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                            AI Analysis
                        </p>

                        <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                            AI Review on {details.name}
                        </h2>
                    </div>

                    <article className="max-w-4xl">
                        <p className="text-base md:text-lg leading-8 text-slate-700 whitespace-pre-line">
                            {details.content.details.aiReview}
                        </p>
                    </article>
                </div>
            </section>

            {/* Faqs section */}

            <section id='faqs' className=''>
                <div className='container-1 mx-auto py-10 lg:py-18'>
                    <div className='mb-4 md:mb-6  '>
                        <h2 className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                            FAQ's About {details.name}
                        </h2>
                    </div>
                    <div>
                        <FaqSection faqs={details.content.faqs} />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ModelPage

