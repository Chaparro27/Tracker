import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./infrastructure/routes/user.route";
import { connectDB } from "./infrastructure/db/mongodb";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001

connectDB();
app.use("/api", userRoute);
app.listen(port, ()=> console.log(`Listening on ${port}`));