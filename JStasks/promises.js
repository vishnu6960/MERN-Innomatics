//1. Creating Promises
function asyncTask(name, delay, shouldReject){
    console.log(delay)
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
let delay = Math.floor(Math.random() * 2000) + 1000
asyncTask("vishnu", delay, false)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
asyncTask("vishnu", delay, true)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

//2.Using Promises
asyncTask("Task1", delay, false)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
asyncTask("Task2", delay, false)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
asyncTask("Task3", delay, true)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))


//3. Promise.all
let promise1 = asyncTask("Task1", delay, false)
let promise2 = asyncTask("Task2", delay, false)
let promise3 = asyncTask("Task3", delay, true)
Promise.all([promise1, promise2, promise3]).then(data=>console.log(data)).catch(err=>console.log(err))

//4.Promise.allSettled
Promise.allSettled([promise1, promise2, promise3]).then(data=>console.log(data))




