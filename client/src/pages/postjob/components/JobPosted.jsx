import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../components/Icon";
import Button from "../../../components/Button";

export default function JobPosted() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center">
            <Icon icon={faPaperPlane} size="2xl" className=" mr-1" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Your Job has been submitted for review!
        </h1>

        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-4 mb-6">
          <Icon icon={faCheck} size="lg" className="text-green-500 mr-2" />
          <p className="text-gray-600">
            You will get an email confirmation at
            <span className="font-semibold"> fa.03055671518@gmail.com </span>
            when job is approved
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Keep track of your job listings
          </p>
          <p className="text-gray-600">
            To keep track of your job listings, go to
            <a
              href="/my-jobs"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              My Jobs
            </a>
          </p>
        </div>
        <div className="*:w-full">
          <Button
            onClick={() => (window.location.href = "/")}
            label="Return to job search"
            style="secondary"
          />
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Having an issue while posting job?
            <a
              href="/help"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Tell us more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
