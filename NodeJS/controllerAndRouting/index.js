const express = require("express")
const app = express()
const PORT = 9090
const userRoute = require("./routes/user.js")
const todoRoute = require("./routes/todo.js")


app.use(express.json())

app.use("/api/users", userRoute)
app.use("/api/todos", todoRoute)


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})