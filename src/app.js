const express = require("express");
const cors = require("cors");

const app = express();

// made a change on this branch in regards branching

const testFunc = (testNo)=>{
  console.log(testNo)
}

// Middleware
app.use(cors());           // Allow cross-origin requests (frontend-backend)
app.use(express.json());   // Parse JSON request bodies

// Export app so server.js can use it
module.exports = app;
