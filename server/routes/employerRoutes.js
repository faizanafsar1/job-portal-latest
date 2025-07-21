const express = require("express");
const router = express.Router();
const jobController = require("../controllers/JobController");
const EmployerController = require("../controllers/EmployerController");
const { requireRole, verifyToken } = require("../middleware/Auth");

// router.get("/jobs-list", jobController.findJobs);  // to find jobs posted by employer
// router.get("/applyjob/:id", jobController.findJob);  // to find single job by employer
router.get("/dashboard-data", verifyToken, requireRole("employer"), EmployerController.dashboardData);
// router.get("/jobs/:id", jobController.findJob);
module.exports = router;
