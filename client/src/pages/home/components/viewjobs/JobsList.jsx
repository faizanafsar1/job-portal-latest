import { useEffect, useRef, useState } from "react";
import JobCard from "./components/JobCard";
import ViewJobCard from "./components/ViewJobCard";
import ShimmerCard from "./components/ShimmerCard";
import useFetcher from "../../../../hooks/useFetch";
const JobsList = () => {
  const [limit, setLimit] = useState(10);
  const [selectedJob, setSelectedJob] = useState(null);
  const lastJobRef = useRef(null);

  const { isLoading, jobs, fetchJobs } = useFetcher({ endPoint: `?limit=${limit}` });

  useEffect(() => {
    if (jobs.length > 0 && !selectedJob) {
      setSelectedJob(() => jobs[0]);
    }
    console.log(jobs);
  }, [jobs]);

  useEffect(() => {
    fetchJobs();
  }, [limit]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLimit((prev) => prev + 10);
        }
      },
      {
        threshold: 1,
      }
    );
    if (lastJobRef.current) observer.observe(lastJobRef.current);
    return () => {
      if (lastJobRef.current) observer.unobserve(lastJobRef.current);
    };
  }, [jobs]);

  return (
    <div className="max-w-6xl h-screen   overflow-clip mx-auto  ">
      <div className="flex justify-items-center gap-5 py-10 ">
        <div className="flex-[1.3] flex flex-col gap-4">
          <div className="max-h-screen pb-20 hide -scrollbar overflow-scroll space-y-5">
            <div>
              <h1 className="font-bold text-xl">Jobs for you</h1>
              <h2 className="text-base my-2">Jobs based on your activity on Job-portal</h2>
            </div>
            {jobs.map((job, index) => (
              <JobCard
                comanyLogo={job.companyLogo}
                key={index}
                ref={index === jobs.length - 1 ? lastJobRef : null}
                onClick={() => setSelectedJob(job)}
                url={job.url}
                jobTitle={job.title}
                companyName={job.companyName}
                companyLocation={job.companyLocation}
                jobType={job.jobType}
                salary={job.salary}
              />
            ))}

            {isLoading && <ShimmerCard />}
            {isLoading && <ShimmerCard />}
            {isLoading && <ShimmerCard />}
          </div>
        </div>
        <ViewJobCard {...selectedJob} />
      </div>
    </div>
  );
};

export default JobsList;
