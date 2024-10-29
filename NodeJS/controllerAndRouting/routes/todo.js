const todoController = require("../controller/todo.js")
const express = require("express")
const router = express.Router()

router
    .post("/", todoController.create )
    .get("/", todoController.getAll )
    .get("/:id", todoController.get)
    .put("/:id", todoController.replace )
    .patch("/:id", todoController.update)
    .delete("/:id", todoController.delete)

module.exports = router