const EstimatedPriceCard = ({ price, region, store, storeLink }: { price: string, region: string, store?: string, storeLink?: string }) => {
    return (
        <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6'>
            <div className='grid grid-cols-2 gap-4 '>
                {/* Left Column - Storage, Price, Store */}
                <div className='space-y-3'>
                    {/* Storage */}
                    {/* <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                        <span className='font-medium text-gray-600'>Storage</span>
                        <span className='text-gray-300'>—</span>
                        <span className='font-semibold text-gray-900'>-----</span>
                    </div> */}


                    {/* Price */}
                    <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                        <span className='font-medium text-gray-600'>Price</span>
                        <span className='text-gray-300'>—</span>
                        <span className='font-semibold text-indigo-600 text-lg'>{price}</span>
                    </div>


                </div>

                {/* Right Column - Region and Action */}
                <div className=''>
                    {/* Region */}
                    <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                        <span className='font-medium text-gray-600'>Region</span>
                        <span className='text-gray-300'>—</span>
                        <span className='font-semibold text-gray-900'>{region}</span>
                    </div>

                    {/* Store */}

                    {/* <div className='flex-1 flex flex-wrap items-center gap-1 text-sm sm:text-base'>
                        <span className='font-medium text-gray-600'>Store</span>
                        <span className='text-gray-300'>—</span>
                        <span className='font-semibold text-gray-900'>{store ? store : 'Amazon'}</span>
                    </div> */}
                    {/* Action Button */}
                    {/* <div className='mt-4 sm:mt-6'>
                        <Link href={storeLink ? storeLink : '/'} className='text-white-1 bg-dark-blue px-4 py-2 rounded-md'>
                            <span className=''>Go to Store</span>

                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default EstimatedPriceCard;