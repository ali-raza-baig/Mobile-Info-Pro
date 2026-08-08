'use client'
import { seriesByBrand } from '@/app/action'
import SeriesCard from '@/components/global/cards/SeriesCard'
import Loading from '@/components/layout/Loading'
import React, { useEffect, useState } from 'react'

const ExploreSeriesSection = ({ id, name }: { id: any, name: string }) => {
    const [series, setSeries] = useState<any[]>([])
    const [loading, setLoding] = useState<boolean>(false)

    const fetchSeries = async () => {
        setLoding(true)
        try {
            const seriesData = await seriesByBrand(id)
            setSeries(seriesData)
        } catch (error) {
            console.log(error)
        } finally {
            setLoding(false)
        }
    }

    useEffect(() => {
        fetchSeries()
    }, [])

    return (
        <section className='bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100 overflow-hidden'>
            <div className="container-1 relative z-10 py-6 md:py-10 px-4 sm:px-6">
                <div>
                    <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                        Explore {name} Series
                    </h1>
                </div>

                {series.length <= 0 && (<>
                    <Loading />
                </>)}

                {series.length >= 2 && (
                    <>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mt-4 md:mt-6'>
                            {series?.map((s) => (
                                <SeriesCard key={s._id} image={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${s.heroImage}`} name={s.name} link={s.slug} />
                            ))}
                            <div>

                            </div>
                        </div>
                    </>
                )}

            </div>
        </section>
    )
}

export default ExploreSeriesSection