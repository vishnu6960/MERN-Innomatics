const express = require("express")
const app = express()
const PORT = 9090
const userRoute = require("./routes/user")


app.use(express.json())

app.use("/api/users", userRoute)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})