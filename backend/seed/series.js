import brandModel from "../models/brandModel.js";
import fs from "fs/promises";
import path from "path";
import seriesModel from "../models/seriesModel.js";
import slugify from 'slugify'

export const rawToSeries = async () => {
    try {
        const brands = await brandModel.find({ isCompleted: "completed", isSeriesCreated: false }).select({ name: 1, slug: 1, _id: 1, });

        const seriesFolder = path.join(
            path.resolve(process.cwd(), ".."),
            "series_details"
        );

        for (let i = 0; i <= brands.length; i++) {
            const selected = brands[i];

            try {
                const filePath = path.join(
                    seriesFolder,
                    `${selected.slug}.json`
                );

                const seriesPage = await fs.readFile(filePath, "utf8");

                const { series } = JSON.parse(seriesPage);

                for (let item of series) {

                    const exist = await seriesModel.findOne({ name: item.name });
                    if (exist) {
                        console.log(`Series name all ready exist`)
                        continue
                    };

                    const slug = await slugify(item.name, {
                        lower: true,
                        remove: /[*+~.()'"!:@]/g,
                        strict: true,
                        trim: true,
                    })



                    const series = await seriesModel(
                        {
                            name: item.name,
                            slug,
                            brandId: selected._id,
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

                        }).save()

                    if (!series) {
                        console.log(`Series not created for ${item.name}`)
                        continue
                    }
                    console.log(`Series created for ${item.name}`)
                }

                await brandModel.findByIdAndUpdate(selected._id, { isSeriesCreated: true })

            } catch (error) {
                console.error(
                    `Error processing ${selected.name}:`,
                    error.message
                );
            }
        }
    } catch (error) {
        console.error("Error in rawToSeries:", error);
    }
};