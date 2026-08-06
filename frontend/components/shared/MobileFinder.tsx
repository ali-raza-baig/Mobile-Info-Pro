'use client'
import brands from '@/public/constant/brands'
import React, { useState } from 'react'
import { FaFilter, FaSearch } from 'react-icons/fa'
import PhoneCard from '../global/cards/PhoneCard'

type IProps = {
    brand?: string
    series?: string
    sideBar?: string
}

const MobileFinder = ({ brand, series, sideBar }: IProps) => {
    const [search, setSearch] = useState('')
    const [seriesName, setSeriesName] = useState(String(series) || 'All')

    const [brandName, setBrandName] = useState("All");
    const [brandQuery, setBrandQuery] = useState("");
    const [brandOpen, setBrandOpen] = useState(false);

    const [sidebar, setSidebar] = useState(sideBar || false)

    const filteredBrands = [{ id: 0, brandName: "All" }, // add All manually
    ...brands,
    ].filter((item) =>
        item.brandName.toLowerCase().includes(brandQuery.toLowerCase())
    );

    return (
        <div className=''>
            {/* Side bar filter */}
            <div></div>

            {/* Search bar and mobile cards */}
            <div>
                {/* Search bar etc. */}
                <div className='flex gap-4 items-center flex-col-reverse md:flex-row md:justify-evenly'>
                    <div className='flex items-start m-1  gap-1 bg-white py-2 px-2 rounded-2xl outline outline-dark-emerald'>
                        <FaSearch className='text-2xl shrink-0 text-gray-400' />
                        <input type="text" placeholder='search your mobile'
                            value={search} onChange={e => setSearch(e.target.value)}
                            className='w-full outline-none bg-transparent placeholder:text-gray-600'
                        />
                    </div>
                    <div className='flex items-center gap-2 justify-between'>
                        <div className="relative w-44 flex items-center gap-2">
                            <label className="mb-1 block text-sm font-medium">
                                Brand:
                            </label>

                            <input
                                type="text"
                                placeholder="Search Brand..."
                                value={brandOpen ? brandQuery : brandName}
                                onFocus={() => {
                                    setBrandOpen(true);
                                    setBrandQuery("");
                                }}
                                onChange={(e) => {
                                    setBrandQuery(e.target.value);
                                    setBrandOpen(true);
                                }}
                                className="w-full rounded-lg  bg-divider px-3 py-2 outline-none focus:border-emerald-500"
                            />

                            {brandOpen && (
                                <div className="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-lg border bg-white shadow-xl">
                                    {filteredBrands.length ? (
                                        filteredBrands.map((item) => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => {
                                                    setBrandName(item.brandName);
                                                    setBrandQuery(item.brandName);
                                                    setBrandOpen(false);
                                                }}
                                                className="block w-full border-b px-4 py-2 text-left hover:bg-emerald-50"
                                            >
                                                {item.brandName}
                                            </button>
                                        ))
                                    ) : (
                                        <div className="px-4 py-3 text-gray-500">
                                            No brand found
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className='flex items-center gap-1 rounded-lg bg-divider p-2 px-4 cursor-pointer'>
                            <FaFilter /> <span>Filter</span>
                        </div>
                    </div>
                </div>

                {/* Mobile card */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8  my-4 md:my-6'>
                    <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Samsung Galaxy S24 Ultra' badge='new' price='5000' />

                    <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='new' price='5000' />

                    <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='new' price='5000' />

                    <PhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZASmGAKqkOlHPGGNcumEnRI661LmbIizd0V_7qhp5zA&s=10' name='Galaxy S24 Ultra' badge='new' price='5000' />

                </div>
            </div>
        </div>

    )
}

export default MobileFinder