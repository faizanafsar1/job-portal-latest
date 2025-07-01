import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";

export default function AddJobDetails({
  formData,
  updateFormData,
  prevStep,
  nextStep,
}) {
  return (
    <div className="space-y-4 mt-20">
      <div
        className="p-3 border border-gray-300 rounded-lg w-fit flex items-center text-primary-dark"
        onClick={prevStep}
      >
        <Icon icon={faArrowLeft} size="lg" className="text-primary-dark mx-2" />
        Back
      </div>
      <div className="p-16 mb-10 bg-primary-light/10 rounded-2xl">
        <h2 className="text-3xl font-bold">Add Job Details</h2>
      </div>
      <label htmlFor="textarea" className="text-base font-semibold block mb-3">
        Job type <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-wrap gap-4">
        {[
          "Full-time",
          "Part-time",
          "Contract",
          "Temporary",
          "Internship",
          "Fresher",
        ].map((job) => (
          <label
            className={`p-2 items-center border  flex gap-2 w-fit rounded-lg ${
              formData.jobType === job
                ? "bg-primary-light/20 border-primary-light "
                : "bg-primary-light/5 border-transparent"
            }`}
          >
            <input
              className="size-5"
              type="checkbox"
              checked={formData.jobType === job}
              onChange={() => updateFormData("jobType", job)}
              value={job}
            />
            <span>{job}</span>
          </label>
        ))}
      </div>
      <div className="w-fit ml-auto mt-10">
        <Button label="Continue" style="primary" onClick={nextStep}></Button>
      </div>
    </div>
  );
}
