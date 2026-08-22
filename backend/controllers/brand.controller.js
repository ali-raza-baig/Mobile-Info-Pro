import slugify from 'slugify'
import brandModel from '../models/brandModel.js';

export const createBrandsController = async (req, res) => {
    try {
        const { name, globalStanding, knownFor } = req.body;

        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Name of brand must required'
            })
        }

        const exist = await brandModel.findOne({ name: name });
        if (exist) {
            return res.status(400).send({
                success: false,
                message: 'Brand all ready exist'
            })
        };

        const slug = await slugify(name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
            strict: true,
            trim: true,
        })

        const brand = await brandModel({ name, slug, globalStanding, knownFor }).save()
        if (!brand) {
            return res.status(400).send({
                success: false,
                messsage: 'Error in creating new brand document'
            })
        }

        res.status(200).send({
            success: true,
            message: 'New brand created'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const getAllBrandsController = async (req, res) => {
    try {
        const allBrands = await brandModel.find({ isActive: true, isCompleted: 'completed', isImageCompleted: true }).select('name logo _id slug')

        res.status(200).send({
            success: true,
            message: 'All brands',
            brands: allBrands
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const updateBrandsController = async (req, res) => {
    try {
        const { slug } = req.params;

        let updateData = {};


        const exist = await brandModel.findOne({ slug })
        if (!exist) {
            return res.status(400).send({
                success: false,
                message: 'Brand not exist'
            })
        }

        Object.keys(req.body).forEach((key) => {
            if (req.body[key] !== undefined) {
                updateData[key] = req.body[key];
            }
        })

        const update = await brandModel.findOneAndUpdate(
            { slug: slug },
            updateData,
            { new: true, runValidators: true, }
        )

        if (!update) {
            return res.status(409).send({
                success: false,
                message: 'Error in update'
            })
        }
        res.status(200).send({
            success: true,
            message: `Brand   updated`,
            brand: update
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const singleBrandsController = async (req, res) => {
    try {
        const { slug } = req.params;

        const oneBrand = await brandModel.findOne({ slug, isActive: true })

        if (!oneBrand) {
            return res.status(400).send({
                success: false,
                message: `Brand not found`
            })
        }

        res.status(200).send({
            success: true,
            message: 'Brand found',
            brand: oneBrand
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}
export const pendingBrandsController = async (req, res) => {
    try {

        const pendingBrand = await brandModel.find({ ...req.body })

        if (pendingBrand.length === 0) {
            return res.status(200).send({
                success: false,
                message: `pendingBrand not found`
            })
        }

        res.status(200).send({
            success: true,
            message: 'Brand found',
            brand: pendingBrand
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}

export const deleteBrandsController = async (req, res) => {
    try {
        const { name, slug } = req.body;

        const deleteOne = await brandModel.findOneAndDelete({ name: name, slug: slug })

        if (!deleteOne) {
            return res.status(400).send({
                success: false,
                message: "Error in deleting "
            })
        }

        res.status(200).send({
            success: true,
            message: 'Brand Deleted Successfully'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}