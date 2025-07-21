const router = require("express").Router();
const applicationController = require("../controllers/ApplicationController");
const { verifyToken, isEmployer } = require("../middleware/Auth");

// // User
// router.post("/:jobId/apply", verifyToken, applicationController.applyToJob);
// router.get("/user", verifyToken, applicationController.getApplicationsByUser);

// // Public or Employer
// router.get("/job/:jobId", verifyToken, applicationController.getApplicationsByJob);

// // Employer
// router.get("/employer", verifyToken, isEmployer, applicationController.getApplicationsForEmployer);
// router.put("/:applicationId/status", verifyToken, isEmployer, applicationController.updateApplicationStatus);

module.exports = router;
