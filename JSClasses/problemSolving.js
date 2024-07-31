let oldStudents = {
    name:"vishnu",
    age:21,
    number:9394233394,
    gender:true,
    address:{
        pincode:514434,
        city:["kukatpally", "JNTU", "Hyderabad"]
    },
    occupation:"Farmer"
}

let newStudents = {
    name:"Vishnuvardhan",
    age:22,
    number:93942300004,
    gender:true,
    address:{
        pincode:519434,
        city:["madhapur", "Hitech city", "Hyderabad"],
        country:"India"
    },
    email:"vishnu@gmail.com",
}

function mergeObjects(oldData, newData){
    Object.keys(oldData).forEach((item)=>{
        // console.log(newData[item])
        if(newData[item] == undefined){
            newData[item] = oldData[item]
        }
        else if(typeof item === 'object'){
            mergeObjects(oldData[item], newData[item])
        }
    })
    return newData
}
let res = mergeObjects(oldStudents, newStudents)
// console.log(res)


let arr = [4, 90, 20, 45, 87, 3, 2, 56]
let k = 4
if(arr.length <= 4){
    let sum = arr.reduce((a,b) => a+b, 0)
    console.log(sum)
}
else{
    console.log(maxSum(arr, 0, k))
}
function maxSum(arr, low, high){
    let maxSum = 0
    let currSum = 0
   for(let i = low;i < high;i++){
        currSum += arr[i]
        maxSum = currSum
   }
   for(let j = high;j < arr.length;i=j++){
    currSum = currSum+arr[j]-arr[j-k]
    maxSum = Math.max(currSum, maxSum)
   }
   return maxSum
}


