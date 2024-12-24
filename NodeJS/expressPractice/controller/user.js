const data = require('../data.json')
const users = data.users

exports.get = (req, res) => {
    const id = Number(req.params.id)
    // console.log(id)
    const user = users.find(user => user.id === id)
    console.log(user)
    res.json(user)
}

exports.getAll = (req, res) => {
    res.json(users)
}

exports.create = (req, res) => {
    const user = req.body
    users.push(user)
    res.json(user)
}

exports.replace = (req, res) => {
    const id = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === id)
    users.splice(userIndex, 1, { id: id, ...req.body })
    res.json(users[userIndex])
}

exports.update = (req, res) => {
    const id = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === id)
    const user = users[userIndex]
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.json(users[userIndex])
}

exports.delete = (req, res) => {
    const id = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === id)
    users.splice(userIndex, 1)
    res.json({ message: "successfully deleted" })
}