//1. localStorage: Setting and Getting Data
localStorage.setItem("name", "vishnu")
console.log(localStorage.getItem("name"))

// //2. sessionStorage: Setting and Getting Data
sessionStorage.setItem("email", "vishnu@gmail.com")
console.log(sessionStorage.getItem("email"))

// //3. Removing Items from Storage
localStorage.removeItem("name")
sessionStorage.removeItem("email")
console.log(localStorage.getItem("name"))       //null
console.log(sessionStorage.getItem("email"))        //null


// //4. JSON Storage
let obj = {
    name:"charan",
    course:"full stack",
    city:"Vijayawada",
}
localStorage.setItem('object', JSON.stringify(obj))
sessionStorage.setItem('object', JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem("object")))
console.log(JSON.parse(sessionStorage.getItem("object")))

// //5. Clearing Storage
localStorage.clear()
sessionStorage.clear()







