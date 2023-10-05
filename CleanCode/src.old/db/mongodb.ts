import "dotenv/config";
import mongoose from 'mongoose';

const DB = process.env.DB_URI
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/tracker");
        console.log("Conexión exitosa a la base de datos");
        } catch (error) {
            console.error("Error al conectar a la base de datos:", DB);
        }
    };