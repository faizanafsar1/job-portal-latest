import {
  faEdit,
  faFilter,
  faPlus,
  faTrash,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../../../components/Icon";

export default function EmployerJobs({ jobsPosted }) {
  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold">My Job Listings</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-primary-dark text-white rounded-lg text-sm hover:opacity-90 transition flex items-center">
            <Icon icon={faPlus} className="mr-2" />
            Post New Job
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            <Icon icon={faFilter} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {jobsPosted.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-b hover:bg-gray-50 rounded-lg">
      <div>
        <p className="font-medium capitalize text-lg">{job.jobTitle}</p>
        <p className="text-sm capitalize text-gray-500">
          {job.jobType} • {job.jobLocationType}
        </p>
        <p className="text-sm mt-1 capitalize">{job.salary}</p>
      </div>

      <div className="flex flex-col">
        <div className="text-sm">
          <span className="font-medium">{job.totalHires}</span> Vacancies
        </div>
        {/* <div className="text-sm text-gray-500">Posted: {job.postedOn}</div> */}
        <span
          className={`mt-2 px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 `}
        >
          {/* {job.status.charAt(0).toUpperCase() + job.status.slice(1)} */}
          Active
        </span>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <button className="text-primary-dark hover:text-primary-dark/80 p-2">
          <Icon icon={faUsers} title="View Applicants" />
        </button>
        <button className="text-yellow-600 hover:text-yellow-900 p-2">
          <Icon icon={faEdit} title="Edit" />
        </button>
        <button className="text-red-600 hover:text-red-900 p-2">
          <Icon icon={faTrash} title="Delete" />
        </button>
      </div>
    </div>
  );
}
