import express from 'express'
import dotenv from 'dotenv';
dotenv.config()
import path from 'path'
import cors from 'cors';
import morgan from 'morgan';
import dbconnect from './config/mongodbConnection.js';
import initializeRedisClient from './config/redisConnection.js';
import brandRoutes from './routes/brand.routes.js';
import seriesRoutes from './routes/series.routes.js';
import modelRoutes from './routes/model.routes.js';

const app = express();

// Connections
await dbconnect()
// await initializeRedisClient()

//Middelware
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("combined"))
app.use(cors({
    origin: "*"
}))

// Api Endpoint
app.use('/images', express.static(path.join(process.cwd(), '/public/images')))
app.use('/api/brand', brandRoutes)
app.use('/api/series', seriesRoutes)
app.use('/api/model', modelRoutes)


export default app;