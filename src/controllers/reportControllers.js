
/**
 * Report Controller
 * Handles application logic for reports
 */

const reports = require("../data/reportStore");

/**
 * POST /api/reports
 * Create a new report
 */
const createReport = (req, res) => {
  const { title, description, category, location } = req.body;

  // Validation
  if (!title || !description || !category || !location) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Create report object
  const newReport = {
    _id: Date.now().toString(),
    title,
    description,
    category,
    location,
    createdAt: new Date(),
  };

  // Store report in memory
  reports.push(newReport);

  // Return report directly
  res.status(201).json(newReport);
};

/**
 * GET /api/reports
 * Retrieve all reports
 */
const getReports = (req, res) => {
  res.status(200).json(reports);
};

module.exports = {
  createReport,
  getReports,
};
