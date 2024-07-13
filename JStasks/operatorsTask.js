//Data Types
let num = 20
let str = "Hyderabad"
let bool = true
let u
let n = null
console.log(num, typeof(num))              //number
console.log(`"${str}"`, typeof(str))       //String
console.log(bool, typeof(bool))            //boolean
console.log(u, typeof(u))                  //undefined
console.log(n, typeof(n))                  //null type(object)


//Mathematical Operators
let x = 10
let y = 20
console.log(`Addition of x and y is ${x+y}`)            //30
console.log(`Subtraction of x and y is ${x-y}`)         //-10
console.log(`Multiplication of x and y is ${x*y}`)      //200
console.log(`Division of x and y is ${x/y}`)            //0.5
console.log(`Modulo of y and x is ${y%x}`)              // 0


//Comparisonal Operators
console.log(x > y)      //false
console.log(x < y)      //true

let z = 10
console.log(x >= z)     //true
console.log(y <= x)     //false

let x2 = '10'
console.log(x == x2)    //true
console.log(x != x2)    //false

//type checking
console.log(x === x2)   //false
console.log(x !== x2)   //true