const data = require('../../restApiExpress/data.json')
const users = data.users


exports.create = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    // res.json(req.body)
    res.status(201).json(req.body)

}

exports.getAll = (req, res) => {
    res.json(users)
}

exports.get = (req, res) => {
    // res.json(users)
    const id = req.params.id
    const user = users.find(u => u.id == id)
    if(!user){
        res.status(404).json({message: "not found"})
    }
    else{
    res.status(200).json(user)
    }
}

exports.replace = (req, res) => {
    const id = Number(req.params.id)
    const userIndex = users.findIndex(u => u.id == id)
    users.splice(userIndex, 1, {id: id, ...req.body})
    res.status(201).json()
}

exports.update = (req, res) => {
    const id = Number(req.params.id)
    const userIndex = users.findIndex(u => u.id == id)
    const user = users[userIndex]
    users.splice(userIndex, 1, {...user, ...req.body})
    res.status(201).json()
}

exports.delete = (req, res) => {
    const id = Number(req.params.id)
    const userIndex = users.findIndex(u => u.id == id)
    users.splice(userIndex, 1)
    res.status(201).json()
}   