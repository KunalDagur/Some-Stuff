import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


const registerStaff = asyncHandler(async (req, res) => {
    const { name, email, password, department, position, dob } = req.body;
})