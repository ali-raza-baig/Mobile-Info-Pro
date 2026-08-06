
import slugify from 'slugify'
import seriesModel from '../models/seriesModel.js';

export const createSeriesController = async (req, res) => {
    try {
        const { name, brandId } = req.body;

        if (!name || !brandId) {
            return res.status(400).send({
                success: false,
                message: 'Name and brandId are must required'
            })
        }

        const exist = await seriesModel.findOne({ name: name });
        if (exist) {
            return res.status(400).send({
                success: false,
                message: 'Series name all ready exist'
            })
        };

        const slug = await slugify(name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
            strict: true,
            trim: true,
        })

        const series = await seriesModel({ name, slug, brandId }).save()
        if (!series) {
            return res.status(400).send({
                success: false,
                messsage: 'Error in creating new series document'
            })
        }

        res.status(200).send({
            success: true,
            message: 'New series created'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const getAllSeriesController = async (req, res) => {
    try {
        const allSeries = await seriesModel.find({ isActive: true }).select('name logo _id slug').limit(8)

        res.status(200).send({
            success: true,
            message: 'All Series',
            series: allSeries
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const updateSeriesController = async (req, res) => {
    try {
        const { slug } = req.params;

        let updateData = {};


        const exist = await seriesModel.findOne({ slug })
        if (!exist) {
            return res.status(400).send({
                success: false,
                message: 'Series not exist'
            })
        }

        Object.keys(req.body).forEach((key) => {
            if (req.body[key] !== undefined) {
                updateData[key] = req.body[key];
            }
        })

        const update = await seriesModel.findOneAndUpdate(
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
            message: `Series updated`,
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

export const singleSeriesController = async (req, res) => {
    try {
        const { slug } = req.params;

        const oneSeries = await seriesModel.findOne({ slug, isActive: true }).populate('brandId', 'name slug')

        if (!oneSeries) {
            return res.status(400).send({
                success: false,
                message: `Series not found`
            })
        }

        res.status(200).send({
            success: true,
            message: 'Series found',
            series: oneSeries
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const byBrandSeriesController = async (req, res) => {
    try {
        const { brandid } = req.params;

        const SeriesByBrand = await seriesModel.find({ brandId: brandid, isActive: true }).select('name _id slug seo.imageAlt heroImage')

        if (!SeriesByBrand) {
            return res.status(400).send({
                success: false,
                message: `Series not found`
            })
        }

        res.status(200).send({
            success: true,
            message: 'Series found',
            series: SeriesByBrand
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const deleteSeriesController = async (req, res) => {
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
            message: 'Series Deleted Successfully'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}