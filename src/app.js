const express = require("express");
const cors = require("cors");
const reportRoutes = require("./routes/reportRoutes");
const swaggerUi = require("swagger-ui-express");
const specs = require("../swagger");
const path = require("path");

const app = express();

/**
 * Middleware
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://front-end-eyereporter.vercel.app",
    ],
    credentials: true,
  })
);
console.log ('swagger docs at /api-docs http://localhost:5000/api-docs');
app.use(express.json());

/**
 * Static files (uploads)
 */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/**
 * Routes
 */
app.use("/api", reportRoutes);

app.get("/", (req, res) => {
  res.send("Eye Reporter Backend is running");
});

module.exports = app;
