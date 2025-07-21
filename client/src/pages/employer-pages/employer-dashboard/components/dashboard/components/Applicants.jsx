import { faFileAlt, faSyncAlt, faSearch, faFilter, faUserCircle, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../../../../components/Icon";
export default function Applicants({ applications }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold">Recent Applicants</h2>
        <div className="flex space-x-3 w-full sm:w-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search applicants..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
            />
            <Icon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            <Icon icon={faFilter} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {applications.map((application, i) => (
          <ApplicantCard key={i} application={application} />
        ))}
      </div>

      <button className="mt-4 flex items-center text-primary-dark hover:text-primary-dark/80 font-medium">
        View all applicants <Icon icon={faChevronRight} className="ml-1" />
      </button>
    </div>
  );
}

function ApplicantCard({ application }) {
  const { userDetails, jobDetails } = application;
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border-b hover:bg-gray-50 rounded-lg">
      <div className="md:col-span-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
            <Icon icon={faUserCircle} className="text-gray-400 text-xl" />
          </div>
          <div>
            <div className="font-medium">
              {userDetails.firstName} {userDetails.lastName}
            </div>
            <div className="text-sm text-gray-500">{userDetails.email}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm font-medium">{jobDetails.jobTitle}</div>
        <div className="text-xs text-gray-500">{userDetails?.yearsExperience} experience</div>
      </div>

      <div>
        <div className="flex flex-wrap gap-1 mb-2">
          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{userDetails?.skill}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex items-center"></div>

        <div className="flex space-x-2 justify-end">
          <button className="text-primary-dark hover:text-primary-dark/80 p-1">
            <Icon icon={faFileAlt} title="View Resume" />
          </button>
          <button className="text-green-600 hover:text-green-900 p-1">
            <Icon icon={faSyncAlt} title="Change Status" />
          </button>
        </div>
      </div>
    </div>
  );
}
