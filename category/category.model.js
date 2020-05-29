import mongoose from "mongoose";
const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;


const category = new Schema( {
    title: {
        type: String,
        required: true
    },
    items: [{
        type: ObjectId,
        required: true
    }],
} );

const Category = mongoose.model( "Category", category );


export { Category };