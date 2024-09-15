import React from "react";

export const Accel = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-customamber  px-5 lg:px-10 xl:px-40 2xl:px-80 gap-2">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 order-2 md:order-1 space-y-6 mb-8 lg:mb-0 flex flex-col justify-center lg:justify-start ">
        <div className="text-center lg:text-left">
          <p className="text-center lg:text-left text-lg font-medium font-dm-sans">For print on demand sellers</p>
          <h1 className=" text-center lg:text-left text-2xl sm:text-3xl md:text-6xl lg:text-6xl font-semibold text-gray-900">
            Accelerate business growth with innovative design tools and apps
          </h1>
          <p className="text-center lg:text-left text-base md:text-2xl mt-10 font-dm-sans">
            See how our cutting-edge solutions can help you reach new customers
            and maximize your profits.
          </p>
          <button 
            className="bg-black text-white px-3 py-2 mt-5 mb-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800"
            aria-label="Get started with our design tools"
          >
            Get started
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 order-1 md:order-2 flex justify-center lg:justify-end">
        <img
          src="accel.gif" 
          alt="Business growth products"
          className="sm:w-[50vh]  xl:w-[90vh] 2xl:w-[70vh] h-auto "
        />
      </div>
    </div>
  );
};
