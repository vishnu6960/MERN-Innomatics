const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/"

const client = new MongoClient(uri)

async function connectToDB() {
    try {
        await client.connect()
        console.log("connected to Mongodb")
    }
    catch (err) {
        console.log("Error while connecting", err)
    }
}

connectToDB()

const db = client.db('library')
const books = db.collection('books')
async function insertDoc() {
    const newBook = { title: '1984', author: 'George Orwell', year: 1949 }
    const result = await books.insertOne(newBook)
    console.log(result)
}

async function readDoc() {
    const allBooks = await books.find({}).toArray()
    console.log(allBooks)
}

async function updateDoc() {
    const result = await books.updateOne({ title: "1984" }, { $set: { year: 2003 } })
}
async function deleteDoc() {
    const result = await books.deleteOne({ year: 1949 })
}
// insertDoc()
deleteDoc()
// updateDoc()
readDoc()