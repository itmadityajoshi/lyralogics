import React from "react";
import Cards from "./Cards";
import imgData from "../assets/ImgData";

const Services = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-2xl text-orange-400">Future Ready Services</h1>
          <div className="flex justify-between">
            <h2 className="text-2xl">
              Empowring enterprises with innovative digital solutins
            </h2>
            <button>left</button>
            <button>Right</button>
          </div>

          {/* cards  */}
          <div>
            {/* {imgData.map((card, idx) => {
              return <Cards key={idx} image={card.image} />;
            })} */}
          <Cards />

          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
