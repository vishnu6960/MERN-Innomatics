const fs = require('fs')

// const os = require('os')

// console.log(os.cpus().length)

// fs.writeFileSync("./test.html", "hii there!!\n")

// const res = fs.readFileSync("./test.html", "utf-8")
// console.log(res)

// fs.writeFile("./demo.txt", "Hello Nodejs", () =>{})

fs.readFile("./demo.txt", "utf-8", (err, res) =>{
    if(err){
        console.log("Error:", err)
    }
    else{
        console.log(res)
    }
} )

// fs.appendFileSync("./test.html", "This is Backend Cls")

// fs.cp("./test.html", "./demo.txt", () =>{})

// fs.unlinkSync("./demo.txt")

const writeStream = fs.createWriteStream("output.txt")
writeStream.write("Hii this is vishnu, writing data")
writeStream.end()
writeStream.on("finish", () => {
    console.log("successfully finished")
})

const readStream = fs.createReadStream("output.txt", "utf-8")
readStream.on("data", (chunk) => {
    console.log(chunk)
})
