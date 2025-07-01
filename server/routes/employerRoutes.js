const express = require("express");
const router = express.Router();
const jobController = require("../controllers/JobController");
const EmployerController = require("../controllers/EmployerController");
const { requireRole, verifyToken } = require("../middleware/Auth");

router.post("/post-job", EmployerController.jobPost);
router.get("/jobs-list", jobController.findJobs);
router.get("/applyjob/:id", jobController.findJob);
router.get(
  "/dashboard-data",
  verifyToken,
  requireRole("employer"),
  EmployerController.dashboardData
);
module.exports = router;
