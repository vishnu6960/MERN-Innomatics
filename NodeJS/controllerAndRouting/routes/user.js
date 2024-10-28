const userController = require("../controller/user")
const express = require("express")
const router = express.Router()

router
    .post("/", userController.create )
    .get("/", userController.getAll )
    .get("/:id", userController.get)
    .put("/:id", userController.replace )
    .patch("/:id", userController.update)
    .delete("/:id", userController.delete)

module.exports = router