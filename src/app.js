const express = require("express");
const cors = require("cors");
const reportRoutes = require("../src/routes/reportRoutes");

const app = express();

/**
 * Middleware
 */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://front-end-eyereporter.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

/**
 * Routes
 */
app.use("/api", reportRoutes);

/**
 * Default Route
 */
app.get("/", (req, res) => {
  res.send("Eye Reporter Backend is running");
});

module.exports = app;
