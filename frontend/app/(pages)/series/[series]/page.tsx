import { singleSeries } from '@/app/action';
import SeriesPage from '@/components/pages/SeriesPage'
import { Metadata } from 'next';
import React from 'react'




type Props = {
    params: Promise<{
        series: string;
    }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { series } = await params;

    const seriesDetails = await singleSeries(series);

    if (!seriesDetails) {
        return {
            title: "Series Not Found | MobileInfoPro",
            description: "The requested smartphone series could not be found.",
        };
    }

    const seo = seriesDetails.seo || {};

    return {
        metadataBase: new URL("https://mobileinfopro.com"),

        title:
            seo.metaTitle ||
            `${seriesDetails.name} Series - MobileInfoPro`,

        description:
            seo.metaDescription ||
            seriesDetails.about?.description ||
            "",

        keywords: [
            ...(seo.targetKeywords || []),
            ...(seo.relatedTopics || []),
        ],

        applicationName: "MobileInfoPro",

        alternates: {
            canonical: `/series/${seriesDetails.slug}`,
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },

        openGraph: {
            type: seo.openGraph?.type || "website",

            url: `/series/${seriesDetails.slug}`,

            siteName: "MobileInfoPro",

            title:
                seo.openGraph?.title ||
                seo.metaTitle ||
                `${seriesDetails.name} Series`,

            description:
                seo.openGraph?.description ||
                seo.metaDescription ||
                "",

            images: [
                {
                    url: seriesDetails.heroImage,
                    width: 1200,
                    height: 630,
                    alt:
                        seo.openGraph?.imageAlt ||
                        `${seriesDetails.name} Series`,
                },
            ],
        },

        twitter: {
            card:
                seo.twitter?.card || "summary_large_image",

            title:
                seo.twitter?.title ||
                seo.metaTitle ||
                `${seriesDetails.name} Series`,

            description:
                seo.twitter?.description ||
                seo.metaDescription ||
                "",

            images: [seriesDetails.heroImage],
        },

        authors: [
            {
                name: "MobileInfoPro",
            },
        ],

        creator: "MobileInfoPro",

        publisher: "MobileInfoPro",

        category: "Smartphones",

        other: {
            targetKeywords:
                seo.targetKeywords?.join(", ") || "",

            relatedTopics:
                seo.relatedTopics?.join(", ") || "",

            featuredSnippet:
                seo.featuredSnippet || "",

            pageSummary:
                seo.pageSummary || "",

            aiOverview:
                seo.aiOverview || "",

            aiCitationSummary:
                seo.aiCitationSummary || "",
        },
    };
}


const page = async ({ params }: Props) => {
    const { series } = await params
    const seriesDetails = await singleSeries(series);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(seriesDetails.seo.schema),
                }}
            />
            <SeriesPage details={seriesDetails} />
        </>
    )
}

export default page