import ModelPage from '@/components/pages/ModelPage'
import React from 'react'

const page = async ({ params }: any) => {
    const { model } = await params
    return (
        <div>
            <ModelPage params={model} />
        </div>
    )
}

export default page