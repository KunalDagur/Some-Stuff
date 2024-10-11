import { Schema } from "mongoose";

const patientSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        contact: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        age: {
            type: String,
        },
        dob: {
            type: Date,
            required: true
        },
        bloodGroup: {
            type: String,
        },
        emergencyContact: {},
        id: {
            type: Number,
            required: true
        },
        concern: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Patient = mongoose.model("Patient", patientSchema)