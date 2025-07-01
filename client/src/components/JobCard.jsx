import React from "react";

const JobCard = ({
  title = "React JS Developer",
  company = "Elabd Technologies",
  location = "Islamabad",
  salary = "Rs 20,000 - Rs 40,000 a month",
  jobType = "Full-time",
  contractType = "Contract",
  description = "Our team is looking for a React JS Developer to join them in the upcoming weeks. This position is great for an aspiring React JS developer looking to work on business-critical projects and gain relevant work experience.",
  requirements = [
    "At least 6 months to 1 year of experience in React JS",
    "Expertise in front-end technologies (HTML, JavaScript, CSS), React JS, Vue JS and MongoDB databases",
    "Those who are familiar with web service communication (HTTP, SSL, REST API) based applications",
  ],
}) => {
  return (
    <div className="max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md">
      {/* Main job info section */}
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h1>
        <div className="flex items-center mb-2">
          <a href="#" className="text-blue-600 hover:underline font-medium">
            {company}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </div>
        <p className="text-gray-600 mb-3">{location}</p>
        <p className="text-gray-900 font-medium mb-4">{salary}</p>

        {/* Action buttons */}
        <div className="flex space-x-2 mb-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
            Apply now
          </button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable job details section */}
      <div className="border-t border-gray-200">
        <div className="max-h-[400px] overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Job details</h2>
            <p className="text-gray-600 mb-4">
              Here's how the job details align with your profile
            </p>

            {/* Pay section */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">Pay</span>
              </div>
              <div className="ml-7">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {salary}
                </span>
              </div>
            </div>

            {/* Job type section */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">Job type</span>
              </div>
              <div className="ml-7 space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {contractType}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {jobType}
                </span>
              </div>
            </div>

            {/* Location section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{location}</span>
              </div>
            </div>

            {/* Full job description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Full job description
              </h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
