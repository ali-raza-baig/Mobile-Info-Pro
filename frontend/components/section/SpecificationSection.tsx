import React from 'react'
import { samsungGalaxyS24 } from '@/public/constant/model.test'

const SpecificationSection = ({ }: any) => {
    // Helper function to format specifications
    const formatSpecValue = (value: any) => {
        if (typeof value === 'boolean') return value ? 'Yes' : 'No'
        if (value === null || value === undefined) return '—'
        return value
    }

    // Helper to render spec rows
    const SpecRow = ({ label, value }: { label: string, value: any }) => (
        <div className="flex items-center justify-between py-2.5 px-3 border-b border-indigo-50 last:border-0 hover:bg-indigo-50/30 transition-colors duration-200">
            <span className="text-sm font-medium text-gray-600">{label}</span>
            <span className="text-sm font-semibold text-gray-900 text-right">{formatSpecValue(value)}</span>
        </div>
    )

    // Helper to render array values with commas
    const renderArrayValue = (arr: string[]) => arr.join(', ')

    return (
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
            {/* Main Title */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                   <h2 className='text-center text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-black leading-tight text-slate-900 py-4 sm:py-6'>
                    Samsung Galaxy S24 Specifications
                </h2>
            </div>

            {/* Grid Layout for all sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                
                {/* ===== GENERAL SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            General
                        </h3>
                    </div>
                    <div className="divide-y divide-indigo-50">
                        <SpecRow label="Operating System" value={`${samsungGalaxyS24.general.os} ${samsungGalaxyS24.general.osVersion}`} />
                        <SpecRow label="Custom UI" value={samsungGalaxyS24.general.customUI} />
                        <SpecRow label="OS Updates" value={`${samsungGalaxyS24.general.softwareSupport.osUpdateYears} years`} />
                        <SpecRow label="Security Updates" value={`${samsungGalaxyS24.general.softwareSupport.securityUpdateYears} years`} />
                        <SpecRow label="Colors" value={renderArrayValue(samsungGalaxyS24.general.colors)} />
                        <SpecRow label="Box Contents" value={renderArrayValue(samsungGalaxyS24.general.boxContents)} />
                    </div>
                </div>

                {/* ===== DESIGN SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                            </svg>
                            Design
                        </h3>
                    </div>
                    <div className="divide-y divide-indigo-50">
                        <SpecRow label="Dimensions" value={`${samsungGalaxyS24.design.dimensions.height} × ${samsungGalaxyS24.design.dimensions.width} × ${samsungGalaxyS24.design.dimensions.thickness} ${samsungGalaxyS24.design.dimensions.unit}`} />
                        <SpecRow label="Weight" value={`${samsungGalaxyS24.design.weight.value} ${samsungGalaxyS24.design.weight.unit}`} />
                        <SpecRow label="Front Material" value={samsungGalaxyS24.design.buildMaterial.front} />
                        <SpecRow label="Back Material" value={samsungGalaxyS24.design.buildMaterial.back} />
                        <SpecRow label="Frame" value={samsungGalaxyS24.design.buildMaterial.frame} />
                        <SpecRow label="Water Resistance" value={samsungGalaxyS24.design.waterResistance} />
                    </div>
                </div>

                {/* ===== DISPLAY SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0v10h10V5H5z" clipRule="evenodd" />
                            </svg>
                            Display
                        </h3>
                    </div>
                    <div className="divide-y divide-indigo-50">
                        <SpecRow label="Type" value={samsungGalaxyS24.display.type} />
                        <SpecRow label="Size" value={`${samsungGalaxyS24.display.size.value} ${samsungGalaxyS24.display.size.unit}`} />
                        <SpecRow label="Resolution" value={`${samsungGalaxyS24.display.resolution.width} × ${samsungGalaxyS24.display.resolution.height} (${samsungGalaxyS24.display.resolution.label})`} />
                        <SpecRow label="Pixel Density" value={`${samsungGalaxyS24.display.pixelDensity.value} ${samsungGalaxyS24.display.pixelDensity.unit}`} />
                        <SpecRow label="Refresh Rate" value={`${samsungGalaxyS24.display.refreshRate.value} ${samsungGalaxyS24.display.refreshRate.unit}`} />
                        <SpecRow label="Peak Brightness" value={`${samsungGalaxyS24.display.brightness.peak} ${samsungGalaxyS24.display.brightness.unit}`} />
                        <SpecRow label="Protection" value={samsungGalaxyS24.display.protection} />
                        <SpecRow label="Features" value={renderArrayValue(samsungGalaxyS24.display.features)} />
                    </div>
                </div>

                {/* ===== PERFORMANCE SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Performance
                        </h3>
                    </div>
                    <div className="divide-y divide-indigo-50">
                        <SpecRow label="Chipset" value={samsungGalaxyS24.performance.chipset.name} />
                        <SpecRow label="Manufacturer" value={samsungGalaxyS24.performance.chipset.manufacturer} />
                        <SpecRow label="Fabrication" value={samsungGalaxyS24.performance.chipset.fabrication} />
                        <SpecRow label="CPU" value={`${samsungGalaxyS24.performance.cpu.cores} cores`} />
                        <SpecRow label="Clock Speed" value={samsungGalaxyS24.performance.cpu.clockSpeed} />
                        <SpecRow label="GPU" value={samsungGalaxyS24.performance.gpu} />
                        <SpecRow label="AnTuTu Score" value={samsungGalaxyS24.performance.benchmarks.antutu.toLocaleString()} />
                    </div>
                </div>

                {/* ===== MEMORY SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                            </svg>
                            Memory & Storage
                        </h3>
                    </div>
                    <div className="divide-y divide-indigo-50">
                        <SpecRow label="RAM" value={`${samsungGalaxyS24.memory.ramOptions.join(', ')} GB ${samsungGalaxyS24.memory.ramType}`} />
                        <SpecRow label="Storage" value={`${samsungGalaxyS24.memory.storageOptions.join(', ')} GB ${samsungGalaxyS24.memory.storageType}`} />
                        <SpecRow label="Expandable" value={samsungGalaxyS24.memory.expandable ? 'Yes' : 'No'} />
                    </div>
                </div>

                {/* ===== CAMERA SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 lg:col-span-2">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2 0v10h8V5H6z" clipRule="evenodd" />
                            </svg>
                            Camera
                        </h3>
                    </div>
                    <div className="p-4 sm:p-6">
                        {/* Rear Cameras */}
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-indigo-700 mb-3">Rear Camera</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {samsungGalaxyS24.camera.rear.map((cam, idx) => (
                                    <div key={idx} className="bg-indigo-50/50 rounded-xl p-3 border border-indigo-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-mm font-medium text-indigo-600">{cam.lensType}</span>
                                            <span className="text-lg font-bold text-gray-900">{cam.megapixel}MP</span>
                                        </div>
                                        <div className="space-y-1 text-sm text-gray-600">
                                            <p>Aperture: {cam.aperture}</p>
                                            <p>Focal: {cam.focalLength}</p>
                                            {cam.opticalZoom && <p className="text-indigo-600 font-semibold">{cam.opticalZoom}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Front Camera */}
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-indigo-700 mb-3">Front Camera</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {samsungGalaxyS24.camera.front.map((cam, idx) => (
                                    <div key={idx} className="bg-indigo-50/50 rounded-xl p-3 border border-indigo-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-md font-medium text-indigo-600">{cam.lensType}</span>
                                            <span className="text-lg font-bold text-gray-900">{cam.megapixel}MP</span>
                                        </div>
                                        <div className="space-y-1 text-sm text-gray-600">
                                            <p>Aperture: {cam.aperture}</p>
                                            <p>Focal: {cam.focalLength}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Video Recording */}
                        <div>
                            <h4 className="text-sm font-semibold text-indigo-700 mb-2">Video Recording</h4>
                            <div className="flex flex-wrap gap-2">
                                {samsungGalaxyS24.camera.videoRecording.rear.map((res, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full border border-indigo-200">
                                        {res}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-xs text-gray-500 font-medium">Features:</span>
                                {samsungGalaxyS24.camera.videoRecording.features.map((feature, idx) => (
                                    <span key={idx} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== BATTERY SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Battery
                        </h3>
                    </div>
                    <div className="divide-y divide-indigo-50">
                        <SpecRow label="Capacity" value={`${samsungGalaxyS24.battery.capacity.value} ${samsungGalaxyS24.battery.capacity.unit}`} />
                        <SpecRow label="Type" value={samsungGalaxyS24.battery.batteryType} />
                        <SpecRow label="Wired Charging" value={`${samsungGalaxyS24.battery.charging.wired.speed}`} />
                        <SpecRow label="Wireless Charging" value={`${samsungGalaxyS24.battery.charging.wireless.speed}`} />
                        <SpecRow label="Reverse Wireless" value={`${samsungGalaxyS24.battery.charging.reverseWireless.speed}`} />
                    </div>
                </div>

                {/* ===== NETWORK & CONNECTIVITY SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                            Network & Connectivity
                        </h3>
                    </div>
                    <div className="divide-y divide-indigo-50">
                        <SpecRow label="SIM" value={`${samsungGalaxyS24.network.sim.slots} slots (${samsungGalaxyS24.network.sim.type})`} />
                        <SpecRow label="Technology" value={renderArrayValue(samsungGalaxyS24.network.technology)} />
                        <SpecRow label="Wi-Fi" value={samsungGalaxyS24.connectivity.wifi} />
                        <SpecRow label="Bluetooth" value={samsungGalaxyS24.connectivity.bluetooth} />
                        <SpecRow label="NFC" value={samsungGalaxyS24.connectivity.nfc ? 'Yes' : 'No'} />
                        <SpecRow label="USB" value={samsungGalaxyS24.connectivity.usb} />
                    </div>
                </div>

                {/* ===== SENSORS SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 011-1h1a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1zm0 4h10v10H5V6z" clipRule="evenodd" />
                            </svg>
                            Sensors
                        </h3>
                    </div>
                    <div className="p-4 sm:p-6">
                        <div className="flex flex-wrap gap-2">
                            {samsungGalaxyS24.sensors.map((sensor, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-lg border border-indigo-100">
                                    {sensor}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== EXTRA FEATURES SECTION ===== */}
                <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Extra Features
                        </h3>
                    </div>
                    <div className="p-4 sm:p-6">
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {samsungGalaxyS24.extraFeatures.map((feature, idx) => (
                                <span key={idx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-medium rounded-lg border border-indigo-100">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            {/* <div className="mt-8 sm:mt-10 lg:mt-12">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">Available Variants & Pricing</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {samsungGalaxyS24.variants.map((variant, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100 p-4 sm:p-6 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-gray-500">{variant.color}</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                                    {variant.ram.value}GB RAM
                                </span>
                            </div>
                            <div className="text-center mb-3">
                                <span className="text-2xl font-bold text-gray-900">{variant.storage.value}GB</span>
                                <span className="text-xs text-gray-500 ml-1">{variant.storage.type}</span>
                            </div>
                            <div className="space-y-1.5">
                                {variant.prices.map((price, pIdx) => (
                                    <div key={pIdx} className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">{price.regionCode}</span>
                                        <span className="font-semibold text-gray-900">
                                            ${price.amount}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 pt-3 border-t border-indigo-100">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500">Availability</span>
                                    <span className={variant.availability.inStock ? 'text-indigo-600 font-semibold' : 'text-red-600 font-semibold'}>
                                        {variant.availability.inStock ? '✓ In Stock' : 'Out of Stock'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default SpecificationSection