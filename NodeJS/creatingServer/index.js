const http = require('http')
const PORT = 8080
const fs = require('fs')
const url = require("url")

const server = http.createServer((req, res) => {

    if(req.url === "/favicon.ico") return res.end()
    res.setHeader("Content-Type", "text/html")
    const log = `${Date.now()},${req.url} New Request Received\n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)

    fs.appendFile("log.txt", log, () => {
        switch(req.url) {
            case "/":
                res.end("hello Nodejs")
                break
            case "/about":
                const username = myUrl.query.myname
                res.end(`hii I'm ${username}`)
                break
            default:
                res.end("404 Not Found")
        }
    })
})

server.listen(PORT, () => {
    console.log("server is running on port 8080")
})