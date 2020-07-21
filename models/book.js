const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const SchemaOptions = {
    bufferCommands: false,
    autoCreate: true,
}
const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        lowercase: true
    }
});


bookSchema.set(SchemaOptions)



// convert schema into model
const Books = mongoose.model("Books", bookSchema);


module.exports = Books;
