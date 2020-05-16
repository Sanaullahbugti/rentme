import mongoose from "mongoose";
const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;


const item = new Schema( {
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    rentPerDay: {
        type: Number,
        required: true,
    },
    category: {
        type: ObjectId,
        required: true
    },
    bookedForNextDays: {
        type: Number,
        default: 0
    },
    booked: {
        type: Boolean,
        default: false
    }
} );

const Items = mongoose.model( "Items", item );


export { Items };