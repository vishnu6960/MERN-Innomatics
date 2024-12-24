const express = require("express")
const userController = require('../controller/user.js')
const router = express.Router()

router
    .get('/', userController.getAll)
    .get('/:id', userController.get)
    .post('/', userController.create)
    .put('/:id', userController.replace)
    .patch('/:id', userController.update)
    .delete('/:id', userController.delete)

module.exports = router