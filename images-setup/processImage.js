import { removeBackground } from "@imgly/background-removal-node";
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

export const processImage = async ({
    buffer,
    name,
    removeBg,
    width,
    height
}) => {
    const uploadDir = path.join(process.cwd(), "images");

    await fs.mkdir(uploadDir, { recursive: true });

    let transparentBuffer = buffer;

    if (removeBg) {
        // Remove background
        const result = await removeBackground(buffer);

        // Convert Blob → Buffer
        const arrayBuffer = await result.arrayBuffer();
        transparentBuffer = Buffer.from(arrayBuffer);
    }

    // Compress + convert to WebP
    const filename = `${name}.webp`;
    const outputPath = path.join(uploadDir, filename);

    const image = sharp(transparentBuffer)

    if (width || height) {
        image.resize({
            width: Number(width) || undefined,
            height: Number(height) || undefined,
            withoutEnlargement: true,
            fit: 'inside'
        })
    }

    await image.webp({
        quality: 80,
        alphaQuality: 90,
    })
        .toFile(outputPath);

    return `${filename}`;
};