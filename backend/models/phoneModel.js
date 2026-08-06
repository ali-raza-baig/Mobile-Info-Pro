import mongoose from 'mongoose';
import specificationSchema from './specModel.js';


const priceSchema = new mongoose.Schema(
    {
        currency: {
            type: String,
            required: true,
        },

        min: {
            type: Number,
            default: null,
        },

        max: {
            type: Number,
            default: null,
        },

        confidence: {
            type: String,
            enum: ["High", "Medium", "Low", null],
            default: null,
        },
    },
    { _id: false }
);

const contentSchema = new mongoose.Schema({
    faqs: {
        type: [{
            question: String,
            answer: String
        }],
        default: []
    },
    seo: {
        metaTitle: {
            type: String,
            default: "",
            trim: true,
        },

        metaDescription: {
            type: String,
            default: "",
            trim: true,
        },

        metaKeywords: {
            type: [String],
            default: [],
        },

        targetKeywords: {
            type: [String],
            default: [],
        },

        relatedTopics: {
            type: [String],
            default: [],
        },

        searchIntent: {
            informational: {
                type: [String],
                default: [],
            },

            commercial: {
                type: [String],
                default: [],
            },

            transactional: {
                type: [String],
                default: [],
            },

            navigational: {
                type: [String],
                default: [],
            },
        },

        commonSearchQueries: {
            type: [String],
            default: [],
        },

        openGraph: {
            title: {
                type: String,
                default: "",
            },

            description: {
                type: String,
                default: "",
            },

            type: {
                type: String,
                default: "website",
            },
        },

        twitter: {
            title: {
                type: String,
                default: "",
            },

            description: {
                type: String,
                default: "",
            },
        },

        aiOverview: {
            type: String,
            default: "",
        },

        aiCitationSummary: {
            type: String,
            default: "",
        },

        schema: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },
    },
    details: {

        estimatedPrice: {
            usa: {
                type: priceSchema,
                default: () => ({ currency: "USD" }),
            },

            uk: {
                type: priceSchema,
                default: () => ({ currency: "GBP" }),
            },

            canada: {
                type: priceSchema,
                default: () => ({ currency: "CAD" }),
            },

            china: {
                type: priceSchema,
                default: () => ({ currency: "CNY" }),
            },
        },

        humanReview: {
            type: String,
            default: "",
            trim: true,
        },

        aiReview: {
            type: String,
            default: "",
            trim: true,
        },

        aiRating: {
            score: {
                type: Number,
                min: 1,
                max: 10,
                default: null,
            },

            explanation: {
                type: String,
                default: "",
                trim: true,
            },
        },

    },

})

const PhoneModelSchema = new mongoose.Schema({
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand',
        required: true
    },
    seriesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'series',
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    category: {
        type: [String],
        default: []
    },
    status: {
        type: String,
        enum: ['Active', 'Discontinued']
    },
    colors: {
        type: [String],
        default: []
    },
    ram: {
        type: [String],
        default: []
    },
    storage: {
        type: [String],
        default: []
    },

    announcementDate: mongoose.Schema.Types.Mixed,
    releaseDate: mongoose.Schema.Types.Mixed,
    discontinuedYear: mongoose.Schema.Types.Mixed,
    generation: mongoose.Schema.Types.Mixed,
    predecessor: mongoose.Schema.Types.Mixed,
    successor: mongoose.Schema.Types.Mixed,
    modelNumbers: {
        type: [String],
        default: []
    },
    content: {
        type: contentSchema
    },
    contentCompleted: {
        type: Boolean,
        default: false
    },
    specifications: {
        type: specificationSchema,
        default: null
    },
    specCompleted: {
        type: Boolean,
        default: false
    },
    price: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "price",
        default: null
    },
    priceCompleted: {
        type: Boolean,
        default: false
    },

    images: {
        type: [
            {
                color: String,
                img: String,
                alt: {
                    type: String,
                    default: ''
                }
            }
        ],
        default: []
    },
    imagesCompleted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    tag: {
        type: String,
        enum: ['Normal', 'Tranding', 'New', 'Featured']
    }

}, {
    timestamps: true
});

const phoneModel = mongoose.model('model', PhoneModelSchema);
export default phoneModel;