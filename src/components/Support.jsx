import React, { useState } from 'react';

export const Support = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-16 right-2 z-40">
      <button
        onClick={toggleMenu}
        className="bg-black flex text-white py-3 px-4 text-lg rounded-full shadow-lg items-center hover:px-7 transform duration-300"
      >
        <svg class="w-6 h-6 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clipRule="evenodd" />
        </svg>

        <p className='hidden md:block'>Chat with us</p>
      </button>
      {isOpen && (
        <div className={`absolute bottom-12 right-0 mb-3  text-white shadow-lg rounded-md w-64 transform duration-500 ease-in-out ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="absolute right-1/4 transform rotate-180 translate-x-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-white" />

          <div className="py-4 px-4 hover:bg-neutral-800 bg-black cursor-pointer font-dm-sans flex justify-between items-center">
            <span>How can we help you?</span>
            <span onClick={()=> setIsOpen(false)} className="text-right rounded-full px-2 hover:bg-gray-600">X</span>
          </div>
          <div className="py-3 px-4 gap-4 hover:bg-neutral-200 text-black cursor-pointer flex bg-white">
            <svg class="w-6 h-6  text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            </svg>
            Contact Sales
            </div>
          <div className="py-3 px-4 gap-4 flex hover:bg-neutral-200 text-black cursor-pointer bg-white">
            <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clipRule="evenodd" />
            </svg>
            Customer support
            </div>

        </div>
      )}
    </div>
  );
};
