//push and pop
let arr1 = []
arr1.push(1, 2, 3)
arr1.pop()
console.log(arr1)

//Shift and Unshift
let arr2 = ['a', 'b', 'c']
arr2.shift()
arr2.unshift('z')
console.log(arr2)


//Slice
let arr3 = [1, 2, 3, 4, 5]
let slicedArr = arr3.slice(1, 4)
console.log(slicedArr)

//Splice
let arr4 = ["red", "green", "blue", "yellow"]
arr4.splice(2, 1, "purple", "orange")
console.log(arr4)

//Object Creation
let car = {
    make : "Mahindra", 
    model : "Thar", 
    year : 2018
}
console.log(car)

//Property Deletion
delete car.year
console.log(car)

//Nested Objects
let person = {
    name: "Vishnu",
    age: 21,
    address: {
        street: "C.Vengannapalli", 
        city: "Tadipatri",
        zipcode: 510003
    }
}
console.log(person)

//Accessing Object Properties
console.log(person.address.city)

//Arrow Functions
let greet = (name)=>{
    return name
}
console.log(`"Hello, ${greet("Charan")}!"`) //"Hello Charan!"