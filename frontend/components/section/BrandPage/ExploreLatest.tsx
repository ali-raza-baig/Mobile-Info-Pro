'use client'
import { modelsByBrand } from '@/app/action';
import TrendingPhoneCard from '@/components/global/cards/TrendingPhoneCard'
import Loading from '@/components/layout/Loading';
import React, { useEffect, useState } from 'react'

const ExploreLatest = ({ name, id }: { name: string, id: string }) => {
    const [models, setModels] = useState<any[]>([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchModels = async () => {
        setLoading(true)
        try {
            const models = await modelsByBrand(id)
            setModels(models)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchModels()
    }, [id])
    return (

        <div className='container-1 mx-auto py-10 lg:py-18 '>
            <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                Latest {name} Smartphones
            </h1>
            <div className='text-center flex items-center justify-center'>
                {loading && (<>
                    <Loading />
                </>)}
                {error && (<>
                    <p className='text-center text-lg text-red-600 mt-6'>Error in Loading Models</p>
                </>)}
            </div>

            {models.length <= 1 ? <>
                <div className='text-center text-lg  mt-6'>
                    No Models found.
                </div>
            </> : (
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mt-4 md:mt-6'>
                    {models.map((m) => (
                        <div>
                            <TrendingPhoneCard link={`/model/${m.slug}`} image={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${m.images[0].img}`} name={m.name} price={`$ ${m.content.details.estimatedPrice.usa.min}`} />
                        </div>
                    ))}

                </div>
            )}
        </div>

    )
}

export default ExploreLatest