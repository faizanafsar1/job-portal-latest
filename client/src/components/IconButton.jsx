import Icon from "./Icon";

export default function IconButton({ icon, size, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-gray-100 cursor-pointer rounded-lg px-2 py-1.5 content-center flex focus:bg-gray-200 focus:shadow-inner ${className}`}
    >
      <Icon icon={icon} size={size} />
    </button>
  );
}
