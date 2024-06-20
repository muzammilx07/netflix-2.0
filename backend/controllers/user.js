const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createErrorHandler } = require("../middleware/errorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsync");

// Function to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN, // Token for 1 day (24 hours)
  });
};

// Register function
const Register = catchAsyncErrors(async (req, res, next) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).json({
      message: "Invalid Details",
      success: false,
    });
  }

  const userByEmail = await User.findOne({ email });
  if (userByEmail) {
    return res.status(400).json({
      message: "Email Already Used",
      success: false,
    });
  }

  // Check if user with the same username already exists
  const userByUsername = await User.findOne({ username });
  if (userByUsername) {
    return res.status(400).json({
      message: "Username Already Used",
      success: false,
    });
  }


  await User.create({ name, username, email, password });

  return res.status(201).json({
    message: "Account Registered Successfully",
    success: true,
  });
});

// Login function
const Login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate request body
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
      success: false,
    });
  }

  // Check if user exists in the database
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
      success: false,
    });
  }

  // Validate password
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  const username = user.username;
  
  if (!isPasswordMatch) {
    return res.status(401).json({
      message: "Invalid credentials",
      success: false,
    });
  }

  // Generate JWT token
  const token = generateToken(user._id);

  // Send token in response along with a success message
  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", 
    })
    .json({
      message: "Login successful",
      success: true,
      username,
      user,
      token,
    });

  
});



module.exports = {
  Register,
  Login,
};
