const fs = require('fs')

// fs.writeFileSync("notes.txt", "practicing the fs module\n")
// let readingData = fs.readFileSync("notes.txt", "utf-8")
// console.log(readingData)

// fs.appendFileSync("notes.txt", "appending the data using fs module")
// readingData = fs.readFileSync("notes.txt", "utf-8")
// console.log(readingData)

fs.access("notes.txt", fs.constants.F_OK, (err) => {
    if (err) throw err
    fs.unlink("notes.txt", (err) => {
        if (err) throw err
        console.log("file deleted successfully")
    })
})

