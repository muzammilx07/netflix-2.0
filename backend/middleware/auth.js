const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("./errorHandler.js");
const User = require("../models/userModels");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return next(new ErrorHandler("Token not provided", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    req.user = user;
    next();
  } catch (err) {
    return next(new ErrorHandler("Invalid token", 401));
  }
};

module.exports = authMiddleware;
