// const http = require("http")
// const url = require("url")
// const PORT = 8080
// const fs = require('fs')

// const data = fs.readFileSync('data.json', 'utf-8')


// const server = http.createServer((req, res) =>{

//     const myUrl = url.parse(req.url, true)
//     switch(myUrl.pathname){
//         case "/":
//             res.end("hello home page")
//             break
//         case "/profile":
//             const userName = myUrl.query.myname
//             res.end(`Hii, this is ${userName}`)
//             break
//         case "/users":
//             res.end(data)
//             break
//         default:
//             res.end("404 error")
//     }
// })

// server.listen(PORT, () => {
//     console.log("server is running on 8080")
// })


const express = require('express')
const app = express()
const PORT = 3000

app.get('/home', (req, res) => {
    // res.send("this is my first express class ")
    res.sendFile("C:/Users/DELL/coding/mycodes/innomatics/NodeJS/express1/index.html")
})

app.listen(PORT, () => {
    console.log("server is running on 3000")
})


