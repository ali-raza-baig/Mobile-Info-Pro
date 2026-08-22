import express from 'express';
import { byBrandSeriesController, createSeriesController, deleteSeriesController, getAllSeriesController, pendingSeriesController, singleSeriesController, updateSeriesController } from '../controllers/series.controller.js';


const routes = express.Router()

routes.post('/create', createSeriesController)
routes.get('/get', getAllSeriesController)
routes.get('/single/:slug', singleSeriesController)
routes.get('/by-brand/:brandid', byBrandSeriesController)
routes.patch('/update/:slug', updateSeriesController)
routes.delete('/delete', deleteSeriesController)
routes.post('/pending-series', pendingSeriesController)

export default routes;