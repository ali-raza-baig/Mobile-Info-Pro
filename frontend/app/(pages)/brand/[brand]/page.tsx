import BrandPage from '@/components/pages/BrandPage'
import React from 'react'

const page = async ({ params }: any) => {
    const { brand } = await params

    return (
        <>
            <BrandPage params={params} />
        </>
    )
}

export default page