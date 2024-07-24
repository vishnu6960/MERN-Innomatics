//1.Using forEach
let numArr = [9, 2, 4, 5, 3, 4, 0]
numArr.forEach((item) => console.log(item))

//2.Using map
let evenNumArr = [2, 4, 6, 8, 10]
let modifiedArr = evenNumArr.map(item => item*2)
console.log(modifiedArr)

//3.Using filter
let array = [8, 3, 2, 5, 6, 7, 0]
let filterArr = array.filter(item => {
    if(item != 0 && item%2 == 0){
        return item
    }
})
console.log(filterArr)

//4.Using reduce
let oddNumSum = new Array(50).fill(0).map((item, index)=>{
        return index * 2 + 1
}).reduce((a, b) => a+b, 0)
console.log(oddNumSum)

//5.Using find
let studentObj = [
    {
        name:"vishnu",
        age:20
    },
    {
        name:"charan",
        age:99
    },
    {
        name:"sathish",
        age:34
    }
]
let firstName = studentObj.find((item, index) => item.age > 25)
console.log(firstName.name)

//6.Using findIndex
let studentObj2 = [
    {
        name:"vishnu",
        age:20
    },
    {
        name:"charan",
        age:99
    },
    {
        name:"sathish",
        age:16
    }
]
let firstIndex = studentObj2.findIndex((item, index)=> item.age < 18)
console.log(firstIndex)



