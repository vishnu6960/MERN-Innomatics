let sum = ()=>{
    let cache = {}
    return (...nums) =>{                   //Closure will retain the cache every time
        console.log(cache)

        // console.log(typeof nums)
        let key = nums.toString()
        // console.log(typeof key)
        if(cache[key])
            return cache[key]
        let sum = nums.reduce((a, b) => a+b, 0)
        let result = sum
        cache[key] = result
        return result
    }
}

let childSum = sum()
// console.log(childSum(12, 6))
// console.log(childSum(100, 10))
// console.log(childSum(15, 10))
// console.log(childSum(100, 10))
// console.log(childSum(10, 100))
// console.log(childSum(1, 26))


//output
// {}
// 20
// { '1010': 20 }
// 110
// { '1010': 20, '10010': 110 }
// 25
// { '1010': 20, '1510': 25, '10010': 110 }
// 110


let person = {}
console.log(person.__proto__)
console.log(Object.prototype)
console.log(person.__proto__ === Object.prototype)

function Person(name){
    this.name = name
}
let vishnu = new Person('vishnu')
console.log(vishnu)
console.log(vishnu.__proto__)
console.log(vishnu.prototype === Object.prototype);

function Animal(name, sound){
    this.name = name
    this.sound = sound
}
let Dog = new Animal('Dog', 'bow bow')
Animal.prototype.walks = function(){
    return `${this.name} sounds like a ${this.sound} and also walks`
}

// let Cat = new Dog('cat', 'meow')
console.log(Dog)
console.log(Dog.walks())

//Protype function prototype is empty object only
function ABC(){}
let abc = new ABC()
console.log(ABC.__proto__)    //{}

let personZero = {}
console.log(personZero.__proto__)       //Object

let personObject = {
    greet(){
        console.log(`Hi ${this.name}`)
    }
}
console.log(personObject.__proto__)     //Object
let personOne = Object.create(personObject)
console.log(personOne.__proto__)        //greet:[function:greet]
personOne.name = "Vishnu"
personOne.greet()

function Father(){}
function Mother(name){
    this.name = name
}
console.log(Mother.prototype)
Mother.prototype = Object.create(Father.prototype)
console.log(Mother.prototype)
let dog = new Mother('ammu')      //child birth
console.log(Mother.__proto__)
console.log(dog.speak)
Father.prototype.speak = true
console.log(dog.speak)



