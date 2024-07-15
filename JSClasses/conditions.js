var n = 3

//cube(n)
// if(n <= 1){
//     console.log(false)
// }
// if(n%3 == 0 || n%2 == 0){
//     console.log(false)
// }
// for(let i = 5;i*i < n;i = i+6){
//     if(n % i == 0 || n % (i+2) == 0){
//         console.log(false)
//     }
// }
// console.log(true)

//sqrt(n)
// for(let i = 2;i*i < n;i++){
//     if(n <= 1){
//         console.log(false)
//     }
//     if(n % i == 0){
//         console.log(false)
//     }
// }
// console.log(true)

// if(n > 200 && n < 300){
//     console.log(`${n} is in the range`)
// }
// else{
//     console.log(`${n} is not in the range`)
// }


// if(n >= 1 && n <= 10){
//     console.log("n is in range 1 - 10")
// }
// else if(n >= -10 && n <= 1){
//     console.log("n is in range -1 - -10")
// }
// else if(n >= 200 && n <= 300){
//     console.log("n is in range 200 - 300")
// }
// else{
//     console.log('n is not falling in between any range')
// }

switch(true){
    case (n > 0):
        console.log("positive");
        break;
    case (n < 0):
        console.log("negative");
        break;
    default:
        console.log("Zero");
}
