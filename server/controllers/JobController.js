const jobCollection = require("../models/Job");
const JobApplication = require("../models/JobApplication");

exports.findJobs = async (req, res) => {
  const jobs = await jobCollection.find();
  res.status(200).send(jobs);
};
exports.findJob = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const job = await jobCollection.findById(id);
  res.send(job);
  console.log(job);
};
