const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getusers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if ((!username || !email, !password)) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const useralreadyexists = await User.findOne({ email });
  if (useralreadyexists) {
    res.status(400);
    throw new Error("The user already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword", hashedPassword);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({ _id: newUser.id, email: newUser.email });
  } else {
    res.status(400);
    throw new Error("Invalid user information");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("email and password are required");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(400);
    throw new Error("invalid email or password");
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user)
});

module.exports = { registerUser, loginUser, currentUser, getusers };
