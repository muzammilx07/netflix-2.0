const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controllers/user");
const authMiddleware = require("../middleware/auth");

// POST /signin - Register a new user
router.post("/signin", Register);

// GET /profile - Get user profile (requires authentication)
router.post("/login",Login);

module.exports = router;
