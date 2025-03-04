const express = require("express")
const router = express.Router()
const { registerUser, loginUser, currentUser, getusers } = require("../controllers/userController")


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/current").get(currentUser)

router.route("/").get(getusers)

module.exports = router