/**
 * App Configuration
 */

const express = require("express");
const cors = require("cors");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// CORS configuration – allow ONLY frontend localhost:3000
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://eye-reporter-frontend.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.use(express.json());

// Routes
app.use("/api", reportRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Eye Reporter Backend is running");
});

module.exports = app;