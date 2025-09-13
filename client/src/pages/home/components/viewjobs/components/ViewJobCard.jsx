import Icon from "../../../../../components/Icon";
import {
  faArrowUpRightFromSquare,
  faBookmark,
  faBan,
  faCopy,
  faMoneyBill,
  faBriefcase,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../../components/Button";
import { Link } from "react-router-dom";

const ViewJobCard = ({ url, title, companyName, companyLocation, salary, jobType, description }) => {
  return (
    <div className="flex-2 overflow-clip max-h-[90vh]   *:flex *:flex-col border border-primary-light/50 rounded-xl    ">
      <div className="flex-1   max-h-[90vh]  overflow-scroll hide-scrollbar">
        <div className=" sticky bg-white top-0 left-0 w-full">
          <HeadCard url={url} title={title} companyName={companyName} />
        </div>
        <div className=" max-h-1/2">
          <BottomCard companyLocation={companyLocation} description={description} jobType={jobType} salary={salary} />
        </div>
      </div>
    </div>
  );
};

function HeadCard({ title, companyName, companyLocation, salary, url }) {
  return (
    <div className="flex-1  p-6 shadow-lg rounded-lg border-b border-primary-light/50  ">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h1>
      <div className="flex items-center mb-2">
        <span className="text-primary-dark font-medium">{companyName}</span>
      </div>
      <p className="text-gray-600 mb-3">{companyLocation}</p>
      <p className="text-gray-900 font-medium mb-4">{salary}</p>

      <div className="flex space-x-2 ">
        <Link target="_blank" to={`${url}`}>
          <Button style="primary" label="Apply now"></Button>
        </Link>
      </div>
    </div>
  );
}
function BottomCard({ description, companyLocation, salary, jobType }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Job details</h2>
      <p className="text-gray-600 mb-4">Here's how the job details align with your profile</p>

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
            {companyLocation}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            {jobType}
          </span>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Location</h2>
        <div className="flex items-center">
          <Icon icon={faLocationDot} className="h-5 w-5 text-gray-600 mr-2" />
          <span>{companyLocation}</span>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Full job description</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} className="text-gray-600 mb-4"></div>
      </div>
    </div>
  );
}

export default ViewJobCard;
