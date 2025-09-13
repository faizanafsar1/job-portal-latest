export default function Card() {
  return (
    <div className="flex-col gap-5 border  border-gray-600 w-sm flex mx-auto p-5 min-h-50 rounded-2xl ">
      <h2 className="text-lg font-bold">title</h2>
      <p className="text-gray-600 flex flex-col gap-0">
        <span>companyName </span>
        <span>Location</span>
      </p>
      <span className="bg-green-100 p-1 text-sm  rounded-lg ">salary</span>
      <span className=" text-sm  rounded-lg "> ▶️ Easily Apply</span>
    </div>
  );
}

const jobDetails = {
  title: "Full Stack Developer",
  location: "wah cantt",
  company: "MERNSol",
  salar: "20000 - 40000",
};
