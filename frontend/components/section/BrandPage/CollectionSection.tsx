import MobileFinder from '@/components/shared/MobileFinder'
import React from 'react'

const CollectionSection = ({name}:{name:string}) => {
    return (
        <div className="container-1 relative z-10 py-12 md:py-20 px-4 sm:px-6">

            <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                {name} Phone Collection
            </h1>

            <div className='my-4 md:my-6'>
                <MobileFinder />
            </div>

        </div>
    )
}

export default CollectionSection