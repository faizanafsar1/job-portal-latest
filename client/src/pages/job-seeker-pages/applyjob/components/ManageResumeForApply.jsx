import { faCheckCircle, faChevronDown, faFile, faGear } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../../components/Icon";
import Button from "../../../../components/Button";

export default function ManageResumeForApply({
  userData,
  jobTitle,
  jobType,
  jobLocationType,
  companyLocation,
  jobDescription,
  nextStep,
}) {
  return (
    <div className="flex h-screen">
      <div className="flex-[2] justify-items-center  bg-white pt-10">
        <div className="">
          <h1 className="text-2xl font-semibold my-10">Add a resume for the employer</h1>
          <div className="rounded-lg min-w-96 border border-gray-400 p-4">
            <div className="flex items-center mb-4">
              <Icon icon={faFile} size="2xl" className="text-primary-dark mr-3" />
              <div>
                <h2 className="text-lg font-semibold">{userData.resume.filename?.split("-").slice(1).join("-")}</h2>

                <p className="text-sm text-gray-500">
                  Uploaded: &nbsp;
                  {new Date(userData.resume.uploadedAt).toLocaleDateString()}
                </p>
              </div>
              <Icon icon={faCheckCircle} size="xl" className="text-primary-dark ml-auto"></Icon>
            </div>
            <div className="h-60 border border-gray-400 rounded-lg p-4">lines</div>
            <div className="mt-4 relative text-primary-dark *:w-full">
              <Icon icon={faGear} size="xl" className="absolute top-1/2 -translate-y-1/2 -left-16 " />
              <Button style="secondary" label="CV Options"></Button>
            </div>
          </div>
          <div className="*:w-full mt-10">
            <Button style="primary" label="Continue" onClick={nextStep}></Button>
          </div>
        </div>
      </div>
      <div className="flex-[1.2] bg-primary-light/5 p-20 ">
        <div className="p-5 border h-fit rounded-lg bg-white  border-gray-400">
          <h1 className="text-base capitalize font-semibold">
            {jobTitle} <br />
            {jobType} | {jobLocationType}
          </h1>
          <p className="border-b capitalize border-gray-400 pb-4 pt-2 text-sm text-gray-500">{companyLocation}</p>
          <p className="text-sm leading-relaxed text-gray-500 mt-5 mb-10">{jobDescription}</p>
          <div className="w-fit mx-auto">
            <a href="#" className="text-primary-dark">
              View full job Details
              <Icon icon={faChevronDown} size="sm" className="pl-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
