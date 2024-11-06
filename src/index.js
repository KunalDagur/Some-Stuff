import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from "./db/db.js";
import express from "express";

dotenv.config({
    path: './env'
})

const app = express();

const PORT = process.env.PORT || 8000

connectDB().then(() => {
    app.listen(PORT, (error) => {
        console.log(`⚙️  Server is running at ${PORT}`)
    })
}).catch((error) => {
    console.log(`Error while connecting`, error);
})