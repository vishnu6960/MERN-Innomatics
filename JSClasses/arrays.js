let students = [
    {
        name:"vishnu",
        age:"21",
        number:9394233394,
        email:"vishnu@gmail.com",
        address:{
            pincode:514434,
            city:"Hyderabad"
        },
        supplies:['JAVA', 'ED', 'DS']
    },
    {
        name:"Gajal",
        age:"21",
        number:2344409833,
        email:"gajal@gmail.com",
        address:{
            pincode: 543213,
            city:"Banglore"
        },
        supplies:['CHEMISTRY', 'PHYSICS', 'BEE']
    },
    {
        name:"Anil",
        age:"24",
        number:2344400933,
        email:"anil@gmail.com",
        address:{
            pincode: 540913,
            city:"kolkata"
        },
        supplies:['M2', 'DBMS', 'JAVA']
    },
    {
        name:"Abhi",
        age:"22",
        number:2344407833,
        email:"abhi@gmail.com",
        address:{
            pincode: 540013,
            city:"Vijayawada"
        },
        supplies:['ED', 'M1', 'ADS']
    },
    {
        name:"charan",
        age:"23",
        number:2388809833,
        email:"charan@gmail.com",
        address:{
            pincode: 543413,
            city:"Mumbai"
        },
        supplies:['BEE', 'CN', 'DSA']
    }
]

let changedStudents = students.map((item, index) => {
    let updatedObj = {...item}
    if(item.name == "charan"){
        item.supplies.shift()
        item.supplies.pop()
    }
    if(item.name == "vishnu"){
        item.supplies.push('FLAT')
    }
    if(item.name == "Abhi"){
        item.supplies.unshift('MEFA')
    }
    if(item.name == "Gajal"){
        item.supplies.splice(1, 0, 'MATHS')
    }
    if(item.name == "Anil"){
        item.supplies.splice(1, 1, "C")
    }
    return updatedObj
})
// console.log(JSON.stringify(students))
// console.log(JSON.stringify(changedStudents))


let arr = new Array(30).fill(0)
let sum = new Array(30).fill(1).map((item, index) => index+1)
            .reduce((acc, iter) => iter%2 === 0? acc+iter:acc+0, 0)
console.log(sum)















