import Icon from "../../../../../components/Icon";
import {
  faArrowUpRightFromSquare,
  faBookmark,
  faBan,
  faCopy,
  faMoneyBill,
  faBriefcase,
  faLocationDot,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../../components/Button";
import { Link } from "react-router-dom";

const ViewJobCard = ({
  _id,
  jobTitle,
  companyName,
  companyLocation,
  salary,
  jobType,
  jobLocationType,
  jobDescription,
}) => {
  return (
    <div className="flex-2 max-h-[80vh] overflow-y-hidden sticky top-20 bg-white rounded-lg border border-primary-light/50 shadow-md">
      <div className="p-6 shadow-lg rounded-lg border-b border-primary-light/50  ">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          {jobTitle}
        </h1>
        <div className="flex items-center mb-2">
          <a href="#" className="text-primary-dark hover:underline font-medium">
            {companyName}
          </a>
          <div className="ml-1">
            <Icon
              icon={faArrowUpRightFromSquare}
              className="h-4 w-4 text-primary-dark"
            />
          </div>
        </div>
        <p className="text-gray-600 mb-3">{companyLocation}</p>
        <p className="text-gray-900 font-medium mb-4">{salary}</p>

        <div className="flex space-x-2 ">
          <Link to={`/applyjob/${encodeURIComponent(_id)}`}>
            <Button style="primary" label="Apply now"></Button>
          </Link>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Icon icon={faBookmark} className="h-6 w-6 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Icon icon={faBan} className="h-6 w-6 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Icon icon={faCopy} className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-h-[50vh]  overflow-y-auto hide-scrollbar">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Job details</h2>
          <p className="text-gray-600 mb-4">
            Here's how the job details align with your profile
          </p>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Icon icon={faMoneyBill} className="h-5 w-5 text-gray-600 mr-2" />
              <span className="font-medium">Pay</span>
            </div>
            <div className="ml-7">
              <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800">
                {salary}
              </span>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Icon icon={faBriefcase} className="h-5 w-5 text-gray-600 mr-2" />
              <span className="font-medium">Job type</span>
            </div>
            <div className="ml-7 space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                {jobLocationType}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                {jobType}
              </span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div className="flex items-center">
              <Icon
                icon={faLocationDot}
                className="h-5 w-5 text-gray-600 mr-2"
              />
              <span>{companyLocation}</span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Full job description</h2>
            <p className="text-gray-600 mb-4">{jobDescription}</p>
          </div>
          <div className="border-t border-gray-400 pt-10">
            <div className="w-fit relative group">
              <Icon
                icon={faFlag}
                size="lg"
                className="absolute text-primary-dark top-1/2 duration-300 group-hover:scale-105 -translate-y-1/2 left-3"
              />
              <div className=" *:pl-10 mb-14">
                <Button style="secondary" label="Report Job"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobCard;
