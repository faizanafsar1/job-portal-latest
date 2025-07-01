import { NavLink } from "react-router-dom";

const EmployerFooter = () => {
  return (
    <footer className="w-full bg-primary-dark text-white px-6 py-4 mt-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MERN Solutions. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm mt-2 md:mt-0">
          <NavLink to="/terms" className="hover:underline">
            Terms
          </NavLink>
          <NavLink to="/privacy" className="hover:underline">
            Privacy
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default EmployerFooter;
