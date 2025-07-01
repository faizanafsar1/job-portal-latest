const mongoose = require("mongoose");

const JobApplicationSchema = new mongoose.Schema({
  jobDetails: {
    jobId: { type: String, default: "" },
    jobTitle: { type: String, default: "" },
    jobDescription: { type: String, default: "" },
    jobType: { type: String, default: "" },
    jobLocationType: { type: String, default: "" },
    salary: { type: String, default: "" },
    totalHires: { type: Number, default: 1 },
    companyName: { type: String, default: "" },
    companyEmail: { type: String, default: "" },
    companyDescription: { type: String, default: "" },
    companyLocation: { type: String, default: "" },
  },
  userDetails: {
    role: { type: String, default: "" },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    contact: { type: String, default: "" },
    educationLevel: { type: String, default: "" },
    studyField: { type: String, default: "" },
    jobTitle: { type: String, default: "" },
    jobCompany: { type: String, default: "" },
    skill: { type: String, default: "" },
    yearsExperience: { type: String, default: "" },
    address: {
      streetAddress: { type: String, default: "" },
      cityState: { type: String, default: "" },
      postal: { type: String, default: "" },
    },
    resume: {
      filename: { type: String, default: "" },
      filepath: { type: String, default: "" },
      mimetype: { type: String, default: "" },
      size: { type: String, default: "" },
      public_id: { type: String, default: "" },
    },
  },
});

module.exports = new mongoose.model("JobApplication", JobApplicationSchema);
