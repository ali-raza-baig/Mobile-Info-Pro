import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'

import { Ollama } from "ollama";
import brandModel from "../models/brandModel.js";
import parseJSON from "../utils/parseJson.js";

import {
    brand_hero_prompt,
    brand_about_prompt,
    brand_faq_prompt,
    brand_seo_prompt,
} from "../prompts/brand.js";
import path from 'path';

const MODEL = "gemma4";

const ollama = new Ollama({
    host: "https://ollama.com",
    headers: {
        Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
    },
});

export const brandsContentGenerate = async () => {

    try {
        console.log("Generating Brand Content...");

        const brands = await brandModel.find({
            isCompleted: "pending",
        });

        if (!brands.length) {
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

                    isCompleted: "content completed",
                };

                await brandModel.findByIdAndUpdate(
                    brand._id,
                    generatedContent,
                    {
                        returnDocument: 'after'
                    }
                );

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

export const brandsImageGenerate = async () => {
    console.log(`started .....`)
    try {

        // const brands = await brandModel.find({ isCompleted: 'content completed', isImageCompleted: false })

        // if (!brands.length) {
        //     console.log("No pending brands found.");
        //     return;
        // }
        // console.log(`Found ${brands.length} brands.\n`);

        // for (let i = 0; i < brands.length; i++) {
        //     try {

        //     } catch (error) {
        //         console.error(
        //             `❌ Failed to generate image for ${brand.name}`
        //         );
        //         console.error(err.message);
        //     }
        // }


    } catch (error) {
        console.error("Brands Image Generator Error");
        console.error(error);
    }
}