let studentObj = {
    name:"Gajal",
    age:21,
    number:2344409833,
    email:"gajal@gmail.com",
    address:{
        pincode: 543213,
        city:"Banglore"
    },
    supplies:['CHEMISTRY', 'PHYSICS', 'BEE']
}
//1.Shallow copy
//using spread operator
let studentObj1 = {...studentObj}
studentObj1.age = 22        // It'll not disturb the original object
studentObj1.address.city = "Mumbai"     //This will reflects to the original object
console.log(studentObj, studentObj1)

//using object.assign method
let studentObj2 = {name:"Vishnu", email:"vishnu@gmail.com"}
let updatedObj = Object.assign(studentObj1, studentObj2)
console.log(updatedObj, studentObj1)


//2.Deep Copy
let employee = {
    name:"charan", 
    id:201,
    company_details:{
        company_name:"Accenture",
        branch:"Bellandur"
    }
}
let updatedEmployee = JSON.parse(JSON.stringify(employee))
updatedEmployee.company_details.branch = "Gachibowli"
console.log(employee, updatedEmployee)


//3.Spread in Arrays
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr = [...arr1, ...arr2]
console.log(arr)


//4.Spread in objects
let obj1 = {firstName:"Vishnu", age:21}
let obj2 = {lastName:"Anil", number:9494994949}
let obj = {...obj1, ...obj2}
console.log(obj)


//5.Rest in functions
function sum(...nums){
    let sum = nums.reduce((a, b) =>{return a+b}, 0)
    return sum
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))


//6.Rest in Destructuring
let friends =["Anil", "Abhi", "Charan", "Usha", "Ahmed"]
let [first, second, ...rest] = friends
console.log(first, second, rest)