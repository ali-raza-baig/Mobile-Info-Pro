import express from 'express';
import { createBrandsController, deleteBrandsController, getAllBrandsController, singleBrandsController, updateBrandsController } from '../controllers/brand.controller.js';

const routes = express.Router()

routes.post('/create', createBrandsController)
routes.get('/get', getAllBrandsController)
routes.get('/single/:slug', singleBrandsController)
routes.patch('/update/:slug', updateBrandsController)
routes.delete('/delete', deleteBrandsController)

export default routes;