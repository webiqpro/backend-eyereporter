const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0", // Upgrade to OpenAPI 3.0 for better support
    info: {
      title: "My Node.js API",
      version: "1.0.0",
      description: "API documentation for my service",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Make sure path matches your project structure
};

const specs = swaggerJsdoc(options);

module.exports = specs;
