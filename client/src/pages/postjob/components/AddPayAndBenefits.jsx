import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { useState } from "react";

export default function AddPayAndBenefits({
  updateFormData,
  prevStep,
  nextStep,
}) {
  const [salaryObj, setSalaryObj] = useState({
    min: "",
    max: "",
    rate: "per-month",
  });
  const salaryFunc = () => {
    const salary = `Rs ${salaryObj.min} - Rs ${salaryObj.max} ${salaryObj.rate}`;
    updateFormData("salary", salary);
  };
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
        <h2 className="text-3xl font-bold">Add Pay and Benefits</h2>
      </div>
      <div className="flex w-fit mx-auto flex-wrap gap-4 ">
        <div>
          <label
            htmlFor="jobtitle"
            className="text-base font-semibold my-2 w-fit block"
          >
            Minimum <span className="text-red-500">*</span>
          </label>
          <input
            onChange={(e) =>
              setSalaryObj({ ...salaryObj, min: e.target.value })
            }
            value={salaryObj.min}
            type="number"
            placeholder="Rs"
            className="max-w-40 p-2 border rounded"
          />
        </div>
        <div className=" content-end mb-3">
          <span className="text-base font-semibold text-gray-500">to</span>
        </div>
        <div>
          <label
            htmlFor="jobtitle"
            className="text-base font-semibold my-2 w-fit block"
          >
            Maximum <span className="text-red-500">*</span>
          </label>
          <input
            onChange={(e) =>
              setSalaryObj({ ...salaryObj, max: e.target.value })
            }
            value={salaryObj.max}
            type="number"
            placeholder="Rs"
            className="max-w-40 p-2 border rounded"
          />
        </div>

        <div>
          <label
            htmlFor="show-pay-by"
            className="text-base font-semibold my-2 w-fit block"
          >
            Rate <span className="text-red-500">*</span>
          </label>
          <select
            name="rate"
            id="rate"
            onChange={(e) =>
              setSalaryObj({ ...salaryObj, rate: e.target.value })
            }
            value={salaryObj.rate}
            className=" p-2 border rounded"
          >
            <option value="per-hour">Per Hour</option>
            <option value="per-day">Per Day</option>
            <option value="per-week">Per Week</option>
            <option value="per-month">Per Month</option>
            <option value="per-year">Per Year</option>
          </select>
        </div>
      </div>
      <div className="w-fit ml-auto mt-32">
        <Button
          label="Continue"
          style="primary"
          onClick={() => {
            salaryFunc();
            nextStep();
          }}
        ></Button>
      </div>
    </div>
  );
}
