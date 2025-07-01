import Icon from "../../../../../components/Icon";
import { faEllipsis, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const JobCard = ({
  onClick,
  jobTitle,
  companyName,
  companyLocation,
  jobType,
  salary,
}) => {
  return (
    <div
      onClick={onClick}
      className=" cursor-pointer h-fit p-4 bg-white rounded-lg border border-primary-light/50 shadow-sm"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg capitalize font-bold text-gray-900">
          {jobTitle}
        </h2>

        <Icon icon={faEllipsis} size="lg" className="rotate-90" />
      </div>
      <p className="text-sm mt-2 capitalize text-gray-600">{companyName}</p>
      <p className="text-sm capitalize text-gray-600">{companyLocation}</p>
      <div className="flex flex-wrap gap-4 w-fit mt-4 space-y-4">
        <span className="px-3 py-1 w-fit text-sm bg-gray-100 text-gray-800 rounded-md">
          {jobType}
        </span>
        <span className="px-2 py-1 h-fit w-fit text-xs bg-green-50 text-gray-800 rounded-md">
          {salary}
        </span>
      </div>
      <a
        href="#"
        className="flex items-center text-primary-dark/80 hover:text-primary-dark text-sm font-medium"
      >
        Apply <Icon icon={faArrowRight} size="sm" className="pl-2" />
      </a>
    </div>
  );
};
export default JobCard;
