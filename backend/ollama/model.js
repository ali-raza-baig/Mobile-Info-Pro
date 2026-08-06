import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'
import { Ollama } from "ollama";
import parseJSON from "../utils/parseJson.js";
import path from 'path';
import seriesModel from '../models/seriesModel.js';
import { find_model_names_prompt, model_details_prompt, model_faqs_prompt, model_seo_prompt, model_spec_prompt } from '../prompts/model.js';
import slugify from 'slugify'
import { variantModel } from '../models/variantModel.js';
import phoneModel from '../models/phoneModel.js';
import extractBrowser from '../utils/extractBrowser.js';

const MODEL = "gpt-oss:120b";

const ollama = new Ollama({
    host: "https://ollama.com",
    headers: {
        Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
    },
});

const localOllama = new Ollama({ host: 'http://localhost:11434' })

export const findModelBySeries = async () => {
    // console.log(await ollama.list())

    console.log("\n====================================================");
    console.log("🚀 Starting Model Discovery...");
    console.log("====================================================\n");

    try {
        const pendingSeries = await seriesModel
            .find({})
            .select("_id name status slug")
            .populate("brandId", "name slug _id");

        console.log(`📦 Total Series Found: ${pendingSeries.length}\n`);

        if (!pendingSeries.length) {
            console.log("✅ No pending series found.\n");
            return;
        }

        for (let i = 0; i < pendingSeries.length; i++) {
            const startTime = Date.now();

            let success = true;

            const brandName = pendingSeries[i].brandId.name;
            const seriesName = pendingSeries[i].name;
            const brandId = pendingSeries[i].brandId._id;
            const seriesId = pendingSeries[i]._id;

            console.log("----------------------------------------------------");
            console.log(`📱 [${i + 1}/${pendingSeries.length}] ${brandName} → ${seriesName}`);
            console.log("----------------------------------------------------");

            console.log("🌐 Asking Ollama for models...");

            const phoneModelRes = await ollama.chat({
                model: MODEL,
                messages: [
                    {
                        role: "user",
                        content: find_model_names_prompt({
                            BRAND: brandName,
                            SERIES: seriesName,
                        }),
                    },
                ],
                options: {
                    web_search: true
                },
                format: "json",
            });

            const { models } = parseJSON(phoneModelRes.message.content);

            console.log(`✅ Ollama returned ${models.length} models.\n`);

            let created = 0;
            let skipped = 0;

            for (const model of models) {

                console.log(`🔍 Checking: ${model.name}`);

                const exists = await phoneModel.findOne({
                    brandId,
                    seriesId,
                    name: model.name,
                });

                if (exists) {
                    skipped++;
                    console.log(`   ⚠️ Already exists`);
                    continue;
                }

                const {
                    name,
                    category,
                    status,
                    colors,
                    ram,
                    storage,
                    memoryVariants,
                    announcementDate,
                    releaseDate,
                    discontinuedYear,
                    generation,
                    modelNumbers,
                    predecessor,
                    successor,
                } = model;

                const slug = await slugify(`${brandName}-${name}`, {
                    lower: true,
                    remove: /[*+~.()'"!:@]/g,
                    strict: true,
                    trim: true,
                });

                try {

                    console.log(`   💾 Creating model...`);

                    const newModel = await phoneModel({
                        brandId,
                        seriesId,
                        name,
                        slug,
                        category,
                        status,
                        colors,
                        ram,
                        storage,
                        announcementDate,
                        releaseDate,
                        discontinuedYear,
                        generation,
                        modelNumbers,
                        predecessor,
                        successor,
                    }).save();

                    console.log(`   ✅ Model created (${newModel._id})`);

                    console.log(`   📦 Creating ${memoryVariants.length} variants...`);

                    const variants = await variantModel.insertMany(
                        memoryVariants.map((m) => ({
                            ...m,
                            phoneId: newModel._id,
                        }))
                    );

                    const variantIds = variants.map((v) => v._id);

                    await phoneModel.findByIdAndUpdate(newModel._id, {
                        memoryVariants: variantIds,
                    });

                    console.log(`   ✅ ${variantIds.length} variants linked.`);

                    created++;

                } catch (error) {
                    success = false;

                    console.error(`   ❌ Failed to create "${model.name}"`);
                    console.error(error);
                }

                console.log("");
            }

            if (success) {
                await seriesModel.findByIdAndUpdate(seriesId, {
                    isModelCreated: true,
                });

                console.log("🎉 Series marked as completed.");
            } else {
                console.log("⚠️ Some models failed. Series not marked complete.");
            }

            console.log("\n📊 Summary");
            console.log(`   ✔ Created : ${created}`);
            console.log(`   ⏭ Skipped : ${skipped}`);
            console.log(`   📱 Total   : ${models.length}`);
            console.log(`   ⏱ Time    : ${((Date.now() - startTime) / 1000).toFixed(2)} sec\n`);
        }

        console.log("====================================================");
        console.log("🏁 Model Discovery Completed.");
        console.log("====================================================");

    } catch (error) {
        console.error("\n❌ Fatal Error in findModelBySeries()");
        console.error(error);
    }
};

export const modelsContentGenerate = async () => {

    try {
        console.log("Generating Phone Model Content...");

        const models = await phoneModel.find({
            contentCompleted: false, status: 'Active',
        }).select('name _id slug').populate([
            { path: 'brandId', select: 'name' },
            { path: 'seriesId', select: 'name' }
        ]);

        if (!models.length) {
            console.log("No pending models found.");
            return;
        }

        console.log(`Found ${models.length} models.\n`);

        for (let i = 0; i < models.length; i++) {
            const model = models[i];

            console.log(
                `[${i + 1}/${models.length}] Generating ${model.name}...`
            );

            try {
                const brandName = model.brandId.name;
                const seriesName = model.seriesId.name;
                const modelName = model.name;

                const [details, faqs, seo] = await Promise.all([
                    ollama.chat({
                        model: MODEL,
                        messages: [{
                            role: 'user', content: model_details_prompt({
                                BRAND: brandName, SERIES: seriesName, MODEL: modelName
                            })
                        }],
                        // tools: [webSearch, webFetch],
                        format: 'json'
                    }),
                    ollama.chat({
                        model: MODEL,
                        messages: [{
                            role: 'user', content: model_faqs_prompt({
                                BRAND: brandName, SERIES: seriesName, MODEL: modelName
                            })
                        }],
                        // tools: [webSearch, webFetch],
                        format: 'json'
                    }),
                    ollama.chat({
                        model: MODEL,
                        messages: [{
                            role: 'user', content: model_seo_prompt({
                                BRAND: brandName, SERIES: seriesName, MODEL: modelName
                            })
                        }],
                        // tools: [webSearch, webFetch],
                        format: 'json'
                    }),
                ])

                const detailsData = parseJSON(details.message.content);
                const faqData = parseJSON(faqs.message.content);
                const seoData = parseJSON(seo.message.content);

                const generatedContent = {
                    content: {
                        faqs: faqData.faqs || faqData || [],
                        seo: seoData.seo || seoData,
                        details: {
                            estimatedPrice: detailsData.estimatedPrice,
                            humanReview: detailsData.humanReview || '',
                            aiReview: detailsData.aiReview || '',
                            aiRating: {
                                score: detailsData.aiRating.score || 7.8,
                                explanation: detailsData.aiRating.explanation || ''
                            }
                        },
                    },
                    contentCompleted: true
                };

                await phoneModel.findByIdAndUpdate(
                    model._id,
                    generatedContent,
                    {
                        returnDocument: 'after'
                    }
                );

                console.log(`✅ ${model.name} completed.\n`);
            } catch (err) {
                console.error(
                    `❌ Failed to generate ${model.name}`
                );
                console.error(err);
            }
        }

        console.log("🎉 All Phone Models processed.");
    } catch (err) {
        console.error("Phone Model Content Generator Error");
        console.error(err);
    }
};

export const modelSpecWriter = async () => {
    try {
        const pendingModel = await phoneModel.find({ status: 'Active', contentCompleted: true, specCompleted: false }).select('name slug _id').populate([
            { path: 'brandId', select: 'name _id slug' },
            { path: "seriesId", select: 'name slug _id' }
        ]);
        if (pendingModel.length <= 0) {
            console.log(`No pending model found`);
            return;
        };
        console.log(`======================\n`);
        console.log(`Pending Phone Models for spec are ${pendingModel.length} \n`)
        console.log(`======================\n`);

        for (let i = 0; i < pendingModel.length; i++) {
            const model = pendingModel[i]
            try {
                console.log(`Writing for model ${model.name} -----[${i + 1}/${pendingModel.length}]`)
                const scrapedContent = await extractBrowser(model.name);

                const ollamaRes = await ollama.chat({
                    model: MODEL,
                    messages: [{
                        role: 'user', content: model_spec_prompt({
                            BRAND: model.brandId.name, SERIES: model.seriesId.name, MODEL: model.name, SCRAPED_DATA: scrapedContent
                        })
                    }],
                    format: 'json'
                })

                const newSpec = parseJSON(ollamaRes.message.content)

                await phoneModel.findByIdAndUpdate(model._id, { specifications: { ...newSpec } }, { returnDocument: 'after' });
                console.log(`✅ Spec for ${model.name} completed.`)

            } catch (error) {
                console.log(`Error in writing model ${model.name}`, error)
            }
        }

    } catch (error) {
        console.log(`Error in Model Spec writer`, error)
    }
}

export const modelsImageGenerate = async () => {
    console.log(`started .....`)
    try {



    } catch (error) {
        console.error("Brands Image Generator Error");
        console.error(error);
    }
}