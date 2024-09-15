import React from "react";

export const Event = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start bg-orange-50 py-16 px-10 xl:px-40 2xl:px-80 ">
      {/* Text Section */}
      <div className="w-full mt-3 lg:w-1/2 order-2 md:order-1 space-y-6 mb-8 lg:mb-0 flex flex-col justify-center lg:justify-start text-center lg:text-left">
        <div>
        
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium font-dm-sans text-gray-900">
          Meet GelatoConnect at Printing United
          </h1>
          <p className="text-base md:text-md mt-10 font-light font-dm-sans">
          Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.
          </p>
          <button 
            className="bg-neutral-800 text-white px-3 py-2 mt-5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800"
            aria-label="Get started with our design tools"
          >
           Book a meeting
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 order-1 md:order-2 flex justify-center xl:pt-10 xl:items-center lg:justify-end">
        <img
          src="Event.webp" 
          alt="Business growth products"
          className=" xl:w-11/12  2xl:w-4/5 lg:w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};
