//If-Else conditional statements
let n = 4
if(n > 0)
    console.log(`${n} is a positive number`)
else if(n == 0)
    console.log(`${n} is a zero`)
else
    console.log(`${n} is a negative number`)
//output : 4 is a positive number
  

//Switch-Case Statements
switch(n){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")         
}
//output : Thursday


//Ternary Operator
let age = 15
console.log(age >= 18 ? "Adult" : "Minor")
//output : Minor


//for loop
for(let i = 1;i <= 10;i++){
    console.log(i)
}
//output : 1-10


//reverse for loop
for(let i = 10;i >= 1;i--){
    console.log(i)
}
// output : 10-1