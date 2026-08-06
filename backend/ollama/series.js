import dotenv from 'dotenv';
dotenv.config()
import seriesModel from "../models/seriesModel.js";
import parseJSON from '../utils/parseJson.js';
import {
    series_hero_prompt,
    series_about_prompt,
    series_faq_prompt,
    series_seo_prompt,
    series_hero_img_prompt,
} from "../prompts/series.js";
import { Ollama } from "ollama";

const ollama = new Ollama({
    host: "https://ollama.com",
    headers: {
        Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
    },
});

const MODEL = "gemma4";

export const seriesContentGenerate = async () => {
    try {
        console.log("Generating Series Content...");

        const seriesList = await seriesModel.find({
            isCompleted: "pending",
        }).populate('brandId', 'name slug -_id');

        if (!seriesList.length) {
            console.log("No pending series found.");
            return;
        }

        console.log(`Found ${seriesList.length} series.\n`);

        for (let i = 0; i < seriesList.length; i++) {
            const currentSeries = seriesList[i];
            const brandName = currentSeries.brandId?.name;
            const seriesName = currentSeries.name;

            console.log(
                `[${i + 1}/${seriesList.length}] Generating ${brandName} ${seriesName}...`
            );

            if (!brandName) {
                console.error(`❌ Skipping "${seriesName}" — missing populated brandId.name`);
                continue;
            }

            try {
                const heroRes = await ollama.chat({
                    model: MODEL,
                    messages: [
                        {
                            role: "user",
                            content: series_hero_prompt({
                                BRAND: brandName,
                                SERIES: seriesName,
                            }),
                        },
                    ],
                });

                const aboutRes = await ollama.chat({
                    model: MODEL,
                    messages: [
                        {
                            role: "user",
                            content: series_about_prompt({
                                BRAND: brandName,
                                SERIES: seriesName,
                            }),
                        },
                    ],
                });

                const faqRes = await ollama.chat({
                    model: MODEL,
                    messages: [
                        {
                            role: "user",
                            content: series_faq_prompt({
                                BRAND: brandName,
                                SERIES: seriesName,
                            }),
                        },
                    ],
                });

                const seoRes = await ollama.chat({
                    model: MODEL,
                    messages: [
                        {
                            role: "user",
                            content: series_seo_prompt({
                                BRAND: brandName,
                                SERIES: seriesName,
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
                        title: heroData.title || `${brandName} ${seriesName}`,
                        subtitle: heroData.subtitle || "Smartphones",
                        description: heroData.description || "",
                        stats: {
                            totalModels: heroData.stats?.totalModels || 0,
                            seriesStarted: heroData.stats?.seriesStarted || 0,
                            latestModel: heroData.stats?.latestModel || "",
                            averageRating: heroData.stats?.averageRating || 4.7,
                            priceRange: heroData.stats?.priceRange || "",
                            aiReviews: true,
                        },
                    },

                    about: {
                        heading: aboutData.heading || `About ${brandName} ${seriesName}`,
                        description: aboutData.description || "",
                        firstReleased: aboutData.firstReleased || 0,
                        seriesCategory: aboutData.seriesCategory || "",
                        operatingSystem: aboutData.operatingSystem || "",
                        targetAudience: aboutData.targetAudience || "",
                        globalAvailability: aboutData.globalAvailability || "",
                        designFocus: aboutData.designFocus || "",
                        softwareExperience: aboutData.softwareExperience || "",
                        cameraFocus: aboutData.cameraFocus || "",
                        displayTechnology: aboutData.displayTechnology || "",
                        performanceFocus: aboutData.performanceFocus || "",
                        keyModels: aboutData.keyModels || [],
                    },

                    faqs: faqData.faqs || [],

                    seo: seoData.seo || seoData,

                    isCompleted: "completed",
                };

                await seriesModel.findByIdAndUpdate(
                    currentSeries._id,
                    generatedContent,
                    { new: true }
                );

                console.log(`✅ ${brandName} ${seriesName} completed.\n`);
            } catch (err) {
                console.error(`❌ Failed to generate ${brandName} ${seriesName}`);
                console.error(err);
            }
        }

        console.log("🎉 All series processed.");
    } catch (err) {
        console.error("Series Content Generator Error");
        console.error(err);
    }
};

export const seriesImageGenerate = async () => {
    const imageModel = 'x/flux2-klein:4b'
    try {
        const series = await seriesModel.find({ isCompleted: 'completed', isImageCompleted: false }).populate('brandId', 'name slug -_id');

        if (!series.length) {
            console.log("No pending series found.");
            return;
        }
        console.log(`Found ${series.length} series.\n`);

        for (let i = 0; i < series.length; i++) {
            try {
                const res = await ollama.chat({
                    model: imageModel,
                    messages: [
                        {
                            role: "user",
                            content: series_hero_img_prompt({
                                BRAND: series?.brandId?.name,
                                SERIES: series.name,
                            }),
                        },
                    ],
                });

                console.log(res)

            } catch (error) {
                console.error(
                    `❌ Failed to generate image for ${series.name}`
                );
                console.error(error);
            }
        }


    } catch (error) {
        console.error("Series Image Generator Error");
        console.error(err);
    }
}