import { singleModel } from '@/app/action'
import NotFound from '@/app/not-found';
import ModelPage from '@/components/pages/ModelPage'
import React from 'react'

export async function generateMetadata({ params }: any) {
    const { model } = await params;

    const modelDetails = await singleModel(model);

    const seo = modelDetails?.content?.seo;

    if (!seo) {
        return {
            metadataBase: new URL("https://mobileinfopro.com"),
        };
    }

    const title = seo.metaTitle || modelDetails.name;
    const description = seo.metaDescription || "";

    return {
        metadataBase: new URL("https://mobileinfopro.com"),

        title,
        description,

        keywords: [
            ...(seo.metaKeywords || []),
            ...(seo.targetKeywords || []),
            ...(seo.relatedTopics || []),
        ],

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },

        alternates: {
            canonical: `/mobile/${model}`,
        },

        openGraph: {
            title:
                seo.openGraph?.title ||
                title,

            description:
                seo.openGraph?.description ||
                description,

            type:
                seo.openGraph?.type ||
                "website",

            url: `https://mobileinfopro.com/mobile/${model}`,

            siteName: "MobileInfoPro",

            locale: "en_US",

            images: [
                {
                    url:
                        modelDetails?.content?.images?.hero ||
                        "/default-phone.png",

                    width: 1200,

                    height: 630,

                    alt: title,
                },
            ],
        },


        twitter: {
            card: "summary_large_image",

            title:
                seo.twitter?.title ||
                title,

            description:
                seo.twitter?.description ||
                description,

            images: [
                modelDetails?.content?.images?.hero ||
                "/default-phone.png",
            ],
        },


        other: {

            "ai-overview":
                seo.aiOverview || "",

            "ai-citation-summary":
                seo.aiCitationSummary || "",

            "search-intent-informational":
                seo.searchIntent?.informational?.join(", ") || "",

            "search-intent-commercial":
                seo.searchIntent?.commercial?.join(", ") || "",

            "search-intent-transactional":
                seo.searchIntent?.transactional?.join(", ") || "",

            "search-intent-navigational":
                seo.searchIntent?.navigational?.join(", ") || "",

            "common-search-queries":
                seo.commonSearchQueries?.join(", ") || "",
        },

        category: "Mobile Phones",
    };
}

const page = async ({ params }: any) => {
    const { model } = await params
    const modelDetails = await singleModel(model)
    if (!modelDetails) {
        <NotFound />
    }
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(modelDetails.content.seo.schema),
                }}
            />

            <ModelPage details={modelDetails} />
        </div>
    )
}

export default page