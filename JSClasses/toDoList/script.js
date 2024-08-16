let addItems = (dataObject)=>{
    let card = document.createElement("div")
    card.className = 'cardEle'
    card.innerHTML = `
        <h4 class="title">${dataObject.title}</h4>
        <input class="titleInput" type="text" style="display: none;">
        <button class="editTitle">Edit Title</button>
        <button class="updateTitle" style="display: none;">Update</button>
        <p><strong>Description :</strong> ${dataObject.descr}</p>
        <p><strong>Category :</strong> ${dataObject.category}</p>
        <p><strong>Priority :</strong> ${dataObject.priority}</p>
        <button class="deleteButton">Delete</button>
    `
    cardsContainer.appendChild(card)
    let del = card.querySelector('.deleteButton');
    del.addEventListener('click', () => {
        card.remove();
        let index = todos.indexOf(dataObject);
        if (index !== -1) {
            todos.splice(index, 1);
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    });

    //title edit and updation
    document.querySelectorAll(".cardEle").forEach((item, index) =>{
        console.log(item)
        let titleElement = item.querySelector(".title")
        let titleInput = item.querySelector(".titleInput")
        let editTitle = item.querySelector(".editTitle")
        let updateTitle = item.querySelector(".updateTitle")
        editTitle.addEventListener('click', () => editTitleFun(titleElement, titleInput, editTitle, updateTitle))
        updateTitle.addEventListener('click', () => updateTitleFun(titleElement, titleInput, editTitle, updateTitle, index))

    })
}
// localStorage.clear() 
let cardsContainer = document.getElementById("cardsContainer")
let todos = []
document.getElementById("addTask").addEventListener("click", (e)=>{
    e.preventDefault()
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value
    let priority = document.getElementById("taskPriority").value
    
    let object = {
        title : title,
        descr : description,
        category : category, 
        priority : priority
    }
    addItems(object)
    todos.push(object)
    localStorage.setItem('todos', JSON.stringify(todos))

    document.getElementById("formData").reset() 
})



document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem("todos")){
        todos = JSON.parse(localStorage.getItem('todos'))
        // console.log(todos)
        todos.forEach(item =>{
            addItems(item)
        })
    }
})



function editTitleFun(titleElement, titleInput, editTitle, updateTitle){
    titleInput.value = titleElement.textContent

    titleElement.style.display = "none"
    titleInput.style.display = "inline-block"
    editTitle.style.display = "none"
    updateTitle.style.display = "inline-block"
}

function updateTitleFun(titleElement, titleInput, editTitle, updateTitle, index){
    titleElement.textContent = titleInput.value
    // console.log(todos[index])
    todos[index].title = titleElement.textContent
    localStorage.setItem('todos', JSON.stringify(todos));
    // localStorage.setItem('todos[index].title', titleElement.textContent)
    titleInput.style.display = "none"
    titleElement.style.display = "block"
    updateTitle.style.display = "none"
    editTitle.style.display = "block"

}






