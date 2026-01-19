const express = require("express");
const cors = require("cors");

const app = express();

// made a change on this branch in regards branching

const testFunc = (testNo)=>{
  console.log(testNo)
}

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Eye Reporter Backend is running!");
});

module.exports = app;
