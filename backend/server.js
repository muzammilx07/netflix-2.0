const express = require("express");
const { config } = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require("./router/userRoute.js");
const dbConnection = require("./config/db.js");
const errorHandler = require("./middleware/errorHandler.js");

const app = express();
config({ path: "./config/.env" });

// Middleware setup
// Middleware setup
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL_ONE,
      process.env.FRONTEND_URL_TWO,
      "https://netflix-2-0-blue.vercel.app",
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("Incoming request body:", req.body);
  next();
});

// Router setup
app.use("/", userRouter);

// Database connection
dbConnection();

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
