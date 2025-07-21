import Button from "../../../../components/Button";

export default function JobBasics({ formData, updateFormData, nextStep }) {
  return (
    <div className="space-y-4 mt-20">
      <div className="p-16 mb-10 bg-primary-light/10 rounded-2xl">
        <h2 className="text-3xl font-bold">Add Job Basics</h2>
      </div>
      <label htmlFor="company-description" className="text-base font-semibold">
        Company Description
      </label>
      <p className="text-sm text-gray-500">Introduce your company to people in a few lines.</p>
      <textarea
        value={formData.companyDescription}
        onChange={(e) => updateFormData("companyDescription", e.target.value)}
        id="company-description"
        className="w-full p-2 border rounded"
        placeholder="Present your company by communicating your business, your market position, your company culture, etc"
      ></textarea>
      <label htmlFor="jobtitle" className="text-base font-semibold my-2 block">
        Company Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={formData.companyName}
        onChange={(e) => updateFormData("companyName", e.target.value)}
        className="w-full p-2 border rounded"
      />
      <label htmlFor="jobtitle" className="text-base font-semibold my-2 block">
        Company Location <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={formData.companyLocation}
        onChange={(e) => updateFormData("companyLocation", e.target.value)}
        className="w-full p-2 border rounded"
      />
      <label htmlFor="jobtitle" className="text-base font-semibold my-2 block">
        Job title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={formData.jobTitle}
        onChange={(e) => updateFormData("jobTitle", e.target.value)}
        placeholder="e.g. Software Engineer"
        className="w-full p-2 border rounded"
      />
      <div className="h-px w-full bg-gray-300 my-14"></div>
      <label htmlFor="location" className="text-base font-semibold mb-2 block">
        Job Location Type <span className="text-red-500">*</span>
      </label>
      <select
        value={formData.jobLocationType}
        onChange={(e) => updateFormData("jobLocationType", e.target.value)}
        id="jobLocationType"
        className="w-full p-2 border rounded"
      >
        <option value="">Select job location</option>
        <option value="in-person">In Person</option>
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <div className="w-fit ml-auto mt-10">
        <Button label="Continue" style="primary" onClick={nextStep}></Button>
      </div>
    </div>
  );
}
