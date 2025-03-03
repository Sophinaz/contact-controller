const asyncHandler = require("express-async-handler")

const registerUser = asyncHandler(async (req, res) => {
    res.send("works to register")
})

const loginUser = asyncHandler(async (req, res) => {
    res.send("works to login")
})

const currentUser = asyncHandler(async (req, res) => {
    res.send("works to current")
})

module.exports = { registerUser, loginUser, currentUser }