import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs/promises'


import { Ollama } from "ollama";
import parseJSON from "../utils/parseJson.js";

import {
    brand_hero_prompt,
    brand_about_prompt,
    brand_faq_prompt,
    brand_seo_prompt,
    brand_logo_prompt,
    brand_hero_img_prompt,
} from "../prompts/brand.js";
import path from 'path';
import uploadImage from '../utils/uploadImage.js';

// const MODEL = "gemma4";
const MODEL = "gpt-oss:120b";

const ollama = new Ollama({
    host: "https://ollama.com",
    headers: {
        Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
    },
});

export const fetchPendingBrands = async (arg = {}) => {
    try {
        const res = await fetch(`${process.env.BACKEND}/api/brand/pending-brands`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...arg })
        })

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`HTTP ${res.status}: ${errorText}`);
        }

        const data = await res.json();

        if (data.message === 'pendingBrand not found') {
            return 'pendingBrand not found'
        };
        const pendingBrands = await data.brand
        return pendingBrands;
    } catch (error) {
        console.log(`Error in fetching brands`)
        throw error
    }
}

export const updateBrands = async (slug, arg = {}) => {
    try {
        const res = await fetch(`${process.env.BACKEND}/api/brand/update/${slug}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...arg })
        })
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`HTTP ${res.status}: ${errorText}`);
        }

        return;

    } catch (error) {
        console.log(`Error in update brand`)
        throw error
    }
}

export const brandsContentGenerate = async () => {

    try {
        console.log("Generating Brand Content...");

        const brands = await fetchPendingBrands({ isActive: false, isCompleted: "pending" })

        if (!Array.isArray(brands) || brands.length === 0) {
            console.log("No pending brands found.");
            return;
        }

        console.log(`Found ${brands.length} brands.\n`);

        for (let i = 0; i < brands.length; i++) {
            const brand = brands[i];

            console.log(
                `[${i + 1}/${brands.length}] Generating ${brand.name}...`
            );

            try {

                let heroRes = await ollama.chat({
                    model: MODEL,
                    messages: [
                        {
                            role: "user",
                            content: brand_hero_prompt({
                                BRAND: brand.name,
                            }),
                        },
                    ],
                });

                let aboutRes = await ollama.chat({
                    model: MODEL,
                    messages: [
                        {
                            role: "user",
                            content: brand_about_prompt({
                                BRAND: brand.name,
                            }),
                        },
                    ],
                });

                let faqRes = await ollama.chat({
                    model: MODEL,
                    messages: [
                        {
                            role: "user",
                            content: brand_faq_prompt({
                                BRAND: brand.name,
                            }),
                        },
                    ],
                });

                let seoRes = await ollama.chat({
                    model: MODEL,
                    messages: [
                        {
                            role: "user",
                            content: brand_seo_prompt({
                                BRAND: brand.name,
                            }),
                        },
                    ],
                });


                const heroData = parseJSON(heroRes.message.content);
                const aboutData = parseJSON(aboutRes.message.content);
                const faqData = parseJSON(faqRes.message.content);
                const seoData = parseJSON(seoRes.message.content);

                const generatedContent = {
                    hero: {
                        title: heroData.title || brand.name,
                        subtitle:
                            heroData.subtitle || "Smartphones",
                        description:
                            heroData.description || "",
                        stats: {
                            activeModels:
                                heroData.stats?.activeModels || 0,
                            averageRating:
                                heroData.stats?.averageRating || 4.7,
                            aiReviews: true,
                        },
                    },

                    about: {
                        heading:
                            aboutData.heading ||
                            `About ${brand.name}`,
                        description:
                            aboutData.description || "",
                        founded:
                            aboutData.founded || "",
                        headquarters:
                            aboutData.headquarters || "",
                        popularSeries:
                            aboutData.popularSeries || [],
                        operatingSystem:
                            aboutData.operatingSystem || "",
                        globalPresence:
                            aboutData.globalPresence || "",
                        officialWebsite:
                            aboutData.officialWebsite || "",
                    },

                    faqs: faqData.faqs || [],

                    seo: seoData.seo || seoData,

                    isCompleted: "completed",
                };

                await updateBrands(brand.slug, { ...generatedContent })

                console.log(`✅ ${brand.name} completed.\n`);
            } catch (err) {
                console.error(
                    `❌ Failed to generate ${brand.name}`
                );
                console.error(err);
            }
        }

        console.log("🎉 All brands processed.");
    } catch (err) {
        console.error("Brand Content Generator Error");
        console.error(err);
    }
};

export const brandsImagePrompt = async () => {
    console.log('===================')
    console.log(`Started Writting Brand Images Prompt  .....`)
    console.log('===================')
    try {

        const brands = await fetchPendingBrands({ isImageCompleted: false })

        console.log(`Total pending brands for images`, brands.length)

        const folderPathBrand = path.join(process.cwd(), 'images-prompt-brand')

        await fs.mkdir(folderPathBrand, {
            recursive: true
        })



        for (let i = 0; i < brands.length; i++) {
            const brand = brands[i]

            try {
                const contentLogo = `${i + 1}. Brand Name:${brand.name}
                \n image File Name:brand-logo-${brand.name}
                \n
                `
                const filePathLogo = path.join(folderPathBrand, `brand-logo-images.txt`)
                await fs.appendFile(filePathLogo, contentLogo, 'utf-8')

                const contentHero = `${i + 1}. Brand Name:${brand.name}
                \n image File Name:brand-hero-${brand.name}
                \n`

                const filePathHero = path.join(folderPathBrand, `brand-hero-images.txt`)
                await fs.appendFile(filePathHero, contentHero, 'utf-8')



            } catch (error) {
                console.log(`Error in creating logo prompt file for ${brand.name}`)
                console.log(error)
            }
        }
        console.log(`✅ Completed`)
    } catch (error) {
        console.error("Brands Image Generator Error");
        console.error(error);
    }
}

export const brandsImageUpload = async () => {
    try {
        const brands = await fetchPendingBrands({
            isImageCompleted: false
        })

        console.log(`Total pending brands for images: ${brands.length}`)

        const folderPathLogo = path.join(
            process.cwd(),
            "images",
            "brands-logo"
        )

        const folderPathHero = path.join(
            process.cwd(),
            "images",
            "brands-hero"
        )

        // Find file without requiring extension
        const findImage = (folderPath, baseName) => {
            const file = fs.readdirSync(folderPath).find(
                (file) => path.parse(file).name === baseName
            )

            if (!file) {
                throw new Error(
                    `Image not found: ${baseName} in ${folderPath}`
                )
            }

            return path.join(folderPath, file)
        }

        for (const brand of brands) {
            try {
                console.log(`\nProcessing brand: ${brand.name}`)

                // Find images regardless of extension
                const filePathLogo = findImage(
                    folderPathLogo,
                    `brand-logo-${brand.name}`
                )

                const filePathHero = findImage(
                    folderPathHero,
                    `brand-hero-${brand.name}`
                )

                console.log("Logo:", filePathLogo)
                console.log("Hero:", filePathHero)

                // =========================
                // Upload Logo
                // =========================

                const logoFormData = new FormData()

                logoFormData.append(
                    "image",
                    fs.createReadStream(filePathLogo)
                )

                logoFormData.append(
                    "name",
                    `brand-logo-${brand.name}`
                )

                logoFormData.append(
                    "removeBg",
                    String(true)
                )

                logoFormData.append(
                    "width",
                    String(120)
                )

                logoFormData.append(
                    "height",
                    String(120)
                )

                const logoImage = await uploadImage({
                    formData: logoFormData
                })

                // =========================
                // Upload Hero
                // =========================

                const heroFormData = new FormData()

                heroFormData.append(
                    "image",
                    fs.createReadStream(filePathHero)
                )

                heroFormData.append(
                    "name",
                    `brand-hero-${brand.name}`
                )

                heroFormData.append(
                    "removeBg",
                    String(true)
                )

                const heroImage = await uploadImage({
                    formData: heroFormData
                })

                // =========================
                // Update Brand
                // =========================

                await updateBrands(brand.slug, {
                    isImageCompleted: true,
                    isActive: true,
                    logo: logoImage,
                    heroImage: heroImage
                })

                console.log(`✓ Images uploaded: ${brand.name}`)

            } catch (error) {
                console.log(`✗ Error uploading images for ${brand.name}`)

                console.log(error?.response?.data || error?.message || error)
            }
        }

    } catch (error) {
        console.log(`Error in uploading brand images`)

        console.log(error?.response?.data || error?.message || error)
    }
}