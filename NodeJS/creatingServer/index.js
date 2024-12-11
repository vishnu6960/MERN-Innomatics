// const http = require('http')
// const PORT = 8080
// const fs = require('fs')
// const url = require("url")

// const server = http.createServer((req, res) => {

//     if (req.url === "/favicon.ico") return res.end()
//     res.setHeader("Content-Type", "text/html")
//     const log = `${Date.now()},${req.url} New Request Received\n`
//     const myUrl = url.parse(req.url, true)
//     console.log(myUrl)

//     fs.appendFile("log.txt", log, () => {
//         switch (req.url) {
//             case "/":
//                 res.end("hello Nodejs")
//                 break
//             case "/about":
//                 const username = myUrl.query.myname
//                 res.end(`hii I'm ${username}`)
//                 break
//             default:
//                 res.end("404 Not Found")
//         }
//     })
// })

// server.listen(PORT, () => {
//     console.log("server is running on port 8080")
// })


const http = require('http')
const fs = require('fs')
const url = require('url')
const PORT = 5959

// const server = http.createServer((req, res) => {
//     const parseUrl = url.parse(req.url, true)
//     const { pathname, query } = parseUrl
//     if (req.url === '/') {
//         res.statusCode = 200
//         res.setHeader('content-Type', 'text/plain')
//         res.end("hii I'm learning Nodejs")
//     }
//     else if (req.url == '/about') {
//         res.statusCode = 200
//         res.setHeader('content-Type', 'text/plain')
//         res.end("this is about page")
//     }
//     else if (req.url == '/api') {
//         res.setHeader('content-Type', 'application/json')
//         const data = { message: "this is a json data", api: "welcome to api" }
//         res.json(JSON.stringify(data))
//     }
//     else if (pathname == '/greet' && query.password) {
//         res.end(`the query name is ${query.password}`)
//     }
//     else {
//         res.statusCode = 404

//         res.end(JSON.stringify({ error: "page not found" }))
//     }
// })

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    // res.setHeader('content-Type', 'application/json')
    const users = JSON.parse(fs.readFileSync('data.json'))

    //get all users
    if (url === '/users' && method === 'GET') {
        res.end(JSON.stringify(users))
    }
    // get user by id
    if (url.startsWith('/users') && method === 'GET') {
        console.log(url.split("/"))
        const id = parseInt(url.split('/')[2], 10)
        console.log(id)
        const user = users.find((u) => u.id === id)
        if (user) {
            res.end(JSON.stringify(user))
        }
        else {
            res.end(JSON.stringify({ error: "404 not found" }))
        }
    }

    // post the new user
    if (url == '/users' && method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const newUser = JSON.parse(body)
            newUser.id = users.length + 1
            users.push(newUser)

            fs.writeFileSync('data.json', JSON.stringify(users))
            res.end(JSON.stringify(newUser))
        })
        // console.log(req.body)
    }

    //update the user
    if (url.startsWith('/users') && method === 'PUT') {
        const id = parseInt(url.split('/')[2], 10)
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const updatedData = JSON.parse(body)
            const userIndex = users.findIndex((user) => user.id === id)

            if (userIndex !== -1) {
                users[userIndex] = { ...users[userIndex], ...updatedData }
                fs.writeFileSync("data.json", JSON.stringify(users))
                res.end(JSON.stringify(users[userIndex]))
            }
            else {
                res.end(JSON.stringify({ Error: "404 not found" }))
            }
        })
    }

    //delete the user
    if (url.startsWith('/users') && method === 'DELETE') {
        const id = parseInt(url.split("/")[2], 10)
        const updatedUsers = users.filter((user) => user.id !== id)

        if (users.length === updatedUsers.length) {
            res.end(JSON.stringify({ error: "user is not found" }))
        }
        else {
            fs.writeFileSync("data.json", JSON.stringify(updatedUsers))
            res.end(JSON.stringify({ message: "user deleted successfully" }))
        }
    }
})

server.listen(PORT, () => {
    console.log("server is running on 5959")
})

