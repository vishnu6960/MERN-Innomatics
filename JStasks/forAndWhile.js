//1. Multiplication table
for(let i = 1;i <= 10;i++){
    console.log(`5 x ${i} = ${5*i}`)  // Multiplication table of 5
}


//2. Sum of Even Numbers Between 1 and 50
let sum = 0
for(let i = 1;i <= 50;i++){
    if(i % 2 == 0){
        sum += i
    }
}
console.log(sum)  //650


//3. Printing 2 to 20 using while loop
let i = 2
let j = 1
let count = 0
let str = ""
while(i <= 20){
    count = 0
    j = 1
    while(j <= i){
        if(i % j == 0)
            count++
        j++
    }
    if(count == 2)
        str += i + " "
    i++
}
console.log(str) // 2 3 5 7 11 13 17 19


// 4. Sum of Odd Numbers
let k = 1
let oddSum = 0
while(k <= 20){
    oddSum += k
    k += 2
}
console.log(oddSum) // 100

//5. Factorial Calculation
let a = 1
let f = 1
while(a <= 5){
    f *= a
    a++
}
console.log(f) //120

