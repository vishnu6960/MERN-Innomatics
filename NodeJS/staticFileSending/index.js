const fs = require('fs')
const PORT = 8080
const http = require("http")

const data = JSON.parse(fs.readFileSync("data.json", "utf-8", () =>{}))
const index = fs.readFileSync("index.html", "utf-8", () => {})
const products = data.products

const server = http.createServer((req, res) => {

    // if(req.url === "/favicon.ico") return res.end()

    if(req.url.startsWith("/index")){
        const id = req.url.split("/")[2]
        const product = products.find((p) => p.id === +id)
        res.setHeader("Content-Type", "text/html")
        let modifiedIndex = index.replace("**title**", product.title)
        res.end(modifiedIndex)
        return
    }

    switch(req.url){
        case "/":
            res.setHeader("Content-Type", "text/html")
            res.end("Home page")
            break
        case "/products":
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(data))
            break
        default:
            res.writeHead(404)
            res.end("404 NOT FOUND")
            // break

    }
})

server.listen(PORT, () =>{
    console.log("server is running on 8080")
})