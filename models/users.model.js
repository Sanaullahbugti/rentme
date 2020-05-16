import mongoose from "mongoose";
const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;


const user = new Schema( {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,

    },
    phoneNumber: {
        type: String,
        required: true
    },
    profilePicture: { type: String },
    address: {
        street: { type: String },
        city: { type: String }
    },
    items: [{
        type: ObjectId
    }]
} );

// Creating Local Driver Model
const User = mongoose.model( "User", user );

// Exporting Local Driver Model
export { User };