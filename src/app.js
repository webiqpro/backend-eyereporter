const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); 
const reportRoutes = require("./routes/reportRoutes");

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
    allowedHeaders: ["Content-Type"], 
    credentials: true,
  })
);

app.use(express.json());

/**
 * Swagger Docs (open access)
 */
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

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
