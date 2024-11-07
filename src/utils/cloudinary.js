import { v2 as cloudinary } from "cloudinary"
// import { response } from "express"
import { type } from "os"

import fs, { unlink, unlinkSync } from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_URL,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) {
            throw new Error("No file provided")
            return null;
        } else {
            const result = await cloudinary.uploader.upload(localfilepath, {
                resource_type: "auto"
            });
            console.log("File has been upload successfully", result.url);

            console.log(result.url)

            fs.unlinkSync(localfilepath);
            return result.url;
        }
    } catch (error) {
        console.log("Upload error : " + error)
        fs.unlinkSync(localfilepath);
        return null;
    }
}

export default uploadOnCloudinary