import { Schema } from "mongoose";

const staffSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }

},
    {
        timestamps: true
    }
);


export default staffSchema