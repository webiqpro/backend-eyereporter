const path = require("path");
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API',
      version: '1.0.0',
    },
    servers: [
      {
        url: process.env.BASE_URL || 'http://localhost:5000',
      },
    ],
  },
  apis: [path.join(__dirname, "routes/*.js")],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;


