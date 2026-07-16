// ==============================
// Common Types
// ==============================

export interface IPrice {
    regionCode: string;
    amount: number;
}

export interface IRamStorage {
    value: number;
    unit: string;
    type?: string;
}

export interface IAvailability {
    inStock: boolean;
    stores: string[];
}

export interface IVariant {
    variantId: string;
    ram: IRamStorage;
    storage: IRamStorage;
    color?: string;
    prices: IPrice[];
    availability: IAvailability;
}

export interface ICameraLens {
    megapixel?: number;
    lensType?: string;
    aperture?: string;
    focalLength?: string;
    sensorSize?: string;
    pixelSize?: string;
    opticalZoom?: string | null;
    features?: string[];
}

// ==============================
// Main Model
// ==============================

export interface IModel {
    _id: string;

    brandId: string;
    seriesId: string;

    name: string;
    slug: string;

    launchDate?: string;
    launchCountry?: string;

    general: {
        os?: string;
        osVersion?: string;
        customUI?: string;

        softwareSupport: {
            osUpdateYears?: number;
            securityUpdateYears?: number;
        };

        colors: string[];
        boxContents: string[];
    };

    design: {
        dimensions: {
            height?: number;
            width?: number;
            thickness?: number;
            unit: string;
        };

        weight: {
            value?: number;
            unit: string;
        };

        buildMaterial: {
            front?: string;
            back?: string;
            frame?: string;
        };

        waterResistance?: string;
        ruggedness?: string;
    };

    display: {
        type?: string;

        size: {
            value?: number;
            unit: string;
        };

        resolution: {
            width?: number;
            height?: number;
            label?: string;
        };

        pixelDensity: {
            value?: number;
            unit: string;
        };

        refreshRate: {
            value?: number;
            unit: string;
        };

        brightness: {
            peak?: number;
            unit: string;
        };

        protection?: string;
        features: string[];
    };

    performance: {
        chipset: {
            manufacturer?: string;
            name?: string;
            fabrication?: string;
        };

        cpu: {
            cores?: number;
            architecture?: string;
            clockSpeed?: string;
        };

        gpu?: string;

        benchmarks: {
            antutu?: number;
            geekbench6Single?: number;
            geekbench6Multi?: number;
        };
    };

    memory: {
        ramOptions: number[];
        storageOptions: number[];

        ramType?: string;
        storageType?: string;

        expandable: boolean;
        expandableUpto?: string;
    };

    camera: {
        rear: ICameraLens[];
        front: ICameraLens[];

        flash?: string;

        videoRecording: {
            rear: string[];
            front: string[];
            features: string[];
        };
    };

    battery: {
        capacity: {
            value?: number;
            unit: string;
        };

        batteryType?: string;

        charging: {
            wired: {
                supported: boolean;
                speed?: string;
            };

            wireless: {
                supported: boolean;
                speed?: string;
            };

            reverseWireless: {
                supported: boolean;
                speed?: string;
            };
        };
    };

    network: {
        sim: {
            slots?: number;
            type?: string;
        };

        technology: string[];

        bands: Record<string, any>;
    };

    connectivity: {
        wifi?: string;
        bluetooth?: string;
        gps: string[];
        nfc: boolean;
        usb?: string;
    };

    sensors: string[];

    extraFeatures: string[];

    variants: IVariant[];

    isActive: boolean;

    createdAt: string;
    updatedAt: string;
}