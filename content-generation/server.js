import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import morgan from 'morgan';
import { brandsContentGenerate } from './ollama/brand.js';
import { FileToModel, findActiveSeriesAndCreateFiles, modelsContentGenerate, modelSpecWriter } from './ollama/model.js';


const app = express()

app.use(cors({
    origin: '*'
}));

app.use(morgan('combined'));

modelSpecWriter()

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Ollama content generation running on ${port}`)
});