import React from "react";

const Cards = () => {
  return (
    <>
   

   
      <div className=" mx-auto grid grid-cols-4 gap-6  m-6  ">
        {/* card */}
        <div className="group relative overflow-hidden rounded-xl cursor-pointer">
          <div className="  ">
            <img
              src="https://images.prismic.io//intuzwebsite/98aa86da-c129-4fe0-b3fb-18adab450fde_Main.png?w=1200&q=75&auto=format,compress&fm=png8"
              alt=""
              className=" group-hover:scale-125 duration-1000 object-cover w-full h-100"
            />
          </div>

          {/* visible title */}
          <div className="absolute inset-0 top-120 left-10 group-hover:opacity-0">
            <h1 className=" text-3xl font-bold mb-2">Application Services</h1>
          </div>

          <div className="absolute  inset-0  bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500  flex flex-col  justify-center text-center gap-6 p-6">
            <h1 className=" text-3xl font-bold mb-2">Application Services</h1>
            <p className="text-l ">
              Develop, enhance, opotimize Applicaiton using modern tools and
              technologies
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
