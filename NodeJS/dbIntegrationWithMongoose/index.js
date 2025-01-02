const mongoose = require("mongoose")
const Book = require("./schema.js")


const uri = "mongodb+srv://vishnu:root123@demo.dwtmq.mongodb.net/"

mongoose.connect(uri)
    .then(() => console.log("connected to mongodb with mongoose"))
    .catch((err) => console.error("connection failed:", err))

async function createBook() {
    const newBook = new Book({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genres: ['Fiction', 'Classic']
    });

    const savedBook = await newBook.save();
    console.log('Book created:', savedBook);
}

async function findBook() {
    const result = await Book.find()
    console.log("all books", result)
    const spBook = await Book.find({ title: "1984" })
    console.log("specific book", spBook)
}

async function updateBook() {
    const updatedBook = await Book.updateOne({ title: "The Great Gatsby" }, { $set: { year: 1950 } })
    console.log("updated", updatedBook)
}

async function deleteBook() {
    const deleteBook = await Book.deleteOne({ title: '1984' })
    console.log("book is deleted", deleteBook)
}
// deleteBook()
// findBook()
// updateBook()

createBook();
