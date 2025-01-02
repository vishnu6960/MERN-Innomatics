const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 5 },
    author: { type: String, required: true },
    year: { type: Number, default: 2000 },
    genres: [String],
    available: { type: Boolean, default: true }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book

