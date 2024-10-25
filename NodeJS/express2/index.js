const express = require("express")
const app = express()
const PORT = 3000
const fs = require("fs")

app.use((req, res, next) => {
    console.log(req.ip, req.hostname, req.method, req.get("User-Agent"))
})

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"))
// const products = data.products

const auth = (req, res, next) => {
    if(req.body.password === 123){
        next()
    }
    else{
        res.sendStatus(401)
    }
}
app.get("/", auth, (req, res) => {
    // res.send(JSON.stringify(data))
    res.json(data.users)
})

app.post("/", (req, res) => {
    res.json({ type : "post" })
})

app.put("/", (req, res) => {
    res.json({ type : "put" })
})

app.delete("/", (req, res) => {
    res.json({ type : "delete" })
})

app.listen(PORT, () => {
    console.log("app is running on 3000")
})