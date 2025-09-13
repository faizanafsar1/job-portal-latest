const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobId: { type: Number, required: true, unique: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
    company_name: { type: String, required: true },
    company_logo: { type: String },
    category: { type: String },
    tags: { type: [String] },
    job_type: { type: String },
    publication_date: { type: Date },
    candidate_required_location: { type: String },
    salary: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);
module.exports = new mongoose.model("Job", jobSchema);
