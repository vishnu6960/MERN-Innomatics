let tBody = document.getElementById("tbody")
let dataObject = [
    {
       id:1,
       name:"vishnu",
       age:21,
       contact:9394567892
    },
    {
        id:2,
        name:"usha",
        age:21,
        contact:9394509000
     },
     {
       id:3,
        name:"charan",
        age:22,
        contact:9394567345
     },
     {
       id:4,
       name:"Ram",
       age:28,
       contact:9309090909
    }
]
window.addEventListener("load", ()=>{
    console.log("window")
})
//It will execute all the html code completed
document.addEventListener('DOMContentLoaded', ()=>{
    let tbody = document.getElementById("tbody")

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response => response.json()))
    .then(response =>{
        populateData(response)
    })
    .catch(err => console.log(err))

    function populateData(dataObject){
        dataObject.forEach(item=>{
            let tRow = document.createElement("tr")
            tRow.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
            `
            tBody.appendChild(tRow)
        })  
    }
    
})