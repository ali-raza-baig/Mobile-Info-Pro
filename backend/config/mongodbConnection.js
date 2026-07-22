import mongoose from "mongoose";

const dbconnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected')
        return connection;
    } catch (error) {
        console.log('Database not connected', error)
        return;
    }
}

export default dbconnect;