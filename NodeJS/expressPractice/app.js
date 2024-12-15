const express = require("express")
const app = express()
const PORT = 9000

app.get("/", (req, res) => {
    res.send("hello world")
})

app.post("/", (req, res) => {
    res.send("got a post request")
})

app.put("/users", (req, res) => {
    res.send("got a put request")
})

app.delete("/users", (req, res) => {
    res.send("got a delete request")
})

app.use('/static', express.static('public'))

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})