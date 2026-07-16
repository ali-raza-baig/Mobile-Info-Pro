'use client'
import React, { useState } from 'react'
import { 
  FiDollarSign, 
  FiSmartphone, 
  FiCamera, 
  FiBattery, 
  FiCrosshair, 
  FiHardDrive, 
  FiCpu, 
  FiRadio 
} from 'react-icons/fi'

// Type definitions for the filter state
interface FilterState {
  priceRange: number
  brands: string[]
  camera: string
  battery: string
  gaming: string
  storage: string
  displaySize: number
  ram: string
  premium5G: boolean
  os: string
}

const FindPhoneSection = () => {
    // 1. All Required States
    const [filters, setFilters] = useState<FilterState>({
        priceRange: 600,
        brands: [],
        camera: '',
        battery: '',
        gaming: '',
        storage: '',
        displaySize: 6.1,
        ram: '8GB',
        premium5G: false,
        os: ''
    })

    // Handle Multi-select for Brands
    const handleBrands = (value: string) => {
        setFilters(prev => ({
            ...prev,
            brands: prev.brands.includes(value)
                ? prev.brands.filter(b => b !== value)
                : [...prev.brands, value]
        }))
    }

    // Generic handler for simple states
    const updateFilter = (key: keyof FilterState, value: any) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    // Clear all filters handler
    const handleReset = () => {
        setFilters({
            priceRange: 600,
            brands: [],
            camera: '',
            battery: '',
            gaming: '',
            storage: '',
            displaySize: 6.1,
            ram: '8GB',
            premium5G: false,
            os: ''
        })
    }

    return (
        <div className='w-full bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8'>
            {/* Header Section */}
            <div className='max-w-3xl mx-auto text-center mb-12'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight'>
                    Find the {' '}
                    <span className='bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent'>
                        Perfect Smartphone
                    </span>{' '}
                    for Your Lifestyle
                </h2>
                <p className='text-sm sm:text-base md:text-lg mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed'>
                    Answer a few simple questions or use powerful filters to discover smartphones that match your budget, camera preferences, gaming needs, and daily usage.
                </p>
            </div>

            {/* Filter Main Panel */}
            <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-slate-100 p-6 md:p-8 shadow-xl shadow-slate-200/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">

                    {/* 1. Budget Filter */}
                    <div className="flex flex-col justify-between space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="font-semibold text-slate-700 text-sm flex items-center gap-2">
                                <FiDollarSign className="text-blue-600" /> Budget
                            </label>
                            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
                                ${filters.priceRange}
                            </span>
                        </div>
                        <input
                            type="range"
                            min={200}
                            max={1500}
                            step={50}
                            value={filters.priceRange}
                            onChange={(e) => updateFilter('priceRange', Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                        <div className="flex justify-between text-xs font-medium text-slate-400">
                            <span>$200</span>
                            <span>$1500+</span>
                        </div>
                    </div>

                    {/* 2. Brand Filter */}
                    <div>
                        <label className="font-semibold text-slate-700 text-sm mb-3 flex items-center gap-2">
                            <FiSmartphone className="text-blue-600" /> Brand
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                                { name: "Apple", value: "apple" },
                                { name: "Samsung", value: "samsung" },
                                { name: "Google", value: "google" },
                                { name: "OnePlus", value: "oneplus" },
                                { name: "Xiaomi", value: "xiaomi" },
                                { name: "Nothing", value: "nothing" },
                            ].map((b) => {
                                const isSelected = filters.brands.includes(b.value);
                                return (
                                    <button
                                        key={b.value}
                                        type="button"
                                        onClick={() => handleBrands(b.value)}
                                        className={`rounded-full px-3 py-1 text-xs font-medium border transition-all duration-200 ${
                                            isSelected
                                                ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                    >
                                        {b.name}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* 3. Camera Filter */}
                    <div>
                        <label className="font-semibold text-slate-700 text-sm mb-3 flex items-center gap-2">
                            <FiCamera className="text-blue-600" /> Camera Setup
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                                { name: "Excellent", value: "excellent" },
                                { name: "Very Good", value: "veryGood" },
                                { name: "Good", value: "good" },
                            ].map((item) => {
                                const isSelected = filters.camera === item.value;
                                return (
                                    <button
                                        key={item.value}
                                        type="button"
                                        onClick={() => updateFilter('camera', isSelected ? '' : item.value)}
                                        className={`rounded-full px-3 py-1 text-xs font-medium border transition-all duration-200 ${
                                            isSelected
                                                ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* 4. Battery Filter */}
                    <div>
                        <label className="font-semibold text-slate-700 text-sm mb-3 flex items-center gap-2">
                            <FiBattery className="text-blue-600" /> Battery Life
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                            {["All-Day", "1.5 Days", "2+ Days"].map((item) => {
                                const isSelected = filters.battery === item;
                                return (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => updateFilter('battery', isSelected ? '' : item)}
                                        className={`rounded-full px-3 py-1 text-xs font-medium border transition-all duration-200 ${
                                            isSelected
                                                ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* 5. Gaming Filter */}
                    <div>
                        <label className="font-semibold text-slate-700 text-sm mb-3 flex items-center gap-2">
                            <FiCrosshair className="text-blue-600" /> Gaming Performance
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                            {["Pro Gamer", "Casual", "Basic"].map((item) => {
                                const isSelected = filters.gaming === item;
                                return (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => updateFilter('gaming', isSelected ? '' : item)}
                                        className={`rounded-full px-3 py-1 text-xs font-medium border transition-all duration-200 ${
                                            isSelected
                                                ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* 6. Storage Filter */}
                    <div>
                        <label className="font-semibold text-slate-700 text-sm mb-3 flex items-center gap-2">
                            <FiHardDrive className="text-blue-600" /> Storage Capacity
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                            {["128GB", "256GB", "512GB", "1TB"].map((item) => {
                                const isSelected = filters.storage === item;
                                return (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => updateFilter('storage', isSelected ? '' : item)}
                                        className={`rounded-full px-3 py-1 text-xs font-medium border transition-all duration-200 ${
                                            isSelected
                                                ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* 7. Display Filter */}
                    <div className="flex flex-col justify-between space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="font-semibold text-slate-700 text-sm">
                                Display Size
                            </label>
                            <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                {filters.displaySize}"
                            </span>
                        </div>
                        <input
                            type="range"
                            min={5.8}
                            max={6.9}
                            step={0.1}
                            value={filters.displaySize}
                            onChange={(e) => updateFilter('displaySize', Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                        <div className="flex justify-between text-xs font-medium text-slate-400">
                            <span>5.8"</span>
                            <span>6.9"</span>
                        </div>
                    </div>

                    {/* 8. RAM Filter */}
                    <div>
                        <label className="font-semibold text-slate-700 text-sm mb-2 flex items-center gap-2">
                            <FiCpu className="text-blue-600" /> RAM Capacity
                        </label>
                        <select 
                            value={filters.ram}
                            onChange={(e) => updateFilter('ram', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 outline-none transition focus:border-blue-500 focus:bg-white"
                        >
                            <option value="8GB">8GB</option>
                            <option value="12GB">12GB</option>
                            <option value="16GB+">16GB+</option>
                        </select>
                    </div>

                    {/* 9. OS Filter */}
                    <div>
                        <label className="font-semibold text-slate-700 text-sm mb-3 block">
                            Operating System
                        </label>
                        <div className="flex gap-2">
                            {["iOS", "Android"].map((osType) => {
                                const isSelected = filters.os === osType;
                                return (
                                    <button
                                        key={osType}
                                        type="button"
                                        onClick={() => updateFilter('os', isSelected ? '' : osType)}
                                        className={`flex-1 rounded-full py-1.5 text-xs font-medium border transition-all duration-200 ${
                                            isSelected
                                                ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        {osType}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* 10. Premium 5G Toggle */}
                    <div className="flex sm:col-span-1 items-center justify-between sm:justify-start sm:gap-6 pt-2">
                        <label className="font-semibold text-slate-700 text-sm flex items-center gap-2 select-none cursor-pointer" htmlFor="5g-toggle">
                            <FiRadio className="text-blue-600" /> Premium 5G Support
                        </label>
                        <label className="relative inline-flex cursor-pointer items-center">
                            <input 
                                id="5g-toggle"
                                type="checkbox" 
                                checked={filters.premium5G}
                                onChange={(e) => updateFilter('premium5G', e.target.checked)}
                                className="peer sr-only" 
                            />
                            <div className="h-6 w-11 rounded-full bg-slate-200 peer-checked:bg-blue-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow-sm after:transition-all peer-checked:after:translate-x-5 peer-focus:ring-2 peer-focus:ring-blue-100"></div>
                        </label>
                    </div>

                </div>

                {/* Footer Controls */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-end items-center gap-3">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
                    >
                        Reset Filters
                    </button>
                    <button
                        type="button"
                        onClick={() => console.log('Searching matches with payload:', filters)}
                        className="w-full sm:w-auto rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-2.5 shadow-md transition-all duration-200 active:scale-98"
                    >
                        Search Matches
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FindPhoneSection