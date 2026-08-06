
import {
    FaCamera,
    FaBatteryFull,
    FaMobileScreen,
    FaMemory,
    FaMicrochip,
    FaRulerCombined,
} from "react-icons/fa6";




export const demoImages = [
    'https://swiperjs.com/demos/images/abstract-1.jpg',
    'https://swiperjs.com/demos/images/abstract-2.jpg',
    'https://swiperjs.com/demos/images/abstract-3.jpg',
    'https://swiperjs.com/demos/images/abstract-4.jpg',
    'https://swiperjs.com/demos/images/abstract-5.jpg',
    'https://swiperjs.com/demos/images/abstract-6.jpg',
]

export const samsungGalaxyS24 = {
    brandId: "6874xxxxxxxxxxxxxxxxxxxx", // Replace with Samsung Brand ObjectId
    seriesId: "6875xxxxxxxxxxxxxxxxxxxx", // Replace with Galaxy S Series ObjectId

    name: "Samsung Galaxy S24",
    slug: "samsung-galaxy-s24",

    launchDate: new Date("2024-01-17"),
    launchCountry: "United States",

    general: {
        os: software.os,
        osVersion: software.osVersion,
        customUI: software.ui,
        softwareSupport: {
            osUpdateYears: software.osUpdateYears,
            securityUpdateYears: software.securityUpdateYears
        },
        colors: [],
        boxContents: general.boxContents
    },

    design: {
        dimensions: { ...design.dimensions },
        weight: { ...design.weight },
        buildMaterial: { ...design.buildMaterial },
        protection: design.protection,
        ruggedness: "Dust and Water Resistant"
    },

    display: {
        type: display.type,
        size: {
            value: display.size,
            unit: "inches"
        },
        resolution: { ...display.resolution },
        pixelDensity: {
            value: display.pixelDensity,
            unit: "ppi"
        },
        refreshRate: {
            value: display.refreshRate,
            unit: "Hz"
        },
        brightness: {
            peak: display.brightness.peak,
            unit: "nits"
        },
        protection: display.protection,
        features: display.features
    },

    performance: {
        ...performance,
        benchmarks: benchmarks
    },

    memory: {
        ...memory
    },

    camera: {
        rear: camera.rear,

        front: camera.front,

        flash: camera.flash,

        videoRecording: camera.video
    },

    battery: {
        capacity: {
            value: battery.capacity,
            unit: "mAh"
        },
        batteryType: battery.type,

        charging: { ...battery.charging }
    },

    network: {
        sim: {
            slots: design.simCount,
            type: design.simType
        },
        ...network
    },

    connectivity: { ...connectivity },

    sensors: sensors,

    extraFeatures: extraFeatures,

    variants: [
        {
            variantId: "s24-8-128-onyx-black",

            ram: {
                value: 8,
                unit: "GB",
                type: "LPDDR5X"
            },

            storage: {
                value: 128,
                unit: "GB",
                type: "UFS 4.0"
            },

            color: "Onyx Black",

            prices: [
                {
                    regionCode: "US",
                    amount: 799
                },
                {
                    regionCode: "PK",
                    amount: 224999
                },
                {
                    regionCode: "IN",
                    amount: 74999
                }
            ],

            availability: {
                inStock: true,
                stores: [
                    "Samsung Store",
                    "Amazon",
                    "Best Buy"
                ]
            }
        },

        {
            variantId: "s24-8-256-cobalt-violet",

            ram: {
                value: 8,
                unit: "GB",
                type: "LPDDR5X"
            },

            storage: {
                value: 256,
                unit: "GB",
                type: "UFS 4.0"
            },

            color: "Cobalt Violet",

            prices: [
                {
                    regionCode: "US",
                    amount: 859
                },
                {
                    regionCode: "PK",
                    amount: 244999
                },
                {
                    regionCode: "IN",
                    amount: 79999
                }
            ],

            availability: {
                inStock: true,
                stores: [
                    "Samsung Store",
                    "Amazon"
                ]
            }
        },

        {
            variantId: "s24-8-512-marble-gray",

            ram: {
                value: 8,
                unit: "GB",
                type: "LPDDR5X"
            },

            storage: {
                value: 512,
                unit: "GB",
                type: "UFS 4.0"
            },

            color: "Marble Gray",

            prices: [
                {
                    regionCode: "US",
                    amount: 979
                },
                {
                    regionCode: "PK",
                    amount: 279999
                },
                {
                    regionCode: "IN",
                    amount: 92999
                }
            ],

            availability: {
                inStock: true,
                stores: [
                    "Samsung Store"
                ]
            }
        }
    ],

    isActive: true
};