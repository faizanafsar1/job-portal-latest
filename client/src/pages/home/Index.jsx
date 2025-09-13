import Navbar from "../../components/Navbar";
import Card from "./Card";
import SearchSection from "./components/SearchSection";
import JobsList from "./components/viewjobs/JobsList";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <SearchSection /> */}
      <div className="flex flex-col gap-5">
        <Card text="frontend developer" desc="asjdkjas" />
      </div>
      {/* <JobsList /> */}
    </>
  );
}
