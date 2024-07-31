//1. Creating Promises
function asyncTask(name, delay, shouldReject){
    return new Promise((res, rej)=>{
        if(shouldReject){
                rej(`${name} failed`)
        }
        else{
            setTimeout(() => {
                res(`${name} completed`)
            }, delay);
        }
    })
}
asyncTask("vishnu", 1000, false)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
asyncTask("vishnu", 1000, true)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

//2.Using Promises
asyncTask("Task1", 2000, false)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
asyncTask("Task2", 1000, false)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
asyncTask("Task3", 3000, true)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))


//3. Promise.all
let promise1 = asyncTask("Task1", 2000, false)
let promise2 = asyncTask("Task2", 2000, false)
let promise3 = asyncTask("Task3", 1000, true)
Promise.all([promise1, promise2, promise3]).then(data=>console.log(data)).catch(err=>console.log(err))

//4.Promise.allSettled
Promise.allSettled([promise1, promise2, promise3]).then(data=>console.log(data))




