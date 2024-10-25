const express = require("express")
const app = express()
const PORT = 8989
const data = require('./data.json')

const users = data.users

app.use(express.json())

app.post("/api/users", (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.json(req.body)
})

app.get("/api/users", (req, res) => {
    res.json(users)
})

app.get("/api/users/:id", (req, res) => {
    // res.json(users)
    const id = req.params.id
    const user = users.find(u => u.id == id)
    res.json(user)
})

//replacing the product
app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const userIndex = users.findIndex(u => u.id == id)
    users.splice(userIndex, 1, {id: id, ...req.body})
    res.status(201).json()
})

//updating the product
app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const userIndex = users.findIndex(u => u.id == id)
    const user = users[userIndex]
    users.splice(userIndex, 1, {...user, ...req.body})
    res.status(201).json()
})

//delete the user
app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const userIndex = users.findIndex(u => u.id == id)
    users.splice(userIndex, 1)
    res.status(201).json()
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})