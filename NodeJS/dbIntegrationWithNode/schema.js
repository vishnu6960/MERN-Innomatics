import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, default: 2000 },
    genres: [String],
    available: { type: Boolean, default: true }
})

export const Book = mongoose.model('Book', bookSchema)
// module.exports = Book