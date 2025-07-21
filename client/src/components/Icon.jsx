import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function Icon({ icon, size, className, onClick }) {
  const iconSize = useMemo(() => {
    switch (size) {
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      case "md":
        return "text-base";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2xl":
        return "text-2xl";
      default:
        return "text-base";
    }
  }, [size]);
  return <FontAwesomeIcon icon={icon} className={clsx(iconSize, className)} onClick={onClick} />;
}
