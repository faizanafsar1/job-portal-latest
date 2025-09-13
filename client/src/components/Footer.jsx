import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid max-sm:grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* Brand + Description */}
        <div className="flex flex-col h-fit gap-1">
          <span className="text-2xl text-primary-dark font-bold">Job-Portal</span>
          <p className="text-white text-sm mt-4 md:w-3/4 leading-6">
            Your trusted job portal to find and apply for jobs quickly. Browse thousands of opportunities all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 md:mx-auto">
          <h2 className="text-primary-dark font-semibold text-lg border-b-2 border-primary-dark w-fit pb-2 mb-4">Quick Links</h2>
          <div className="flex flex-col gap-y-2">
            <Link to="/" className="text-white hover:text-primary-dark text-sm tracking-wide">
              Home
            </Link>
            <Link to="#" className="text-white hover:text-primary-dark text-sm tracking-wide">
              Jobs
            </Link>
            <Link to="/about" className="text-white hover:text-primary-dark text-sm tracking-wide">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-primary-dark text-sm tracking-wide">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 md:mx-auto">
          <h2 className="text-primary-dark font-semibold text-lg border-b-2 border-primary-dark w-fit pb-2 mb-4">Contact</h2>
          <p className="text-white text-sm">+92-340-1938272</p>
          <p className="text-white text-sm">support@jobportal.com</p>
          <div className="flex gap-3 mt-3">
            <Link target="_blank" to={"mailto:support@jobportal.com"}>
              <IconBox iconName={faEnvelope} />
            </Link>
            <Link target="_blank" to={"https://www.facebook.com"}>
              <IconBox iconName={faFacebook} />
            </Link>
            <Link target="_blank" to={"https://www.linkedin.com"}>
              <IconBox iconName={faLinkedin} />
            </Link>
            <Link target="_blank" to={"https://github.com"}>
              <IconBox iconName={faGithub} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 mt-8 flex flex-col md:flex-row gap-y-5 items-center justify-between border-t border-primary-dark px-6 max-w-screen-xl mx-auto">
        <p className="text-center text-white text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Job-Portal. All rights reserved.
        </p>
        <div>
          <Link to={"/privacy-policy"} className="text-white hover:text-primary-dark text-sm tracking-wide cursor-pointer">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function IconBox({ iconName }) {
  return (
    <div className="bg-white duration-500 hover:bg-primary-dark size-9 flex items-center justify-center rounded-full">
      <Icon icon={iconName} className="text-black hover:text-white duration-500 text-lg" />
    </div>
  );
}
