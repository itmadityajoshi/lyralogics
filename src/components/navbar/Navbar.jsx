import { MapPin, Mail, Phone, Menu, X } from "lucide-react";
import logo from "../../assets/logo-1.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#34656D] ">
        <div className="hidden lg:flex justify-between px-7 ">
          <h1 className="font-bold md:text-xl ">
            Lyralogics That Ensure Your IT Runs Seamlessly
          </h1>
          <div className="flex gap-6 ">
            <div className="flex gap-2 p-2">
              <MapPin strokeWidth={1.75} className="w-5 h-5  " />
              <span className="font-medium text-sm space-x-6  ">
                4721 Rosebud Drive GA, Snellville, 30039
              </span>
            </div>

            <div className="flex gap-2 p-2 ">
              <Mail className="w-5 h-5 " />
              <span className="font-medium text-sm space-x-9 ">
                {" "}
                info@lyralogics.com{" "}
              </span>
            </div>

            <div className="flex gap-2 p-2">
              <Phone strokeWidth={1.75} className="w-5 h-5 " />
              <span className="font-medium text-sm space-x-9 ">
                {" "}
                +1(678)5236569{" "}
              </span>
            </div>
          </div>
        </div>

        {/* nav second line started */}

        <div className="flex items-center justify-around p-4  fixed top-6 w-full">
          <img src={logo} alt="logo" />

          <div className="md:hidden flex items-center">
            <button
              className=" md:hidden text-amber-50 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* desktop menu  */}
          <ul className="hidden md:flex space-x-6 text-amber-50 font-medium text-xl ">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden   pt-27 flex justify-center w-full ">
            <ul className="space-y-6 text-amber-50 font-medium">
              <li>
                <a href="#" className="block hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-500">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
