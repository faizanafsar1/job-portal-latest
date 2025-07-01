import { useEffect, useState } from "react";
import JobCard from "./components/JobCard";
import ViewJobCard from "./components/ViewJobCard";
const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("http://localhost:5000/jobs-list");
      const jobsData = await res.json();
      setJobs(jobsData);
      setSelectedJob(jobsData[0]);
    };
    fetchJobs();
  }, []);

  return (
    <div className="max-w-6xl  mx-auto mb-10">
      <div className="justify-items-center">
        <div className="flex w-full  gap-4">
          <div className="flex-[1.3] flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-xl">Jobs for you</h1>
              <h2 className="text-base my-2">
                Jobs based on your activity on Indeed
              </h2>
            </div>
            {jobs.map((job, index) => (
              <JobCard
                onClick={() => setSelectedJob(job)}
                key={index}
                jobTitle={job.jobTitle}
                companyName={job.companyName}
                companyLocation={job.companyLocation}
                jobType={job.jobType}
                salary={job.salary}
              />
            ))}
          </div>
          <ViewJobCard {...selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default JobsList;
