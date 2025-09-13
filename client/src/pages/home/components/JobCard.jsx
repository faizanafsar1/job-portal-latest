import Button from "../../../components/Button";

const JobCard = () => {
  return (
    <div className="w-200 rounded-lg mt-10 flex gap-4 h-85 border-black p-7 bg-[#1B1B29] text-white mx-auto">
      <div className="rounded-full border-15 w-4 h-4 border-blue-600"></div>
      <div className="">
        <div className="flex justify-between">
          <h1 className="font-bold">Enterprise Application Administrator</h1>
          <div className="space-x-4 p-1">
            <Button label={"View Job"} style={"secondary"} />
            <Button label={"Apply"} style={"primary"} />
          </div>
        </div>
        <div className="flex gap-2">
          <p className="mt-1.5">GeneDx</p>
          <h2 className=" border-blue-950 border-2 rounded-full bg-gray-800 p-1">:person_in_tuxedo: 1001 - 5000</h2>
        </div>
        <div className="flex gap-2 mt-3">
          <Tag tagText={"Website"} />
          <Tag tagText={"Linkedln"} />
          <Tag tagText={"All job Openings"} />
        </div>
        <div className="mt-5">
          <p className="text-gray-300 text-xs">
            Admininster GeneDx enterprise COTS/SaaS applications,lead deployments and integrations,manage vendors,support
            users,and maintain SOPs and documentations.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-5 font-medium">
          <BottomTag tagText={"us United States-Remote"} />
          <BottomTag tagText={"   :money_with_wings: $104.5k - $130.7k/year"} />
          <BottomTag tagText={":alarm_clock: Full Time"} />
          <BottomTag tagText={"large_yellow_circle: Mid-level"} />
          <BottomTag tagText={"large_orange_circle: Senior"} />
          <BottomTag tagText={"computer: Administration"} />
        </div>
      </div>
    </div>
  );
};
export default JobCard;

function Tag({ tagText }) {
  return <span className=" border-black rounded-md p-2 pr-2 pl-2 bg-gray-700 text-xs">{tagText}</span>;
}
function BottomTag({ tagText }) {
  return <span className="border-1 rounded-full pr-2 pl-2 p-2 text-xs border-gray-700 bg-gray-700">{tagText}</span>;
}
