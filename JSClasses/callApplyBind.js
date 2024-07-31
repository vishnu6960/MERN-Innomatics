let person = {
    greet(...args){
        console.log(`hi ${this.name} and ${args}`)
    }
}
let vishnu = {
    name : "vishnu"
}
person.greet.call(vishnu, 1, 3, 4, 5)
person.greet.apply({name : "usha"}, [1, 3, 4, 5, 9])
let fun = person.greet.bind({name : "charan"})
fun(1, 2, 3, 4, 4, 9)
