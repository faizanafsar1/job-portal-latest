const jobCollection = require("../models/Job");
const JobApplication = require("../models/JobApplication");
const Job = require("../models/Job");
const Employer = require("../models/Employer");

exports.dashboardData = async (req, res) => {
  const userId = req.user.userId;
  const employer = await Employer.findById(userId);

  const totalApplications = await JobApplication.find({
    "jobDetails.companyEmail": employer.email,
  }).countDocuments();
  const applications = await JobApplication.find({
    "jobDetails.companyEmail": employer.email,
  });
  const totalJobsPosted = await Job.find({
    companyEmail: employer.email,
  }).countDocuments();
  const jobsPosted = await Job.find({ companyEmail: employer.email });
  res.status(200).send({ totalApplications, applications, totalJobsPosted, jobsPosted });
};
