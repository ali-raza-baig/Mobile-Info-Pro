import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
    {
        // Basic
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        knownFor: {
            type: String
        },
        globalStanding: {
            type: String
        },

        logo: {
            type: String,
            default: "",
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
                activeModels: {
                    type: Number,
                    default: 0,
                },

                averageRating: {
                    type: Number,
                    default: 0,
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

            founded: {
                type: String,
                default: "",
            },

            headquarters: {
                type: String,
                default: "",
            },

            popularSeries: {
                type: [String],
                default: [],
            },

            operatingSystem: {
                type: String,
                default: "",
            },

            globalPresence: {
                type: String,
                default: "",
            },

            officialWebsite: {
                type: String,
                default: "",
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
        isSeriesCreated: {
            type: Boolean,
            default: false
        },
        pendingSeries: [String]
    },
    {
        timestamps: true,
    }
);

const brandModel = mongoose.model("brand", brandSchema);

export default brandModel;