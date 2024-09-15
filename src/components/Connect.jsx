import React from "react";

export const Connect = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-10 px-5 xl:px-32 2xl:px-80 ">
        
      {/* Image Section */}
      <div className="w-full flex justify-center">
        <img
          src="connect.gif" 
          alt="Business growth products"
          className=" xl:w-[90vh] 2xl:w-[70vh] h-auto "
        />
      </div> 

      {/* Text Section */}
      <div className="w-full lg:w-3/4 space-y-6 mb-8 lg:mb-0 flex flex-col justify-center lg:text-left ">
        <div>
          <p className="text-xl font-normal font-sans mb-3 ">For print producers</p>
          <h1 className="text-3xl md:text-6xl font-semibold font-dm-sans text-gray-900">
            DiployConnect
          </h1>
          <p className="text-base md:text-2xl font-dm-sans font-medium mt-6">
            Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry
          </p>
          <button className="bg-neutral-900 mt-5 text-white px-3 py-2 rounded-full text-base md:text-sm font-medium hover:bg-gray-800">
            Learn more
          </button>
        </div>
      </div>

    </div>
  );
};
