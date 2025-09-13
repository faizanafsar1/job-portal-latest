const Job = require("../models/Job");

const saveJob = async (jobData) => {
  try {
    const existingJob = await Job.findOne({ jobId: jobData.id });

    if (existingJob) {
      return null;
    }

    const newJob = new Job({
      jobId: jobData.id,
      url: jobData.url,
      title: jobData.title,
      company_name: jobData.company_name,
      company_logo: jobData.company_logo,
      category: jobData.category,
      tags: jobData.tags,
      job_type: jobData.job_type,
      publication_date: jobData.publication_date,
      candidate_required_location: jobData.candidate_required_location,
      salary: jobData.salary,
      description: jobData.description,
    });
    await newJob.save();
  } catch (error) {
    console.error("Error saving job:", error);
    throw error;
  }
};

module.exports = saveJob;
