import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
// import staffModel from "../models/staff.model.js";
import { Staff } from "../models/staff.model.js";
import { mongoose } from "mongoose";


const registerStaff = asyncHandler(async (req, res) => {
    const { name, email, password, department } = req.body;
    if (!name) {
        throw new apiError(400, "Name is required");
    }

    console.log(name)

    if (!email) {
        throw new apiError(400, "Email is required");
    }

    console.log(email)

    const existedEmail = await staffModel.findOne({ email });

    if (existedEmail) {
        throw new apiError(400, "Email already exists");
    }

    if (!email.includes("@")) {
        throw new apiError(400, "Enter Vaild Email id");
    }

    if (!password) {
        throw new apiError(400, "Password is required");
    }

    console.log(password)

    if (!department) {
        throw new apiError(400, "Department is required");
    }

    console.log(department)

    const staff = await Staff.create({
        name: name,
        email: email,
        password,
        department,
        gender
    })

    console.log(staff)

    if (!staff) {
        throw new apiError(400, "Something went wrong");
    }

    return res
        .status(201)
        .json(new apiResponse(201, {}, "Staff created successfully"))
})

export { registerStaff }