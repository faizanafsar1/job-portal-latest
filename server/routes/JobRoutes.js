const router = require("express").Router();
const jobController = require("../controllers/JobController");
const { verifyToken, requireRole } = require("../middleware/Auth");

// Public
// router.get("/", jobController.getAllJobs);
// router.get("/search", jobController.searchJobs); // e.g. /search?title=React
// router.get("/filter", jobController.filterJobs); // e.g. /filter?location=Lahore
router.get("/getjob/:id", jobController.getJobById);

// // Employer
// router.post("/", verifyToken, requireRole("employer"), jobController.createJob);
// router.get("/employer/:id", verifyToken, requireRole("employer"), jobController.getJobsByEmployer);
// router.put("/:id", verifyToken, requireRole("employer"), jobController.updateJob);
// router.delete("/:id", verifyToken, requireRole("employer"), jobController.deleteJob);

module.exports = router;
