import { useEffect, useState } from "react";
import TemporaryDrawer from "./Drawer";

export const Navbar = () => {
  
  const scrollToProductInfo = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className={`p-2 text-black sticky z-50 bg-white top-0 transition-all duration-300 px-32`}>
    <div className={`flex justify-between }`}>
      <div>
        <p className="text-3xl font-bold  font-dm-sans ">
        
          diploy
        </p>
      </div>
      <div className={`hidden md:items-center md:space-x-2 md:text-sm  md:flex md:font-semibold md:font-dm-sans cursor-pointer`}>
        <button type="button" className="items-center flex px-3 py-2 text-md font-semibold text-center text-black rounded-full hover:bg-gray-200">
          <svg class="w-6 h-6 text-blacks mt-0.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clipRule="evenodd" />
          </svg>
          Contact us
        </button>
        <button type="button" className="lg:items-center lg:flex lg:px-3 lg:py-2 lg:text-md lg:font-semibold lg:text-center lg:text-black lg:rounded-full lg:hover:bg-gray-200">
          Blogs
        </button>
        <button type="button" className="items-center flex px-3 py-2 text-md font-semibold text-center text-black rounded-full hover:bg-gray-200">
          <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
          </svg>

          Sign in
        </button>
        <button type="button" className="items-center flex px-3 py-2 text-md font-semibold text-center text-white rounded-full bg-black hover:text-gray-400">
          Sign up for free
        </button>


      </div>
      <div className="md:hidden ">
        <TemporaryDrawer />
      </div>
    </div>
  </div>
}