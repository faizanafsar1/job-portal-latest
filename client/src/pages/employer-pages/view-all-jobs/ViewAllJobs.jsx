import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { faEdit, faTrash, faUsers } from "@fortawesome/free-solid-svg-icons";
import IconAndLabelBtn from "../../components/IconLabelAndBtn";
import { API } from "../../config/config";

const ViewAllJobs = () => {
  const { jobid } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    console.log(jobid);
    const fetchJob = async () => {
      try {
        const res = await fetch(`${API}/jobs/${jobid}`);
        if (!res.ok) throw new Error("Failed to fetch job");

        const data = await res.json();
        console.log("here debsjdbaj", data);
        setJob(data);
      } catch (err) {
        console.error("Error loading job:", err.message);
      }
    };

    fetchJob();
  }, [jobid]);

  if (!job)
    return (
      <p className="text-center mt-10 text-gray-500">Loading job details...</p>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800">{job.jobTitle}</h1>
        <div className="flex gap-3">
          <IconAndLabelBtn
            label="Applicants"
            icon={faUsers}
            className="text-pink-600"
          />
          <IconAndLabelBtn
            label="Edit"
            icon={faEdit}
            className="text-yellow-500"
          />
          <IconAndLabelBtn
            label="Delete"
            icon={faTrash}
            className="text-red-600"
          />
        </div>
      </div>

      {/* Job Info */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <p>
            <span className="font-medium">Job Type:</span> {job.jobType}
          </p>
          <p>
            <span className="font-medium">Location:</span> {job.jobLocationType}
          </p>
          <p>
            <span className="font-medium">Salary:</span> Rs {job.salary}
          </p>
          <p>
            <span className="font-medium">Vacancies:</span> {job.totalHires}
          </p>
          <p>
            <span className="font-medium">Resume Required:</span>{" "}
            {job.resumeRequired ? "Yes" : "No"}
          </p>
          <p>
            <span className="font-medium">Email Updates:</span>{" "}
            {job.individualEmailUpdates ? "Enabled" : "Disabled"}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-1">
            Job Description
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {job.jobDescription}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">
            Company Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <p>
              <span className="font-medium">Name:</span> {job.companyName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {job.companyEmail}
            </p>
            <p>
              <span className="font-medium">Location:</span>{" "}
              {job.companyLocation}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm">{job.companyDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllJobs;
