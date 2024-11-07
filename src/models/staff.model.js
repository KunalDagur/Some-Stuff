import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const staffSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
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
        // required: true
    },
    avatar: {
        type: String,
    },
    coverImage: {
        type: String,
        // required: true
    },
    dob: {
        type: Date,
        // required: true
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

staffSchema.pre("save", function (next) {
    if (!password.isModified()) return next();
    this.password = bcrypt.hash(this.password, 10)
    return next();
})

staffSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

staffSchema.methods.generateAccessToken = async function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        department: this.department,
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        })
}

staffSchema.methods.generateRefreshToken = async function () {
    return jwt.sign({
        id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const Staff = mongoose.model("Staff", staffSchema)
