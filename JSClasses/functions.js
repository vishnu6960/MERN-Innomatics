// function abc(){
//     let count = 1       //data hiding
//     return function(){      //anonymous function
//         return count++
//     }
// }
// console.log(abc()())
// console.log(abc()())
// let fun = abc()
// console.log(fun())
// console.log(fun())
//*By using closures we can achieve encapsulation */

// setTimeout(() => {
//     console.log("vishnu")
// }, 5000);

// for(var i = 0;i < 5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 5000);
// }

// for(let i = 0;i < 5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 5000);
// }

// abc()
// var abc = () =>{
//     console.log("vishnu")
// }
// abc()

// function fun(number, cb){   
//     number *= 2
//     cb(number)
// }

// let fun1 = function(input){
//     console.log(input *2)   //80
// }
// fun(20, fun1)

// fun(500, (input)=>{
//     console.log(input)  //100
// })

function add(func){
    return ()=>{
        let a = 50
        let c = func(a)
        return c + 50
    }
}
const mul = (b) => {
    return b*2
}
const sub = (b) => {
    return b - 50
}
console.log(add(mul)())
console.log(add(sub)())


function HOC(func){

}


//IIF
(function(){
    console.log("Immediately Invoked function");
})();

// (function(number){
//     console.log(number)
// })(2)

((number)=>{
    console.log(number);
  })(10);
