import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function RelevantExperience({ nextStep, prevStep }) {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Main content */}
      <Icon icon={faArrowLeft} onClick={prevStep} size="lg" className="my-5" />
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Enter a job that shows relevant experience
        </h1>
        <p className="text-gray-600">
          We share one job title with the employer to introduce you as a
          candidate.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="jobTitle"
              className="block text-gray-700 font-medium"
            >
              Job title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light/50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="company"
              className="block text-gray-700 font-medium"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light/50"
            />
          </div>

          <Button label="Continue" style="primary" onClick={nextStep} />
        </form>

        {/* Footer */}
        <div className="text-center space-y-4 text-sm text-gray-600">
          <p>
            Having an issue with this application?
            <a href="#" className="text-blue-600 ml-1">
              Tell us more
            </a>
          </p>
          <p>
            This site is protected by reCAPTCHA and the Google
            <a href="#" className="text-blue-600 mx-1">
              Privacy Policy
            </a>
            and
            <a href="#" className="text-blue-600 mx-1">
              Terms of Service
            </a>
            apply.
          </p>
        </div>
      </div>
    </div>
  );
}
