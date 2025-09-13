const ShimmerCard = () => {
  return (
    <div className=" cursor-pointer h-fit p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
      <div className="flex mb-4 flex-col gap-2">
        <span className="h-7 block rounded-lg bg-gray-300 w-3/4"></span>
        <span className="h-7 block rounded-lg bg-gray-300 w-1/2"></span>
      </div>
      <p className="h-4 block rounded-lg bg-gray-300 w-16"></p>
      <p className="h-4 block rounded-lg bg-gray-300 mt-2 w-24"></p>
      <div className="flex flex-wrap gap-4 w-fit mt-2 space-y-2.5">
        <span className="h-5 block rounded-lg bg-gray-300 w-20"></span>
        <span className="h-5 block rounded-lg bg-gray-300 w-32"></span>
      </div>
      <span className="h-6 block rounded-lg bg-gray-300 w-16"></span>
    </div>
  );
};
export default ShimmerCard;
