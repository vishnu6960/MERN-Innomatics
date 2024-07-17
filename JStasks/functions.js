//1. Functions without parameters
function greet(){
    console.log("Hello, World!")        //Hello, World!
}
greet()

//2. Functions with parameters
function addNumbers(a, b){
    console.log(a+b)        //30
}
addNumbers(10, 20)

//3.Functions with Return Statements
var product = multiply(25, 4)
function multiply(x, y){
    return x * y
}
console.log(product)        //100

//4.Combining Functions
function calculateRectangleArea(l, b){
    return multiply(l, b)
}
console.log(calculateRectangleArea(30, 3))      //90

//Default Parameters
function greetUser(name = "Guest"){
    console.log(`Hello, ${name}!`)      //Hello, Ahmed bro!  &&  Hello, Guest
}
greetUser("Ahmed bro")
greetUser()
