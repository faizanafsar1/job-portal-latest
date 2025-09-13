import { useState } from "react";
import { API } from "../config/config";

export default function useFetcher({ endPoint }) {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    setIsLoading(true);
    const res = await fetch(`${API}${endPoint}`);
    const data = await res.json();

    let jobsList;

    if (data.jobs.length > 5) {
      const slicedJobs = data.jobs.slice(jobs.length);
      jobsList = slicedJobs;
    } else {
      jobsList = data.jobs;
    }

    const refinedJobs = jobsList.map((job) => {
      const refinedJob = {
        id: job.id,
        url: job.url,
        category: job.category,
        companyLogo: job.company_logo,
        companyName: job.company_name,
        description: job.description,
        jobType: job.job_type,
        publicationDate: job.publication_date,
        salary: job.salary,
        companyLocation: job.candidate_required_location,
        tags: job.tags,
        title: job.title,
      };
      return refinedJob;
    });
    setJobs(refinedJobs);
    setIsLoading(false);
  };

  return { isLoading, jobs, fetchJobs };
}
