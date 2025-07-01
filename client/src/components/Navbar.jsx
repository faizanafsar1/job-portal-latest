import { useState } from "react";
import Icon from "./Icon";
import {
  faArrowRightArrowLeft,
  faCommentDots,
  faUser,
  faFileAlt,
  faBookmark,
  faQuestionCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <header className="border-b fixed top-0 w-full z-50  border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-end space-x-8 h-full">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-dark mb-3">
              indeed
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-900 hover:text-primary-dark border-b-2 border-transparent hover:border-primary-dark pb-4 font-medium "
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-primary-dark border-b-2 border-transparent hover:border-primary-dark pb-4 font-medium "
            >
              Company reviews
            </a>
          </nav>
        </div>
        <div className=" flex space-x-5 h-full items-end">
          <div className="flex space-x-5 mb-2 items-center">
            <div className="hover:bg-primary-light/10 rounded-md p-2">
              <Icon
                icon={faCommentDots}
                size="lg"
                className="text-primary-dark"
              />
            </div>
            <div className="hover:bg-primary-light/10 rounded-md p-2">
              <Icon
                icon={faArrowRightArrowLeft}
                size="lg"
                className="text-primary-dark"
              />
            </div>
            <div
              onClick={() => setShowDropDown(!showDropDown)}
              className="hover:bg-primary-light/10 relative rounded-md p-2"
            >
              <Icon icon={faUser} size="lg" className="text-primary-dark" />
              <div className="absolute top-10 right-0">
                {showDropDown ? <UserDropdown /> : ""}
              </div>
            </div>
            <div className="hidden md:block h-6 w-px bg-gray-300"></div>
          </div>

          <Link
            to="/postjob"
            className="text-gray-900 hover:text-primary-dark border-b-2 border-transparent hover:border-primary-dark pb-4 font-medium "
          >
            Employers / Post Job
          </Link>
        </div>
      </div>
    </header>
  );
};

const UserDropdown = () => {
  return (
    <div className="w-64 rounded-md border border-gray-200 shadow-md bg-white">
      <ul className="py-2 text-sm text-gray-700">
        <li className="">
          <Link
            to={"/profile"}
            className="hover:bg-primary-light/5 cursor-pointer px-4 py-2 flex items-center gap-2"
          >
            <Icon icon={faFileAlt} size="lg" className="text-primary-dark" />
            Profile
          </Link>
        </li>
        <li className="hover:bg-primary-light/5 cursor-pointer px-4 py-2 flex items-center gap-2">
          <Icon icon={faBookmark} size="lg" className="text-primary-dark" />
          My Saved jobs
        </li>
        <li className="hover:bg-primary-light/5 cursor-pointer px-4 py-2 flex items-center gap-2">
          <Icon
            icon={faQuestionCircle}
            size="lg"
            className="text-primary-dark"
          />
          Help
        </li>
        <li className="hover:bg-primary-light/5 cursor-pointer px-4 py-2 flex items-center gap-2">
          <Icon icon={faLock} size="lg" className="text-primary-dark" />
          Privacy Center
        </li>
      </ul>

      <div className="hover:bg-primary-light/5 group border-t cursor-pointer text-center border-gray-200 px-4 py-2">
        <span className="text-primary-dark group-hover:underline text-center text-sm ">
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Header;
