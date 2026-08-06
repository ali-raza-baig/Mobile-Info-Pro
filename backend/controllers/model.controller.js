import slugify from 'slugify'
import brandModel from '../models/brandModel.js';
import phoneModel from '../models/phoneModel.js'

export const createModelController = async (req, res) => {
    try {
        const { name, brandId, seriesId } = req.body;

        if (!name || !brandId || seriesId) {
            return res.status(400).send({
                success: false,
                message: 'Name, seriesId and brandId are must required'
            })
        }

        const exist = await phoneModel.findOne({ name: name });
        if (exist) {
            return res.status(400).send({
                success: false,
                message: 'Model name all ready exist'
            })
        };

        const brand = await brandModel.findOne({ _id: brandId })

        const slug = await slugify(`${brand.name}-${name}`, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
            strict: true,
            trim: true,
        })

        const series = await seriesModel({ name, slug, brandId, seriesId }).save()
        if (!series) {
            return res.status(400).send({
                success: false,
                messsage: 'Error in creating new Model document'
            })
        }

        res.status(200).send({
            success: true,
            message: 'New Model created'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const getAllModelController = async (req, res) => {
    try {
        const allModels = await phoneModel.find({ isActive: true }).select('name logo _id slug').limit(8)

        res.status(200).send({
            success: true,
            message: 'All Models',
            models: allModels
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const updateModelController = async (req, res) => {
    try {
        const { slug } = req.params;

        let updateData = {};


        const exist = await phoneModel.findOne({ slug })
        if (!exist) {
            return res.status(400).send({
                success: false,
                message: 'Phone Model not exist'
            })
        }

        Object.keys(req.body).forEach((key) => {
            if (req.body[key] !== undefined) {
                updateData[key] = req.body[key];
            }
        })

        const update = await phoneModel.findOneAndUpdate(
            { slug: slug },
            updateData,
            { returnDocument: 'after', runValidators: true, }
        )

        if (!update) {
            return res.status(409).send({
                success: false,
                message: 'Error in update'
            })
        }
        res.status(200).send({
            success: true,
            message: `Model updated`,
            series: update
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const singleModelController = async (req, res) => {
    try {
        const { slug } = req.params;

        const oneModel = await phoneModel.findOne({ slug, isActive: true }).populate([{ path: "brandId", select: '_id name slug' },
        { path: "seriesId", select: '_id name slug' }
        ])

        if (!oneModel) {
            return res.status(400).send({
                success: false,
                message: `Model not found`
            })
        }

        res.status(200).send({
            success: true,
            message: 'Model found',
            model: oneModel
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const byBrandModelController = async (req, res) => {
    try {
        const { brandid } = req.params;

        const modelByBrand = await phoneModel.find({ brandId: brandid, isActive: true })

        if (!modelByBrand) {
            return res.status(400).send({
                success: false,
                message: `Model not found`
            })
        }

        res.status(200).send({
            success: true,
            message: 'Model found',
            model: modelByBrand
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const bySeriesModelController = async (req, res) => {
    try {
        const { seriesid } = req.params;

        const modelBySeries = await phoneModel.find({ seriesId: seriesid, isActive: true })

        if (!modelBySeries) {
            return res.status(400).send({
                success: false,
                message: `Model not found`
            })
        }

        res.status(200).send({
            success: true,
            message: 'Model found',
            model: modelBySeries
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const deleteModelController = async (req, res) => {
    try {
        const { name, slug } = req.body;

        const deleteOne = await seriesModel.findOneAndDelete({ name: name, slug: slug })

        if (!deleteOne) {
            return res.status(400).send({
                success: false,
                message: "Error in deleting "
            })
        }

        res.status(200).send({
            success: true,
            message: 'Model Deleted Successfully'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const homePageModelController = async (req, res) => {
    try {
        const allTrandingModels = await phoneModel.find({ isActive: true, tag: 'Tranding' }).select('name images _id slug content.details.estimatedPrice.usa specifications.performance.chipset.name specifications.battery.capacity').limit(8).lean();

        const allNewModels = await phoneModel.find({ isActive: true, tag: 'New' }).select('name images _id slug content.details.estimatedPrice.usa specifications.performance.chipset.name specifications.battery.capacity').limit(8).lean();

        const allPopularModels = await phoneModel.find({ isActive: true, }).select('name images _id slug content.details.estimatedPrice.usa').limit(16)

        res.status(200).send({
            success: true,
            message: 'All Models',
            trandingModel: allTrandingModels,
            newModel: allNewModels,
            popularModel: allPopularModels
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const competitorsController = async (req, res) => {
    try {
        const { min, max } = req.body;
        const models = await phoneModel.find({}).select('name content.details.estimatedPrice slug _id images').limit(12).lean();

        res.status(200).send({
            message: 'Best compatitors',
            models: models,
            success: true
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal Server Error'
        })
    }
}