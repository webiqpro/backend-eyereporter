const express = require("express");
const router = express.Router();

const {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} = require("../controllers/reportController");

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Report management APIs
 */

/**
 * @swagger
 * /api/reports:
 *   post:
 *     summary: Create a new report
 *     tags: [Reports]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Report created successfully
 *       400:
 *         description: Bad request
 */
router.post("/reports", createReport);

/**
 * @swagger
 * /api/reports:
 *   get:
 *     summary: Get all reports
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: List of reports
 */
router.get("/reports", getReports);

/**
 * @swagger
 * /api/reports/{id}:
 *   get:
 *     summary: Get a report by ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Report found
 *       404:
 *         description: Report not found
 */
router.get("/reports/:id", getReportById);

/**
 * @swagger
 * /api/reports/{id}:
 *   put:
 *     summary: Update a report by ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Report updated successfully
 *       404:
 *         description: Report not found
 */
router.put("/reports/:id", updateReport);

/**
 * @swagger
 * /api/reports/{id}:
 *   delete:
 *     summary: Delete a report by ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Report deleted successfully
 *       404:
 *         description: Report not found
 */
router.delete("/reports/:id", deleteReport);

module.exports = router;
