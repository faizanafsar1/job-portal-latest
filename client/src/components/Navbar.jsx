import { Link } from "react-router-dom";

import { useState } from "react";
import Icon from "./Icon";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md z-[999]  w-full duration-300 ~px-4/14 2xl:px-32">
        <nav className="flex items-center justify-between z-50 w-full h-16  ">
          {/* hamburger menu  */}
          <div className="h-6 w-10 md:hidden flex flex-col justify-center items-center relative" onClick={toggleMenu}>
            <div
              className={`absolute w-8 h-[3px] rounded-full bg-primary-light origin-left duration-300 ${
                isOpen ? "rotate-45 -top-0.5" : "top-0"
              } `}
            ></div>
            <div
              className={`absolute w-8 h-[3px] rounded-full bg-primary-dark top-1/2 -translate-y-1/2 duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`absolute w-8 h-[3px] rounded-full origin-left bg-secondary duration-300 ${
                isOpen ? "-rotate-45 bottom-0" : "bottom-0"
              }`}
            ></div>
          </div>
          <Link
            to="/"
            className=" max-md:mx-auto md:flex-[0.5] text-2xl cursor-pointer z-50 xl:flex-1 md:mr-10 h-full text-primary-dark font-bold content-center"
          >
            Job-Portal
          </Link>
          {/* nav links  */}
          <div
            className={`md:*:w-fit gap-10 max-md:absolute max-md:top-16 max-md:px-10 h-full max-md:opacity-0 max-md:flex-col z-50 justify-start content-start max-md:items-start w-4/5 sm:w-1/2 max-md:h-screen max-md:~gap-5/7 md:justify-center md:~text-xs/lg max-md:pt-10 max-md:left-0 duration-200 flex bg-white items-center ${
              isOpen
                ? "translate-x-0 max-md:opacity-100 max-md:before:h-screen max-md:before:w-screen before:backdrop-blur-sm before:absolute before:-z-20 before:top-0 before:left-0"
                : "max-md:-translate-x-full"
            } `}
          >
            <Link to="/about" className=" w-full relative">
              <NavItem navtext={"About"} IconName={faUser} />
            </Link>
            <Link to="/contact" className="w-full ">
              <NavItem navtext={"Contact"} IconName={faPhone} />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
function NavItem({ navtext, IconName }) {
  return (
    <div className="group rounded-lg gap-2 font-semibold max-md:w-full hover:shadow-inner hover:text-primary-dark flex items-center md:justify-center max-md:gap-3 min-w-fit md:text-center px-4 py-3 focus:shadow-2xl">
      <Icon icon={IconName} size="lg" className="p-1 h-fit w-4 md:hidden drop-shadow-lg text-primary-dark" />
      <p className="text-base">{navtext}</p>
    </div>
  );
}
