import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();


const DBURL = process.env.DB_URL;
export const connectDB = async () => {
    try {
        await mongoose.connect(DBURL);
        console.log("Conexión exitosa a la base de datos");
        } catch (error) {
            console.error("Error al conectar a la base de datos");
        }
    };