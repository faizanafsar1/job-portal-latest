const saveJobs = require("../services/jobService");

const fetchJobs = async () => {
  try {
    const res = await fetch("https://remotive.com/api/remote-jobs?");

    const { jobs } = await res.json();

    if (!jobs?.length) {
      console.log("⚠️ No jobs found in API");
      return;
    }
    await Promise.all(jobs.map((job) => saveJobs(job)));
  } catch (err) {
    console.error("❌ Error fetching jobs:", err.message);
  }
};

module.exports = { fetchJobs };
