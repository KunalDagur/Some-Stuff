import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from "./db/db.js";

dotenv.config({
    path: './env'
})

connectDB().then(() => {
    console.log(`Server is running at ${process.env.PORT}`);
}).catch((error) => {
    console.log(`Error while connecting`, error);
})