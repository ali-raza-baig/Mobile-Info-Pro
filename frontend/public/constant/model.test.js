
import {
    FaCamera,
    FaBatteryFull,
    FaMobileScreen,
    FaMemory,
    FaMicrochip,
    FaRulerCombined,
} from "react-icons/fa6";

export const phoneSpecifications = [
    {
        id: 1,
        title: "Camera",
        value: "50.0 MP Camera",
        icon: FaCamera,
    },
    {
        id: 2,
        title: "Battery",
        value: "5000 mAh Battery",
        icon: FaBatteryFull,
    },
    {
        id: 3,
        title: "Display",
        value: '6.6" Diagonal Screen',
        icon: FaMobileScreen,
    },
    {
        id: 4,
        title: "Processor",
        value: "2000 MHz CPU Clock",
        icon: FaMicrochip,
    },
    {
        id: 5,
        title: "Dimensions",
        value: "00.0 mm × 000.0 mm × 0.0 mm",
        icon: FaRulerCombined,
    },
    {
        id: 6,
        title: "Memory",
        value: "6GB RAM, ROM Storage",
        icon: FaMemory,
    },
];


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
        os: "Android",
        osVersion: "14",
        customUI: "One UI 6.1",
        softwareSupport: {
            osUpdateYears: 7,
            securityUpdateYears: 7
        },
        colors: [
            "Onyx Black",
            "Marble Gray",
            "Cobalt Violet",
            "Amber Yellow"
        ],
        boxContents: [
            "Samsung Galaxy S24",
            "USB Type-C Cable",
            "SIM Ejector Tool",
            "Quick Start Guide"
        ]
    },

    design: {
        dimensions: {
            height: 147,
            width: 70.6,
            thickness: 7.6,
            unit: "mm"
        },
        weight: {
            value: 167,
            unit: "g"
        },
        buildMaterial: {
            front: "Gorilla Glass Victus 2",
            back: "Gorilla Glass Victus 2",
            frame: "Armor Aluminum"
        },
        waterResistance: "IP68",
        ruggedness: "Dust and Water Resistant"
    },

    display: {
        type: "Dynamic LTPO AMOLED 2X",
        size: {
            value: 6.2,
            unit: "inches"
        },
        resolution: {
            width: 1080,
            height: 2340,
            label: "FHD+"
        },
        pixelDensity: {
            value: 416,
            unit: "ppi"
        },
        refreshRate: {
            value: 120,
            unit: "Hz"
        },
        brightness: {
            peak: 2600,
            unit: "nits"
        },
        protection: "Corning Gorilla Glass Victus 2",
        features: [
            "HDR10+",
            "Always-On Display",
            "Vision Booster",
            "Adaptive Refresh Rate",
            "Eye Comfort Shield"
        ]
    },

    performance: {
        chipset: {
            manufacturer: "Qualcomm",
            name: "Snapdragon 8 Gen 3 for Galaxy",
            fabrication: "4nm"
        },
        cpu: {
            cores: 8,
            architecture: "1x Cortex-X4 + 5x Cortex-A720 + 2x Cortex-A520",
            clockSpeed: "3.39 GHz"
        },
        gpu: "Adreno 750",
        benchmarks: {
            antutu: 1800000,
            geekbench6Single: 2250,
            geekbench6Multi: 7000
        }
    },

    memory: {
        ramOptions: [8],
        storageOptions: [128, 256, 512],
        ramType: "LPDDR5X",
        storageType: "UFS 4.0",
        expandable: false,
        expandableUpto: null
    },

    camera: {
        rear: [
            {
                megapixel: 50,
                lensType: "Wide",
                aperture: "f/1.8",
                focalLength: "24mm",
                sensorSize: '1/1.56"',
                pixelSize: "1.0µm",
                opticalZoom: null,
                features: [
                    "OIS",
                    "PDAF",
                    "Dual Pixel Autofocus"
                ]
            },
            {
                megapixel: 12,
                lensType: "Ultra-wide",
                aperture: "f/2.2",
                focalLength: "13mm",
                sensorSize: '1/2.55"',
                pixelSize: "1.4µm",
                opticalZoom: null,
                features: [
                    "120° Field of View"
                ]
            },
            {
                megapixel: 10,
                lensType: "Telephoto",
                aperture: "f/2.4",
                focalLength: "67mm",
                sensorSize: '1/3.94"',
                pixelSize: "1.0µm",
                opticalZoom: "3x Optical Zoom",
                features: [
                    "OIS",
                    "PDAF"
                ]
            }
        ],

        front: [
            {
                megapixel: 12,
                lensType: "Wide",
                aperture: "f/2.2",
                focalLength: "26mm",
                sensorSize: '1/3.2"',
                pixelSize: "1.12µm",
                opticalZoom: null,
                features: [
                    "Dual Pixel Autofocus"
                ]
            }
        ],

        flash: "LED Flash",

        videoRecording: {
            rear: [
                "8K@30fps",
                "4K@60fps",
                "1080p@240fps",
                "720p@960fps"
            ],
            front: [
                "4K@60fps",
                "1080p@60fps"
            ],
            features: [
                "HDR10+ Recording",
                "Super Steady Video",
                "Slow Motion",
                "Nightography Video"
            ]
        }
    },

    battery: {
        capacity: {
            value: 4000,
            unit: "mAh"
        },
        batteryType: "Li-Ion",

        charging: {
            wired: {
                supported: true,
                speed: "25W"
            },
            wireless: {
                supported: true,
                speed: "15W"
            },
            reverseWireless: {
                supported: true,
                speed: "4.5W"
            }
        }
    },

    network: {
        sim: {
            slots: 2,
            type: "Nano-SIM + eSIM"
        },

        technology: [
            "2G",
            "3G",
            "4G",
            "5G"
        ],

        bands: {
            "2G": ["GSM 850", "900", "1800", "1900"],
            "3G": ["HSDPA"],
            "4G": ["LTE"],
            "5G": ["Sub-6", "mmWave"]
        }
    },

    connectivity: {
        wifi: "Wi-Fi 7",
        bluetooth: "Bluetooth 5.3",
        gps: [
            "GPS",
            "GLONASS",
            "GALILEO",
            "BDS",
            "QZSS"
        ],
        nfc: true,
        usb: "USB Type-C 3.2"
    },

    sensors: [
        "Ultrasonic Fingerprint",
        "Accelerometer",
        "Gyroscope",
        "Compass",
        "Barometer",
        "Proximity Sensor",
        "Ambient Light Sensor"
    ],

    extraFeatures: [
        "Samsung DeX",
        "Samsung Knox",
        "Galaxy AI",
        "Circle to Search",
        "Stereo Speakers",
        "Dolby Atmos",
        "UWB"
    ],

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