/**
 * App Configuration
 */

const express = require("express");
const cors = require("cors");
const reportRoutes = require("./route/reportRoutes");

const app = express();

// CORS configuration – allow ONLY frontend localhost:3000
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-frontend-domain.com"
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