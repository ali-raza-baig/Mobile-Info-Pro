import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs/promises'
import { Ollama } from "ollama";
import parseJSON from "../utils/parseJson.js";
import path from 'path';
import { find_model_names_prompt, model_details_prompt, model_faqs_prompt, model_seo_prompt, model_spec_prompt } from '../prompts/model.js';
import extractBrowser from '../utils/extractBrowser.js';
import { pendingSeries, updateSeries } from './series.js';
import fileExists from '../utils/fileExists.js';

const MODEL = "gpt-oss:120b";

const ollama = new Ollama({
    host: "https://ollama.com",
    headers: {
        Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
    },
});

const localOllama = new Ollama({ host: 'http://localhost:11434' })


// find active series and create prompt files that used to find models under series 
// use these files and and create model documents 
// then use ollam for content generation 
// web scrapping and ollama for specification 
// diff. affliate program for price etc


export const findActiveSeriesAndCreateFiles = async () => {
    try {
        const series = await pendingSeries({ status: 'Active', isModelCreated: false })
        if (!Array.isArray(series) || series.length === 0) {
            console.log(`======= \n No Pending series for models \n =======`)
            return;
        };
        const modelFolder = path.join(process.cwd(), 'content', 'model-content')
        await fs.mkdir(modelFolder, {
            recursive: true
        })

        for (let item of series) {
            const filePath = path.join(modelFolder, `${item.slug}.json`)
            if (await fileExists(filePath)) {
                console.log(`⏭️ File already exists: ${item.name}`);
                continue;
            }
            await fs.writeFile(filePath, find_model_names_prompt({ BRAND: item.brandId.name, SERIES: item.name }))

        }


    } catch (error) {
        console.log(`Error in finding active series`, error)
    }
}

const createModel = async ({ name, brandId, seriesId }) => {
    try {
        const res = await fetch(`${process.env.BACKEND}/api/model/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                brandId,
                seriesId,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data?.message || `Failed to create model: ${res.status}`
            );
        }

        if (!data?.model) {
            throw new Error('Model was created but no model data was returned');
        }

        return data.model;

    } catch (error) {
        console.error(`Error creating model "${name}":`, error);
        throw error;
    }
};


const updateModel = async (slug, updateData = {}) => {
    try {
        if (!slug) {
            throw new Error('Model slug is required for update');
        }

        const res = await fetch(
            `${process.env.BACKEND}/api/model/update/${encodeURIComponent(slug)}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            }
        );

        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data?.message || `Failed to update model: ${res.status}`
            );
        }

        if (!data?.model) {
            throw new Error('Model update succeeded but no model was returned');
        }

        return data.model;

    } catch (error) {
        console.error(`Error updating model "${slug}":`, error);
        throw error;
    }
};

export const FileToModel = async () => {
    try {
        const series = await pendingSeries({ status: 'Active', isModelCreated: false })
        if (!Array.isArray(series) || series.length === 0) {
            console.log(`======= \n No Pending series for models \n =======`)
            return;
        };
        const modelFolder = path.join(process.cwd(), './content/model-content')
        for (let item of series) {

            try {
                const filePath = path.join(modelFolder, `${item.slug}.json`)

                const modelsPhone = await fs.readFile(filePath, "utf-8")
                const parsedPhonesModels = parseJSON(modelsPhone)

                for (let model of parsedPhonesModels.models) {
                    try {
                        const createdModel = await createModel({
                            name: model.name,
                            brandId: item.brandId._id,
                            seriesId: item._id
                        });

                        if (!createdModel) {
                            throw new Error(`Failed to create model: ${model.name}`);
                        }

                        const {
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
                        await updateModel(createdModel.slug, {
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
                            successor
                        })
                    } catch (error) {
                        console.log(`Model for ${model.name} not created`)
                        console.log(error)
                    }

                }

                await updateSeries(item.slug, { isModelCreated: true })

            } catch (error) {
                console.log(`Error in creating models for ${item.name}`, error)
            }
        }

    } catch (error) {
        console.log(`Error in file to model `)
    }
}

const pendingModels = async (arg = {}) => {
    try {
        const res = await fetch(`${process.env.BACKEND}/api/model/pending-models`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...arg })
        })

        if (!res.ok) {
            console.log(`Error in finding pending models`)
            throw new Error('Error in finding pending models')
        };

        const data = await res.json();
        return data.models;

    } catch (error) {
        console.log(`Error in finding Pending models`)
        throw error
    }
}

export const modelsContentGenerate = async () => {

    try {
        console.log("Generating Phone Model Content...");

        const models = await pendingModels({ contentCompleted: false });

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
                                score: detailsData.aiRating?.score || 7.8,
                                explanation: detailsData.aiRating?.explanation || ''
                            }
                        },
                    },
                    contentCompleted: true
                };

                await updateModel(model.slug, { ...generatedContent })

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
        const pendingModel = await pendingModels({ contentCompleted: true, specCompleted: false })

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

                await updateModel(model.slug, { specifications: { ...newSpec } })

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