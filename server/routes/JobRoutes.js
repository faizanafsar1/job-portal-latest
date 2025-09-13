const router = require("express").Router();
const jobController = require("../controllers/JobController");

router.get("/jobs-list", jobController.getAllJobs);
router.get("/getjob/:id", jobController.getJobById);

module.exports = router;
