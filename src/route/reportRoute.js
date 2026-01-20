
const express = require("express");
const router = express.Router();

const {
  createReport,
  getReports,
} = require("../controllers/reportController");

router.post("/reports", createReport);
router.get("/reports", getReports);

module.exports = router;