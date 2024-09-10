import React, { useState } from 'react';

export const Support = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-16 right-2">
      <button
        onClick={toggleMenu}
        className="bg-blue-500 flex text-white py-3 px-4 text-lg rounded-full shadow-lg items-center hover:px-7 transform duration-300"
      >
        <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z" />
        </svg>Chat with us
      </button>
      {isOpen && (
        <div className={`absolute bottom-12 right-0 mb-3 bg-blue-500 text-white shadow-lg rounded-md w-64 items-center text-center transform duration-500 ease-in-out ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="absolute right-1/4 transform rotate-180 translate-x-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-blue-500" />
          <ul className="p-2">
            <li className="py-2 px-4 hover:bg-neutral-800 cursor-pointer">Talk to Customer Support</li>
            <li className="py-2 px-4 hover:bg-neutral-800 cursor-pointer">Raise a Ticket</li>
            <li className="py-2 px-4 hover:bg-neutral-800 cursor-pointer">FAQ</li>
          </ul>
        </div>
      )}
    </div>
  );
};
