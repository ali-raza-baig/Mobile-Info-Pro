import mongoose from "mongoose";

/* ==========================================================
   SMALL REUSABLE SCHEMAS
========================================================== */

const dimensionSchema = new mongoose.Schema(
    {
        height: Number,
        width: Number,
        thickness: Number,
        unit: {
            type: String,
            default: "mm"
        }
    },
    { _id: false }
);

const weightSchema = new mongoose.Schema(
    {
        value: Number,
        unit: {
            type: String,
            default: "g"
        }
    },
    { _id: false }
);

const resolutionSchema = new mongoose.Schema(
    {
        width: Number,
        height: Number,
        label: String
    },
    { _id: false }
);

const brightnessSchema = new mongoose.Schema(
    {
        typical: Number,
        peak: Number,
        unit: {
            type: String,
            default: "nits"
        }
    },
    { _id: false }
);

const chipsetSchema = new mongoose.Schema(
    {
        manufacturer: String,
        name: String,
        fabrication: String
    },
    { _id: false }
);

const cpuSchema = new mongoose.Schema(
    {
        cores: Number,
        architecture: String,
        clockSpeed: String
    },
    { _id: false }
);

const benchmarkSchema = new mongoose.Schema(
    {
        antutu: Number,
        geekbenchSingle: Number,
        geekbenchMulti: Number,
        wildlife: Number
    },
    { _id: false }
);

const cameraLensSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            default: ""
        },
        megapixel: Number,
        aperture: String,
        focalLength: String,
        sensorSize: String,
        pixelSize: String,
        opticalZoom: String,
        stabilization: String,
        autofocus: String,
        features: {
            type: [String],
            default: []
        }
    },
    { _id: false }
);

const chargingSchema = new mongoose.Schema(
    {
        supported: {
            type: Boolean,
            default: false
        },
        watt: Number
    },
    { _id: false }
);




/* ==========================================================
   MAIN SPECIFICATION SCHEMA
========================================================== */

const specificationSchema = new mongoose.Schema(

    {

        /* ===========================
           GENERAL
        ============================ */

        general: {

            announced: Date,

            released: Date,

            status: {
                type: String,
                enum: ["Active", "Discontinued"]
            },

            modelNumber: [
                {
                    number: {
                        type: String,
                        required: true
                    },

                    regions: {
                        type: [String],
                        default: []
                    }
                }
            ],

            boxContents: {
                type: [String],
                default: []
            }

        },

        /* ===========================
           DESIGN
        ============================ */

        design: {

            dimensions: dimensionSchema,

            weight: weightSchema,

            build: {

                front: String,

                back: String,

                frame: String

            },

            protection: String,

            ipRating: String,

            simType: String,

            simCount: Number

        },

        /* ===========================
           DISPLAY
        ============================ */

        display: {

            type: {
                type: String,
                default: ""
            },

            size: Number,

            resolution: resolutionSchema,

            aspectRatio: String,

            pixelDensity: Number,

            refreshRate: Number,

            touchSamplingRate: Number,

            brightness: brightnessSchema,

            hdr: String,

            protection: String,

            alwaysOnDisplay: Boolean,

            features: {
                type: [String],
                default: []
            }

        },

        /* ===========================
           PERFORMANCE
        ============================ */

        performance: {

            chipset: chipsetSchema,

            cpu: cpuSchema,

            gpu: String,

            npu: String

        },

        /* ===========================
           MEMORY
        ============================ */

        memory: {
            ramOptions: [Number],
            storageOptions: [Number],

            ramType: String,

            storageType: String,

            expandable: Boolean,

            expandableUpto: Number

        },

        /* ===========================
           CAMERA
        ============================ */

        camera: {

            rear: {

                type: [cameraLensSchema],
                default: []

            },

            front: {

                type: [cameraLensSchema],
                default: []

            },

            flash: String,

            video: {

                rear: {

                    type: [String],
                    default: []

                },

                front: {

                    type: [String],
                    default: []

                },

                features: {

                    type: [String],
                    default: []

                }

            }

        },

        /* ===========================
           BATTERY
        ============================ */

        battery: {

            capacity: Number,

            type: {
                type: String,
                default: ""
            },

            removable: Boolean,

            charging: {

                wired: chargingSchema,

                wireless: chargingSchema,

                reverseWireless: chargingSchema,

                reverseWired: chargingSchema

            }

        },

        /* ===========================
           NETWORK
        ============================ */

        network: {

            technologies: {

                type: [String],
                default: []

            },

            bands: {

                "2G": {
                    type: [String],
                    default: []
                },

                "3G": {
                    type: [String],
                    default: []
                },

                "4G": {
                    type: [String],
                    default: []
                },

                "5G": {
                    type: [String],
                    default: []
                }

            }

        },

        /* ===========================
           CONNECTIVITY
        ============================ */

        connectivity: {

            wifi: String,

            bluetooth: String,

            gps: {

                type: [String],
                default: []

            },

            nfc: Boolean,

            infrared: Boolean,

            usb: String,

            usbOtg: Boolean,

            headphoneJack: Boolean,

            fmRadio: Boolean

        },

        /* ===========================
           MULTIMEDIA
        ============================ */

        multimedia: {

            speakers: String,

            stereo: Boolean,

            dolbyAtmos: Boolean,

            microphoneCount: Number

        },

        /* ===========================
           SENSORS
        ============================ */

        sensors: {

            type: [String],
            default: []

        },

        /* ===========================
           SOFTWARE
        ============================ */

        software: {

            os: String,

            osVersion: String,

            ui: String,

            osUpdateYears: Number,

            securityUpdateYears: Number

        },

        /* ===========================
           AI FEATURES
        ============================ */

        ai: {

            supported: Boolean,

            features: {

                type: [String],
                default: []

            }

        },

        /* ===========================
           BENCHMARKS
        ============================ */

        benchmarks: benchmarkSchema,

        /* ===========================
           EXTRA FEATURES
        ============================ */

        extraFeatures: {

            type: [String],
            default: []

        },

    },

    {
        timestamps: true
    }

);

export default specificationSchema;