const data = require('../data.json')
const todos = data.todos
// console.log(todos)

exports.create = (req, res) => {
    // console.log(req.body)
    todos.push(req.body)
    res.json(req.body)
}

exports.getAll = (req, res) => {
    res.json(todos)
}

exports.get = (req, res) => {
    // res.json(todos)
    const id = req.params.id
    const todo = todos.find(u => u.id == id)
    res.status(200).json(todo)
}

exports.replace = (req, res) => {
    const id = Number(req.params.id)
    const todoIndex = todos.findIndex(t => t.id == id)
    todos.splice(todoIndex, 1, {id: id, ...req.body})
    res.status(201).json()
}

exports.update = (req, res) => {
    const id = Number(req.params.id)
    const todoIndex = todos.findIndex(t => t.id == id)
    const todo = todos[todoIndex]
    todos.splice(todoIndex, 1, {...todo, ...req.body})
    res.status(201).json()
}

exports.delete = (req, res) => {
    const id = Number(req.params.id)
    const todoIndex = todos.findIndex(t => t.id == id)
    todos.splice(todoIndex, 1)
    res.status(201).json()
}   