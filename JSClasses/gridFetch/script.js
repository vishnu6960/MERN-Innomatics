document.addEventListener('DOMContentLoaded', ()=>{
    let container = document.getElementById("container")

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response => response.json()))
    .then(response =>{
        fun(response)
    })
    .catch(err => console.log(err))

    function fun(dataObject){
        dataObject.forEach(item=>{
            let cardDiv = document.createElement("div")
            cardDiv.innerHTML = `
                <h3>Name : ${item.name}</h3>
                <p>Id : ${item.id}</p>
                <p>Email : ${item.email}</p>
                <p>Contact : ${item.phone}</p>    
            `
            container.appendChild(cardDiv)
        })  
    }
    
})