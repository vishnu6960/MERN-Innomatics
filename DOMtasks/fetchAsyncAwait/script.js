//Using Fetch API
let fetchData = (cb)=>{
    fetch("https://reqres.in/api/users?page=1")
    .then(response => response.json())
    .then(result => {
        console.log(result)
        cb(result.data)
    })
    .catch(error => console.log(error))
}

//Handling Promises with Async and Await
async function fetchData1(){
    await fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
}
fetchData1()

//fetch with parameters
document.addEventListener("DOMContentLoaded", ()=>{
    let tBody = document.getElementById("tbody")
    fetchData(showTable)

    function showTable(dataObject){
        dataObject.forEach(item=>{
            let tRow = document.createElement("tr")
            tRow.innerHTML = `
                <td>${item.id}</td>
                <td>${item.first_name}</td>
                <td>${item.last_name}</td>
                <td>${item.email}</td>
                <td><img src="${item.avatar}"></td>
            `
            tBody.appendChild(tRow)
        })  
    }
})

//Error Handling in Asynchronous code
async function fetchData2(){
    try{
        let response = await fetch("https://jsonplaceholder.typcode.com/comments")
        let result = await response.json()
        console.log(result)  
    }
    catch{
        console.log("Invalid URL")
    }
    
}
fetchData2()


//Combining Fetch with Async/Await and Error Handling
async function fetchPosts(){
    try{
        await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(result => console.log(result))
    }
    catch{
        console.log("Invalid URL")
    }
    
}
fetchPosts()