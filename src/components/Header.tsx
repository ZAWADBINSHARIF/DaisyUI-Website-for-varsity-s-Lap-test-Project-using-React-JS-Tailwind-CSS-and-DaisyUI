import { FaTwitterSquare } from "react-icons/fa";
import { ImGooglePlus2 } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io";
import { SiNextui } from "react-icons/si";



const Header = () => {
  return (
    <div className="bg-orange-500 text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-orange-500">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Services</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-3xl font-bold">
            <SiNextui />
            DAISYUI
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <FaTwitterSquare size={27} className="cursor-pointer" />
          <ImGooglePlus2 size={23} className="cursor-pointer" />
          <IoLogoFacebook size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;