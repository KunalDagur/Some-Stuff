import { Mongoose, Schema } from "mongoose";

const staffSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);


export const Staff = new Mongoose.model("Staff", staffSchema)
