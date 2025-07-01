import PageLayout from "../../components/PageLayout";
import SearchSection from "./components/SearchSection";
import JobsList from "./components/viewjobs/JobsList";

export default function Home() {
  return (
    <PageLayout>
      <SearchSection />
      <JobsList />
    </PageLayout>
  );
}
