import { FaTwitterSquare } from "react-icons/fa";
import { ImGooglePlus2 } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io";


const Footer = () => {
    return (
        <div className="w-full flex flex-wrap bg-orange-500 justify-around py-3">

            <div className="text-white flex-row">
                <div className="flex items-center justify-center space-x-3">
                    <FaTwitterSquare size={27} className="cursor-pointer" />
                    <ImGooglePlus2 size={23} className="cursor-pointer" />
                    <IoLogoFacebook size={30} className="cursor-pointer" />
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg text-white">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            <div className="flex-col text-white">
                <p>
                    +44750000000
                </p>
                <p>
                    D8000000
                </p>
                <p>
                    info@email.com.uk
                </p>
            </div>


        </div>
    );
};

export default Footer;