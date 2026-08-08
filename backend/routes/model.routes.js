import express from 'express';
import { byBrandModelController, bySeriesModelController, competitorsController, createModelController, deleteModelController, getAllModelController, getProductsController, homePageModelController, singleModelController, updateModelController } from '../controllers/model.controller.js';

const routes = express.Router()

routes.post('/create', createModelController)
routes.get('/get', getAllModelController)
routes.get('/single/:slug', singleModelController)
routes.get('/by-brand/:brandid', byBrandModelController)
routes.get('/by-series/:seriesid', bySeriesModelController)
routes.patch('/update/:slug', updateModelController)
routes.delete('/delete', deleteModelController)
routes.get('/home-page', homePageModelController)
routes.post('/competitor', competitorsController)
routes.get('/collection', getProductsController)

export default routes;