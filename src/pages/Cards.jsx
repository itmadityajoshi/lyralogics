import React from "react";

const Cards = () => {
  return (
    <>
      <div className=" mx-auto grid grid-cols-4 gap-6  m-6  ">
        {/* card */}
        <div className="group relative overflow-hidden rounded-xl cursor-pointer">
          <div className="  ">
            <img
              src="https://images.unsplash.com/photo-1761305135198-26750cc0692c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=663"
              alt=""
              className=" group-hover:scale-125 duration-1000 object-cover w-full h-full"
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
