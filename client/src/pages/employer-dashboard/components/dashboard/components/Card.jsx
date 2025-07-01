import Icon from "../../../../../components/Icon";

export default function Card({ title, count, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </p>
          <p className="text-3xl font-bold mt-2">{count}</p>
        </div>
        <div className={`p-3 rounded-lg bg-primary-dark/10 text-primary-dark `}>
          <Icon icon={icon} />
        </div>
      </div>
    </div>
  );
}
