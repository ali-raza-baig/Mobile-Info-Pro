import dotenv from 'dotenv';
dotenv.config()
import path from 'path';
import fs from "fs/promises";
import parseJSON from '../utils/parseJson.js';
import {
    series_hero_prompt,
    series_about_prompt,
    series_faq_prompt,
    series_seo_prompt,
    series_hero_img_prompt,
    find_series_prompt,
} from "../prompts/series.js";
import { Ollama } from "ollama";
import { fetchPendingBrands, updateBrands } from './brand.js';
import fileExists from '../utils/fileExists.js';

const ollama = new Ollama({
    host: "https://ollama.com",
    headers: {
        Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
    },
});

const MODEL = "gemma4";


export const pendingSeries = async (arg = {}) => {
    try {
        const res = await fetch(`${process.env.BACKEND}/api/series/pending-series`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...arg })
        })

        if (!res.ok) {
            throw new Error('Error in pending series')
        }
        const data = await res.json()
        return data.series
        // return data

    } catch (error) {
        console.log(`Error in finding pendiong series`, error)
        throw error
    }
}

export const updateSeries = async (slug, arg = {}) => {
    try {
        const res = await fetch(`${process.env.BACKEND}/api/series/update/${slug}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...arg })
        })

        const responseText = await res.text();

        if (!res.ok) {
            throw new Error(`Error in update series`, responseText)
        }

        return responseText
            ? JSON.parse(responseText)
            : await res.json();

    } catch (error) {
        console.log(`Error in update series`)
        throw error
    }
}

export const createSeries = async ({ name, brandId }) => {
    try {
        const res = await fetch(`${process.env.BACKEND}/api/series/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, brandId })
        })
        if (!res.ok) {
            throw new Error(`Error in creating series`)
        }

        const data = await res.json()

        return data

    } catch (error) {
        console.log(`Error in creating new series`, error);
        throw error;
    }
}

export const brandsFileForSeries = async () => {
    try {
        const activeBrands = await fetchPendingBrands({
            isSeriesCreated: false,
        });

        if (!Array.isArray(activeBrands) || activeBrands.length === 0) {
            console.log("No pending brands for series");
            return;
        }

        const seriesFolder = path.join(
            process.cwd(),
            "content",
            "series-content"
        );

        // Creates folder if it doesn't exist
        await fs.mkdir(seriesFolder, {
            recursive: true
        });

        for (const brand of activeBrands) {
            try {
                const filePath = path.join(
                    seriesFolder,
                    `${brand.slug}.json`
                );

                if (await fileExists(filePath)) {
                    console.log(`⏭️ File already exists: ${brand.name}`);
                    continue;
                }

                const content = find_series_prompt({
                    BRAND: brand.name
                });

                await fs.writeFile(
                    filePath,
                    content,
                    "utf-8"
                );

                console.log(`✅ Created series file: ${brand.name}`);
            } catch (error) {
                console.error(
                    `❌ File not created for ${brand.name}:`,
                    error.message
                );
            }
        }
    } catch (error) {
        console.error(
            "❌ Error generating series files:",
            error.message
        );
    }
};

export const fileRawToSeries = async () => {
    try {
        const brands = await fetchPendingBrands({ isSeriesCreated: false })
        if (!Array.isArray(brands) || brands.length === 0) {
            console.log(`No Pending brand for series`)
            return;
        }

        const seriesFolder = path.join(process.cwd(), 'content', 'series-content');

        await fs.mkdir(seriesFolder, {
            recursive: true
        })

        for (let i = 0; i < brands.length; i++) {
            const selected = brands[i];

            try {
                const filePath = path.join(
                    seriesFolder,
                    `${selected.slug}.json`
                );


                const seriesPage = await fs.readFile(filePath, "utf8");

                const { series } = parseJSON(seriesPage);

                for (let item of series) {

                    const createNewSeries = await createSeries({ name: item.name, brandId: selected._id })
                    if (createNewSeries.already) {
                        console.log(`${item.name} Series already Exist`)
                        continue;
                    }
                    const slug = await createNewSeries.series.slug

                    const seriesContent = {

                        status: item.status,

                        launch_price: item.launch_price,
                        popular_models: item.popular_models,
                        primary_markets: item.primary_markets,

                        mix: {
                            alternative_names: item.alternative_names,
                            first_release_year: item.first_release_year,
                            latest_release_year: item.latest_release_year,
                            market_position: item.market_position,
                            target_audience: item.target_audience,
                            characteristics: item.characteristics,
                            historical_notes: item.historical_notes,
                            confidence: item.confidence
                        },

                    }

                    const updateNewSeries = await updateSeries(slug, { ...seriesContent })

                    if (!updateNewSeries.success) {
                        console.log(`❌ Series not created for ${item.name}`)
                        continue
                    }
                    console.log(`✅ Series created for ${item.name}`)
                }

                await updateBrands(selected.slug, { isSeriesCreated: true })

            } catch (error) {
                console.error(
                    `Error processing ${selected.name}:`,
                    error
                );
            }
        }
    } catch (error) {
        console.error("Error in rawToSeries:", error);
    }
};

export const seriesContentGenerate = async () => {
    try {
        console.log("Generating Series Content...");

        const seriesList = await pendingSeries({ isActive: false, isCompleted: "pending" })

        if (!Array.isArray(seriesList) || seriesList.length === 0) {
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

                await updateSeries(currentSeries.slug, { ...generatedContent })

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