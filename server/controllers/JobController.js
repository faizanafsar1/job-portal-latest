const jobCollection = require("../models/Job");
const JobApplication = require("../models/JobApplication");

exports.getAllJobs = async (req, res) => {
  const jobs = await jobCollection.find();
  res.status(200).send(jobs);
};
exports.getJobById = async (req, res) => {
  const id = req.params.id;
  const job = await jobCollection.findById(id);
  res.status(200).send(job);
};
exports.jobPost = async (req, res) => {
  try {
    const newJob = new jobCollection({ ...req.body });
    await newJob.save();
    res.status(200).json({ message: "job saved successfully" });
  } catch (error) {
    console.log("error while saving ", error);
  }
};
