'use client';
import { useModel } from '@/context/ModelContext';
import React, { useState } from 'react';
import TrendingPhoneCard from '../global/cards/TrendingPhoneCard';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CollectionPage = () => {
    // State for mobile filter panel toggle
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const searchParams = useSearchParams();
    const [search, setSearch] = useState<string>(searchParams.get('search') ?? '')
    const router = useRouter();
    const pathname = usePathname();
    // Sort state
    const [sortBy, setSortBy] = useState('Sort By');

    // Availability filters
    const [availability, setAvailability] = useState({
        inStock: false,
        preOrder: false,
        outOfStock: false,
    });

    // Price range
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    // Color filters
    const [colors, setColors] = useState({
        red: false,
        blue: false,
        green: false,
        orange: false,
        purple: false,
        teal: false,
    });

    // Handlers for availability
    const handleAvailabilityChange = (e: any) => {
        const { id, checked } = e.target;
        // Map checkbox id to state key
        const keyMap: any = {
            FilterInStock: 'inStock',
            FilterPreOrder: 'preOrder',
            FilterOutOfStock: 'outOfStock',
        };
        setAvailability((prev) => ({
            ...prev,
            [keyMap[id]]: checked,
        }));
        handleQuery({ key: 'avalibility', value: String(availability) })
    };

    // Reset availability
    const resetAvailability = () => {
        setAvailability({
            inStock: false,
            preOrder: false,
            outOfStock: false,
        });
        // Also uncheck checkboxes by resetting state will re-render with checked prop
    };

    // Handlers for colors
    const handleColorChange = (e: any) => {
        const { id, checked } = e.target;
        const keyMap: any = {
            FilterRed: 'red',
            FilterBlue: 'blue',
            FilterGreen: 'green',
            FilterOrange: 'orange',
            FilterPurple: 'purple',
            FilterTeal: 'teal',
        };
        setColors((prev) => ({
            ...prev,
            [keyMap[id]]: checked,
        }));
    };

    // Reset colors
    const resetColors = () => {
        setColors({
            red: false,
            blue: false,
            green: false,
            orange: false,
            purple: false,
            teal: false,
        });
    };

    // Reset price
    const resetPrice = () => {
        setPriceFrom('');
        setPriceTo('');
    };

    // Count selected availability
    const availabilityCount = Object.values(availability).filter(Boolean).length;
    const colorCount = Object.values(colors).filter(Boolean).length;

    // Set query parameters


    const handleQuery = ({ key, value }: { key: string, value: string }) => {
        const params = new URLSearchParams(searchParams.toString())
        if (!value) {
            params.delete(key)
        } else {
            params.set(key, value)
        }
        router.push(`${pathname}/?${params}`)
    }


    const { models } = useModel()
    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                </header>

                {/* Mobile filter toggle */}
                <div className="mt-8 block lg:hidden">
                    <button
                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                    >
                        <span className="text-sm font-medium">Filters & Sorting</span>
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 rtl:rotate-180"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                    {/* Filters panel - hidden on mobile unless toggled */}
                    <div
                        className={`space-y-4 ${mobileFiltersOpen ? 'block' : 'hidden'
                            } lg:block`}
                    >
                        {/* Sort */}
                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
                                Sort By
                            </label>
                            <select
                                id="SortBy"
                                className="mt-1 rounded-sm border-gray-300 text-sm"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option>Sort By</option>
                                <option value="Title, DESC">Title, DESC</option>
                                <option value="Title, ASC">Title, ASC</option>
                                <option value="Price, DESC">Price, DESC</option>
                                <option value="Price, ASC">Price, ASC</option>
                            </select>
                        </div>

                        {/* Search Box */}
                        <div>
                            <p className="block text-xs font-medium text-gray-700">Search </p>
                            <div className="mt-1 space-y-2 flex flex-col">
                                <input type="text" name='search' placeholder='Search By keywords' value={search} onChange={e => setSearch(e.target.value)}
                                    className='py-2 px-1 rounded-lg outline-sky-blue focus:outline-dark-blue border border-dark-blue'
                                />
                                <button className='text-white bg-dark-blue font-black py-1 px-2 rounded-md' onClick={() => handleQuery({ key: 'search', value: search })}>
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Filters */}
                        <div>
                            <p className="block text-xs font-medium text-gray-700">Filters</p>
                            <div className="mt-1 space-y-2">
                                {/* Availability */}
                                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                        <span className="text-sm font-medium">Availability</span>
                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700">{availabilityCount} Selected</span>
                                            <button
                                                type="button"
                                                className="text-sm text-gray-900 underline underline-offset-4"
                                                onClick={resetAvailability}
                                            >
                                                Reset
                                            </button>
                                        </header>
                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterInStock"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={availability.inStock}
                                                        onChange={handleAvailabilityChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">In Stock (5+)</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPreOrder"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={availability.preOrder}
                                                        onChange={handleAvailabilityChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">Pre Order (3+)</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOutOfStock"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={availability.outOfStock}
                                                        onChange={handleAvailabilityChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">Out of Stock (10+)</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>

                                {/* Price */}
                                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                        <span className="text-sm font-medium">Price</span>
                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700">The highest price is $600</span>
                                            <button
                                                type="button"
                                                className="text-sm text-gray-900 underline underline-offset-4"
                                                onClick={resetPrice}
                                            >
                                                Reset
                                            </button>
                                        </header>
                                        <div className="border-t border-gray-200 p-4">
                                            <div className="flex justify-between gap-4">
                                                <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>
                                                    <input
                                                        type="number"
                                                        id="FilterPriceFrom"
                                                        placeholder="From"
                                                        className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                                                        value={priceFrom}
                                                        onChange={(e) => setPriceFrom(e.target.value)}
                                                    />
                                                </label>
                                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>
                                                    <input
                                                        type="number"
                                                        id="FilterPriceTo"
                                                        placeholder="To"
                                                        className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                                                        value={priceTo}
                                                        onChange={(e) => setPriceTo(e.target.value)}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                {/* Colors */}
                                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                        <span className="text-sm font-medium">Colors</span>
                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700">{colorCount} Selected</span>
                                            <button
                                                type="button"
                                                className="text-sm text-gray-900 underline underline-offset-4"
                                                onClick={resetColors}
                                            >
                                                Reset
                                            </button>
                                        </header>
                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterRed"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={colors.red}
                                                        onChange={handleColorChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">Red</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterBlue"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={colors.blue}
                                                        onChange={handleColorChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">Blue</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterGreen"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={colors.green}
                                                        onChange={handleColorChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">Green</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterOrange" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOrange"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={colors.orange}
                                                        onChange={handleColorChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">Orange</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterPurple" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPurple"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={colors.purple}
                                                        onChange={handleColorChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">Purple</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterTeal" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterTeal"
                                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                        checked={colors.teal}
                                                        onChange={handleColorChange}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">Teal</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Product grid */}
                    <div className="lg:col-span-3">
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {models?.popular?.map((p, i) => (
                                <div key={i}>
                                    <TrendingPhoneCard image={`${process.env.NEXT_PUBLIC_URL_IMAGES}/${p.images[0].img}`} name={p.name} price={`$ ${p?.content?.details.estimatedPrice.usa.min ?? 0}`} spec='' link={`/model/${p.slug}`} />
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionPage;