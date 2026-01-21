const express = require("express");
const router = express.Router();

const {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} = require("../controllers/reportController");

// CRUD routes for reports

router.post("/reports", createReport);
router.get("/reports", getReports);
router.get("/reports/:id", getReportById);
router.put("/reports/:id", updateReport);
router.delete("/reports/:id", deleteReport);

module.exports = router;
