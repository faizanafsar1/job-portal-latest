import { useState } from "react";
import Icon from "../../../components/Icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import useFetcher from "../../../hooks/useFetch";

const SearchSection = () => {
  const [jobQuery, setJobQuery] = useState("");

  const { fetchJobs } = useFetcher({ endPoint: `?search=${jobQuery}` });

  return (
    <div className="bg-white py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg shadow-black/30 border border-gray-500">
          <div className="flex flex-col md:flex-row gap-4 py-2 px-3">
            <div className="flex-1 relative ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon size="lg" icon={faMagnifyingGlass} />
              </div>
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
                className="pl-10 h-12 w-full text-base rounded-l-md focus:border-primary-light/50 focus:ring-1 focus:ring-primary-light/50 focus:outline-none px-3"
              />
            </div>
            <div className="items-center content-center mx-auto mr-2">
              <Button onClick={() => fetchJobs()} style="search" label="Find Jobs"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
