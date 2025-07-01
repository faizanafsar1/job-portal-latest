import Button from "../../../components/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../components/Icon";
export default function PreScreenApplicants({
  formData,
  updateFormData,
  nextStep,
  prevStep,
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
        <h2 className="text-3xl font-bold">Pre-Screen Applicants</h2>
      </div>
      <div className="p-5 border border-gray-300 rounded-lg">
        <h3 className="text-base font-semibold">
          Have to have it? Make it a Deal breaker.
        </h3>
        <p className="text-sm text-gray-500">
          We won’t notify you of candidates that don’t meet your
          <strong> Deal breaker </strong> qualifications. You can review them
          anytime on your candidate dashboard.
        </p>
      </div>
      <div className="border border-gray-300 rounded-lg">
        <h3 className="p-5 text-base bg-gray-100">
          <strong> Screening question:</strong> Please list 2-3 dates and time
          ranges that you could do an interview.
        </h3>
        <p className="text-base px-5 py-3 text-gray-900">
          Ask applicants to list some dates and times they could do an interview
        </p>
      </div>

      <label htmlFor="location" className="text-base font-semibold mb-2 block">
        Browse More Questions <span className="text-red-500">*</span>
      </label>
      <select
        name="jobLocationType"
        id="jobLocationType"
        className="w-full p-2 border rounded"
      >
        <option value="education`">Education</option>
        <option value="experience">Experience</option>
        <option value="skills">Skills</option>
        <option value="other">Other</option>
      </select>
      <div className="w-fit ml-auto mt-10">
        <Button label="Continue" style="primary" onClick={nextStep}></Button>
      </div>
    </div>
  );
}
