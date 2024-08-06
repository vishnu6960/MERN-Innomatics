//1. localStorage: Setting and Getting Data
localStorage.setItem("name", "vishnu")
console.log(localStorage.getItem("name"))

//2. sessionStorage: Setting and Getting Data
sessionStorage.setItem("email", "vishnu@gmail.com")
console.log(sessionStorage.getItem("email"))

//3. Removing Items from Storage
localStorage.removeItem("name")
sessionStorage.removeItem("email")
console.log(localStorage.getItem("name"))       //null
console.log(sessionStorage.getItem("email"))        //null





