const express = require("express")
// const morgan = require("morgan")
const app = express()
const PORT = 9000
const userRoute = require('./routes/userRoute')



// app.get("/", (req, res) => {
//     res.send("hello world")
// })

// app.post("/", (req, res) => {
//     res.send("got a post request")
// })

// app.put("/users", (req, res) => {
//     res.send("got a put request")
// })

// app.delete("/users", (req, res) => {
//     res.send("got a delete request")
// })

// app.use('/static', express.static('public'))

// app.use((req, res, next) => {
//     console.log(`${req.method} is running for ${req.url}`)
//     next()
// })

// app.use(express.json())
// app.use(morgan('dev'))
// app.use((req, res, next) => {
//     console.log("middle ware 1")
//     next()
// })
// app.use((req, res, next) => {
//     console.log("middleware 2")
//     next()
// })
// // app.post("/users", (req, res) => {
// //     console.log(req.body)
// //     res.send("data received")
// // })

// app.get("/", (req, res) => {
//     // console.log(req.body)
//     res.send('hello page')
// })

app.use(express.json())

// app.post('/', (req, res) => {
//     const user = req.body
//     users.push(user)
//     res.status(200).json(user)
// })

// app.get('/', (req, res) => {
//     res.json(users)
// })

// app.get('/:id', (req, res) => {
//     const id = Number(req.params.id)
//     // console.log(id)
//     const user = users.find(user => user.id === id)
//     console.log(user)
//     res.json(user)
// })

// app.put('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const userIndex = users.findIndex(user => user.id === id)
//     users.splice(userIndex, 1, { id: id, ...req.body })
//     res.json(users[userIndex])
// })

// app.patch('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const userIndex = users.findIndex(user => user.id === id)
//     const user = users[userIndex]
//     users.splice(userIndex, 1, { ...user, ...req.body })
//     res.json(users[userIndex])
// })

// app.delete('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const userIndex = users.findIndex(user => user.id === id)
//     users.splice(userIndex, 1)
//     res.json({ message: "successfully deleted" })
// })

//*****************chaining Routes*********************
// app.route('/user')
//     .post((req, res) => {
//         const user = req.body
//         users.push(user)
//         res.status(200).json(user)
//     })

//     .get((req, res) => {
//         res.json(users)
//     })

app.use('/usersList', userRoute)
app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})