import { MapPin, Mail, Phone } from "lucide-react";
import logo from '../../assets/logo-1.png'

const Navbar = () => {
  return (
    <>
      <nav className=" text-white bg-[#50589C] ">
        <div className=" flex justify-between p-1 ">
          <h1 className="font-bold text-2xl ">
            Lyralogics That Ensure Your IT Runs Seamlessly
          </h1>
          <div className="flex gap-6 ">
            <div className="flex gap-2 p-2">
              <MapPin strokeWidth={1.75} className="w-5 h-5  "/>
              <span className="font-medium text-sm space-x-6  ">4721 Rosebud Drive GA, Snellville, 30039</span>
            </div>

            <div className="flex gap-2 p-2 ">
              <Mail className="w-5 h-5 " />
              <span className="font-medium text-sm space-x-9 "> info@lyralogics.com </span>
            </div>

            <div className="flex gap-2 p-2">
              <Phone strokeWidth={1.75}  className="w-5 h-5 "/>
              <span className="font-medium text-sm space-x-9 "> +1(678)5236569 </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col-2 justify-around items-center py-2">
          <div className=" ">
            <img src={logo} alt="logo" className="transition-transform duration-500 ease-in-out hover:scale-110 " />
          </div>
          <div className="flex gap-10 font-bold text-xl ">
                <ul className=" hover:bg-gray-400 rounded px-2">Home</ul>
                <ul className=" hover:bg-gray-400 rounded px-2 ">Services</ul>
                <ul className=" hover:bg-gray-400 rounded px-2 ">Contact</ul>
                <ul className=" hover:bg-gray-400 rounded px-2 ">Blogs</ul>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
