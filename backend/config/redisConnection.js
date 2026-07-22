import { createClient } from "redis";

export const redisClient = createClient({
    url: process.env.REDIS_URI,
});

redisClient.on("error", (err) => {
    console.error("Redis Error:", err);
});

const initializeRedisClient = async () => {
    if (!redisClient.isOpen) {
        await redisClient.connect();
        console.log("✅ Connected to Redis");
    }
};

export default initializeRedisClient;