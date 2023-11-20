const express = require("express")
const router = express.Router();
const userController = require("../Controller/use.controller")

router.post("/add-user", userController.addUser);

module.exports = router