import mongoose from 'mongoose';

// Variant Schema 
const variantSchema = mongoose.Schema({
    phoneId: {
        type: mongoose.Schema.ObjectId,
        ref: "model",
        required: true
    },
    color: {
        type: String,
        required: true
    },
    ram: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    storage: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    images: [String],
    status: {
        type: String,
        enum: ['Active', 'Discontinued']
    },
    modelNumber: {
        type: [String],
        default: []
    },

    region: {
        type: [String],
        default: []
    },

}, { timestamps: true });

// Store Schema
const storeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    logo: {
        type: String,
    },
    affliateId: {
        type: mongoose.Schema.Types.Mixed,
    },
    website: String,
    mix: {
        type: mongoose.Schema.Types.Mixed,
    },
    type: {
        type: String,
        enum: ["Marketplace", "Official Store", "Retailer"]
    }

}, { timestamps: true });

//Country Schema
const countrySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    iso2: {
        type: String,
        required: true,
    },
    currancySymbol: {
        type: String,
        required: true,
    },
    currency: String,
}, { timestamps: true });

const priceSchema = mongoose.Schema({
    phoneId: {
        type: mongoose.Schema.ObjectId,
        ref: "model",
        required: true
    },
    variantId: {
        type: mongoose.Schema.ObjectId,
        ref: "variant",
        required: true
    },
    storeId: {
        type: mongoose.Schema.ObjectId,
        ref: "store",
        required: true
    },
    countryId: {
        type: mongoose.Schema.ObjectId,
        ref: "country",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    lastPrice: {
        type: Number,
        default: null
    },
    lastUpdated: {
        type: Date
    },
    originalPrice: Number,

    discount: Number,
    availability: {
        type: String,
        enum: [
            "In Stock",
            "Out of Stock",
            "Pre Order",
            "Discontinued"
        ]
    },
    url: String,
    affliateLink: String,
    condition: {
        type: String,
        enum: [
            "New",
            "Used",
            "Refurbished"
        ],
        default: "New"
    },
    confidence: {
        type: String,
        enum: ["High", "Medium", "Low"],
        default: "High"
    }


}, { timestamps: true })

const variantModel = mongoose.model('variant', variantSchema);
const storeModel = mongoose.model('store', storeSchema);
const countryModel = mongoose.model('country', countrySchema);
const priceModel = mongoose.model('price', priceSchema)

export { variantModel, storeModel, countryModel, priceModel };