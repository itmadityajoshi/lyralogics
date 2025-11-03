import { useState } from "react";
import { Menu, X } from "lucide-react";
import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {

  const [isOPen, setIsOPen] = useState(false)
    
  const toogle = ()=>{
    setIsOPen(!isOPen)
  }
  return (
      <nav className="bg-purple-200  w-full">
      
        <div className="h-16 flex items-center justify-around">
            {/* logo */}
            <div>
              <img src={assets.logo_dark} alt="compony logo"   />
            </div>

            {/* Desktop Buttons */}
            <div className="hidden sm:block space-x-4 text-2xl  ">
              <a href="">Home</a>
              <a href="">service</a>
              <a href="">About</a>
              <a href="">Contact us</a>
            </div>

            {/* hamMenu */}
           <button onClick={toogle} className="block sm:hidden"> {!isOPen ? <Menu/> : <X/>  } </button>
        </div>

          {/* Mobile buttons */}
            <div className={`${isOPen ? "block" : "hidden"} absolute w-full sm:hidden bg-gray-100  flex flex-col space-y-6 items-center text-2xl overflow-hidden`}>
              <a href="">Home</a>
              <a href="">service</a>
              <a href="">About</a>
              <a href="">Contact us</a>
            </div>
      </nav>
  );
};

export default Navbar;
