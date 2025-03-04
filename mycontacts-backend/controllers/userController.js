const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const getusers = asyncHandler(async (req, res) => {
    const users = User.find()
    res.status(200).json(users)
})

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email, !password) {
        res.status(400)
        throw new Error("All fields are required")
    }

    const useralreadyexists = await User.findOne({ email })
    if (useralreadyexists) {
        res.status(400)
        throw new Error("The user already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("hashedPassword", hashedPassword)
    const newUser = await User.create({username, email, password: hashedPassword})

    if (newUser) {
        res.status(201).json({_id: newUser.id, email: newUser.email })
    } else {
        res.status(400)
        throw new Error("Invalid user information")
    }
})

const loginUser = asyncHandler(async (req, res) => {
    res.send("works to login")
})

const currentUser = asyncHandler(async (req, res) => {
    res.send("works to current")
})

module.exports = { registerUser, loginUser, currentUser, getusers }