import Button from "../../../../components/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../../components/Icon";

const SetPreferences = ({ prevStep, nextStep, updateFormData, formData }) => {
  return (
    <div className="space-y-4 mt-20">
      <div className="p-3 border border-gray-300 rounded-lg w-fit flex items-center text-primary-dark" onClick={prevStep}>
        <Icon icon={faArrowLeft} size="lg" className="text-primary-dark mx-2" />
        Back
      </div>
      <div className="p-16 mb-10 bg-primary-light/10 rounded-2xl">
        <h2 className="text-3xl font-bold">Set Preferences</h2>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">Communication preferences</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-base font-semibold text-gray-700 mb-1">
              Get application updates <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => updateFormData("companyEmail", e.target.value)}
              value={formData.companyEmail}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
          </div>

          <div className="flex items-center">
            <input
              onChange={(e) => updateFormData("individualEmailUpdates", e.target.value)}
              value={formData.individualEmailUpdates || false}
              type="checkbox"
              id="individualEmails"
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="individualEmails" className="ml-2 text-gray-700">
              Send an individual email each time someone applies.
            </label>
          </div>
        </div>
      </section>
      <div className="h-px w-full bg-gray-300 my-10"></div>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Application preferences</h2>

        <div className="space-y-4">
          <input
            onChange={(e) => updateFormData("resumeRequired", e.target.value)}
            value={formData.resumeRequired || false}
            type="checkbox"
            id="resume"
            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="resume" className="ml-2 text-gray-700">
            Resume is required
          </label>
        </div>
      </section>
      <div className="h-px w-full bg-gray-300 my-10"></div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hiring details</h2>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-1">
            Number of people to hire in the next 30 days
            <span className="text-red-500">*</span>
          </label>
          <div className="flex w-full max-w-[200px]">
            <input
              onChange={(e) => updateFormData("totalHires", e.target.value)}
              value={formData.totalHires}
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      <div className="ml-auto w-fit">
        <Button label="Continue" style="primary" onClick={nextStep} />
      </div>
    </div>
  );
};

export default SetPreferences;
