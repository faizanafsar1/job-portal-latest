import clsx from "clsx";
import { useMemo } from "react";
export default function Button({ style, label, onClick, className, type }) {
  const buttonStyle = useMemo(() => {
    switch (style) {
      case "primary":
        return "bg-gradient-to-br from-primary-dark via-primary-light to-primary-dark text-white px-6 py-3 ";
      case "secondary":
        return "border-primary-light text-primary-light px-6 py-3";
      case "search":
        return "bg-gradient-to-br from-primary-dark via-primary-light to-primary-dark text-white px-3 py-2 h-fit my-auto ";
      case "delete":
        return "hover:bg-gray-100 focus:shadow-inner text-red-600 border-none focus:bg-gray-200 px-3 py-2 h-fit my-auto ";
      case "cancel":
        return "border-primary-light hover:bg-gray-100 text-primary-light px-3 py-2 h-fit my-auto ";
      case "save":
        return "bg-gradient-to-br from-primary-dark  via-primary-light to-primary-dark text-white px-3 py-2 h-fit my-auto ";
      default:
        return "px-6 py-3 ";
    }
  }, [style]);

  return (
    <button
      type={type}
      className={clsx(
        className,
        "cursor-pointer capitalize duration-300 border select-none rounded-xl font-semibold ",
        buttonStyle
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
