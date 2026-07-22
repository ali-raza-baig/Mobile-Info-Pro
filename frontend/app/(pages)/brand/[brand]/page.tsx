import { singleBrand } from '@/app/action';
import BrandPage from '@/components/pages/BrandPage'
import { Metadata } from 'next';

type Props = {
    params: Promise<{ brand: string }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { brand } = await params;

    const brandDetails = await singleBrand(brand);
    const seo = brandDetails?.seo;

    return {
        title: seo.metaTitle,
        description: seo.metaDescription,

        keywords: seo.metaKeywords,

        applicationName: "MobileInfoPro",

        alternates: {
            canonical: `https://mobileinfopro.com/brand/${brand}`,
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
            title: seo.openGraph?.title || seo.metaTitle,
            description:
                seo.openGraph?.description || seo.metaDescription,
            type: seo.openGraph?.type || "website",
            url: `https://mobileinfopro.com/brand/${brand}`,
            siteName: "MobileInfoPro",

            images: [
                {
                    url:
                        brandDetails.heroImage ||
                        brandDetails.logo,
                    width: 1200,
                    height: 630,
                    alt: brandDetails.name,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: seo.twitter?.title || seo.metaTitle,
            description:
                seo.twitter?.description || seo.metaDescription,
            images: [
                brandDetails.heroImage ||
                brandDetails.logo,
            ],
        },

        authors: [
            {
                name: "MobileInfoPro",
            },
        ],

        creator: "MobileInfoPro",

        publisher: "MobileInfoPro",

        category: "Smartphones",

        metadataBase: new URL("https://mobileinfopro.com"),

        other: {
            targetKeywords: seo.targetKeywords?.join(", "),
            relatedTopics: seo.relatedTopics?.join(", "),
            aiOverview: seo.aiOverview,
            aiCitationSummary: seo.aiCitationSummary,
        },
    };
}

const page = async ({ params }: Props) => {
    const { brand } = await params
    const brandDetails = await singleBrand(brand);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(brandDetails.seo.schema),
                }}
            />
            <BrandPage details={brandDetails} />
        </>
    )
}

export default page