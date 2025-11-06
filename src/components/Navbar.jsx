import { useState } from "react";
import { Menu, X } from "lucide-react";
import assets from "../assets/ImgData";

const Navbar = () => {

  const [isOPen, setIsOPen] = useState(false)
    
  const toogle = ()=>{
    setIsOPen(!isOPen)
  }
  return (
      <nav className="bg-sky-950 sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-2xl">
      
        <div className="h-16 flex items-center justify-between mx-auto sm:px-6 lg:px-8">
            {/* logo */}
            <div>
              <img src={assets.logo_dark} alt="compony logo" className="px-6"   />
            </div>

            {/* Desktop Buttons */}
            <div className="hidden sm:block space-x-4  ">
              <a href="">Home</a>
              <a href="">service</a>
              <a href="">About</a>
              <a href="">Contact us</a>
            </div>

            {/* hamMenu */}
           <button onClick={toogle} className="block sm:hidden px-6"> {!isOPen ? <Menu/> : <X/>  } </button>
        </div>

          {/* Mobile buttons */}
            <div className={`${isOPen ? "block" : "hidden"} absolute w-full sm:hidden bg-slate-900  flex flex-col space-y-6 items-center text-2xl overflow-hidden p-8`}>
              <a href="#home" onClick={toogle}>Home</a>
              <a href="">service</a>
              <a href="">About</a>
              <a href="">Contact us</a>
            </div>
      </nav>
  );
};

export default Navbar;
