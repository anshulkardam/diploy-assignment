import React, { useState } from 'react';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
export const Support = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-16 z-40">
      <button
        onClick={toggleMenu}
        className="bg-zinc-800 flex text-white py-2 px-4 text-md rounded-full shadow-lg items-center hover:px-7 transform duration-300"
      >
       <HeadsetMicIcon />
        <p className='hidden md:block ml-1 font-dm-sans'>Contact Us</p>
      </button>
      {isOpen && (
        <div className={`absolute bottom-12 right-0 mb-3  text-white shadow-lg rounded-md w-72 transform duration-500 ease-in-out ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="absolute right-1/4 transform rotate-180 translate-x-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-white" />

          <div className="py-3 px-4 bg-neutral-900 font-light cursor-pointer font-dm-sans flex justify-between items-center">
            <span>How can we help you?</span>
            <span onClick={()=> setIsOpen(false)} className="text-right rounded-full px-3 py-1 font-montserrat hover:bg-gray-600">X</span>
          </div>
          <div className="py-4 px-4 gap-8 font-light hover:bg-neutral-200 text-black cursor-pointer flex bg-white">
            <svg class="w-6 h-6  text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            </svg>
            Contact Sales
            </div>
          <div className="py-4 px-4 gap-8 flex font-light hover:bg-neutral-200 text-black cursor-pointer bg-white">
           <HeadsetMicIcon />
            Customer support
            </div>

        </div>
      )}
    </div>
  );
};
