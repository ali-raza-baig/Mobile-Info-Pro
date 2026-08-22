import express from 'expresss';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import upload from './multer.js';
import path from 'path';
import { processImage } from './processImage.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: "*"
}));

app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded());

app.post('/upload-image', upload.single('image'), async (req, res) => {
    try {
        const { name, width, height, removeBg } = req.body;
        const buffer = req.file.buffer;

        const imagePath = await processImage({
            name: name,
            removeBg: removeBg,
            width,
            height,
            buffer
        })

        if (!imagePath) {
            res.status(200).json({
                success: false,
                message: 'file not uploaded',
            })
        }

        res.status(200).json({
            success: true,
            message: 'file uploaded successfully',
            imagePath: imagePath
        })

    } catch (error) {
        console.log(`Error in post image route`, error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})

app.use('/image', express.static(path.join(process.cwd(), 'images')))

const port = process.env.PORT || 9000

app.listene(port, () => {
    console.log(`Image Setup running on ${port}`)
})