import { NavLink } from "react-router-dom";
import {
  faChartLine,
  faFileAlt,
  faUsers,
  faEnvelope,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import IconAndLabelBtn from "./IconLabelAndBtn";

const EmployerNavbar = () => {
  const navItems = [
    { label: "Dashboard", path: "/employer/dashboard", icon: faChartLine },
    { label: "My Jobs", path: "/employer/jobs", icon: faFileAlt },
    { label: "Applicants", path: "/employer/applicants", icon: faUsers },
    { label: "Messages", path: "/employer/messages", icon: faEnvelope },
    { label: "Profile", path: "/employer/settings", icon: faUserCircle },
  ];

  return (
    <nav className="w-full   px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-xl text-primary-dark font-bold">Indeed</div>
        <div className="flex space-x-4">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg transition ${
                  isActive
                    ? "bg-white text-primary-dark"
                    : "hover:bg-primary-light text-white"
                }`
              }
            >
              <IconAndLabelBtn
                label={item.label}
                icon={item.icon}
                className="px-3 py-2 text-sm"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default EmployerNavbar;
