import mongoose from 'mongoose';


const seriesSchema = new mongoose.Schema({
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand',
        required: true
    },
    // Basic
    name: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Discontinued']
    },
    launch_price: {
        entry_usd: Number,
        highest_usd: Number,
        estimated: Boolean
    },
    popular_models: {
        type: [String],
        default: []
    },
    primary_markets: {
        type: [String],
        default: []
    },

    mix: {
        alternative_names: [String],
        first_release_year: Number,
        latest_release_year: {
            type: Number,
            default: null
        },
        market_position: [String],
        target_audience: [String],
        characteristics: [String],
        historical_notes: [String],
        confidence: String
    },

    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    heroImage: {
        type: String,
        default: "",
    },
    // Hero Section
    hero: {
        title: {
            type: String,
            default: "",
        },

        subtitle: {
            type: String,
            default: "",
        },

        description: {
            type: String,
            default: "",
        },


        stats: {
            totalModels: {
                type: Number,
                default: 0,
            },

            seriesStarted: {
                type: Number,
                default: 0,
            },

            priceRange: {
                type: String,
                default: ''
            },
            latestModel: {
                type: String,
                default: ''
            },
            averageRating: {
                type: Number,
                default: 0
            },

            aiReviews: {
                type: Boolean,
                default: true,
            },
        },
    },

    // About Section
    about: {
        heading: {
            type: String,
            default: "",
        },

        description: {
            type: String,
            default: "",
        },

        firstReleased: {
            type: Number,
            default: 0,
        },

        seriesCategory: {
            type: String,
            default: "",
        },

        operatingSystem: {
            type: String,
            default: "",
        },

        targetAudience: {
            type: String,
            default: "",
        },

        globalAvailability: {
            type: String,
            default: "",
        },

        designFocus: {
            type: String,
            default: "",
        },

        softwareExperience: {
            type: String,
            default: "",
        },

        cameraFocus: {
            type: String,
            default: "",
        },

        displayTechnology: {
            type: String,
            default: "",
        },

        performanceFocus: {
            type: String,
            default: "",
        },

        keyModels: {
            type: [String],
            default: [],
        },
    },

    faqs: {
        type: [{
            question: { type: String, required: true },
            answer: { type: String, required: true },
        }],
        default: [],
    },
    // SEO
    seo: {
        metaTitle: {
            type: String,
            default: "",
        },

        metaDescription: {
            type: String,
            default: "",
        },

        targetKeywords: {
            type: [String],
            default: [],
        },

        relatedTopics: {
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

            imageAlt: {
                type: String,
                default: "",
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

            card: {
                type: String,
                default: "summary_large_image",
            },
        },

        featuredSnippet: {
            type: String,
            default: "",
        },

        pageSummary: {
            type: String,
            default: "",
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
            "@context": {
                type: String,
                default: "https://schema.org",
            },

            "@graph": {
                type: [mongoose.Schema.Types.Mixed],
                default: [],
            },
        },
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    isImageCompleted: {
        type: Boolean,
        default: false
    },
    isModelCreated: {
        type: Boolean,
        default: false
    },
    pendingModels: [String]
}, {
    timestamps: true,
})

const seriesModel = mongoose.model('series', seriesSchema);

export default seriesModel;