import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import RelevantExperience from "./components/RelevantExperience";
import Review from "./components/Review";
import Submit from "./components/Submit";
import { useUser } from "../../context/UserContext";
import ManageResumeForApply from "./components/ManageResumeForApply";
import { useAuth } from "../../context/AuthContext";
const ApplyJob = () => {
  const { accessToken } = useAuth();
  const { userData } = useUser();
  const [step, setStep] = useState(1);
  const [jobDetails, setJobDetails] = useState({});

  const nextStep = () =>
    setStep((prev) => {
      return prev + 1;
    });
  const prevStep = () => setStep((prev) => prev - 1);
  const { id } = useParams();
  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`http://localhost:5000/applyjob/${id}`);
      const data = await res.json();
      setJobDetails(data);
      console.log(data);
    };
    fetchJob();
  }, [id]);
  const handleJobApply = async () => {
    const res = await fetch(`http://localhost:5000/apply-job`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        jobId: id,
      }),
    });
    const data = await res.json();
    alert(data.message);
  };
  return (
    <PageLayout>
      {step === 1 && (
        <ManageResumeForApply
          {...jobDetails}
          userData={userData}
          nextStep={nextStep}
        />
      )}
      {/* {step === 2 && !userData.jobTitle && (
        <RelevantExperience nextStep={nextStep} prevStep={prevStep} />
      )} */}
      {step === 2 && (
        <Review
          handleJobApply={handleJobApply}
          userData={userData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && <Submit userData={userData} />}
    </PageLayout>
  );
};

export default ApplyJob;
