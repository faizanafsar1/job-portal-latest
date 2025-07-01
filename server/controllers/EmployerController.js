const jobCollection = require("../models/Job");
const JobApplication = require("../models/JobApplication");
const Job = require("../models/Job");
const Employer = require("../models/Employer");

exports.jobPost = async (req, res) => {
  try {
    const newJob = new jobCollection({ ...req.body });
    await newJob.save();
    res.status(200).json({ message: "job saved successfully" });
  } catch (error) {
    console.log("error while saving ", error);
  }
};

exports.dashboardData = async (req, res) => {
  const userId = req.user.userId;
  const employer = await Employer.findById(userId);

  const totalApplications = await JobApplication.find({
    "jobDetails.companyEmail": employer.email,
  }).countDocuments();
  const applications = await JobApplication.find({
    "jobDetails.companyEmail": employer.email,
  });
  console.log(totalApplications, applications);
  const totalJobsPosted = await Job.find({
    companyEmail: employer.email,
  }).countDocuments();
  const jobsPosted = await Job.find({ companyEmail: employer.email });
  res
    .status(200)
    .send({ totalApplications, applications, totalJobsPosted, jobsPosted });
};
