import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const NestedDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nestedRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nestedRef.current && !nestedRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={nestedRef}>
      <button
        className="w-full text-left px-4 py-3 text-sm text-black bg-white hover:bg-gray-200 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute ml-5 left-full top-0 bg-white shadow-lg ring-1 ring-black ring-opacity-5 w-48">
          {options.map((option, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-3 text-sm text-black bg-white hover:bg-gray-200"
            >
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left mx-2" ref={dropdownRef}>
      <button
        className="text-black py-3 sm:px-1 md:px-2 lg:px-3 xl:px-4 flex items-center focus:outline-none hover:bg-gray-200 group"
        onClick={handleToggle}
      >
        {title}
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black opacity-10 z-20" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-30 p-5 bg-white w-auto shadow-lg ring-1 ring-white ring-opacity-5 whitespace-nowrap">
            <div className="absolute left-1/4 transform -translate-x-1/2 -top-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-white" />
            <div className="">
              {options.map((option, index) => 
                typeof option === 'string' ? (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-3 text-sm text-black bg-white hover:bg-gray-200"
                  >
                    {option}
                  </a>
                ) : (
                  <NestedDropdown key={index} title={option.title} options={option.options} />
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const Menubar = () => {
  return (
    <div className="hidden sticky z-40 top-14 bg-white xl:block sm:px-2 md:px-3 lg:pl-32 sm:space-x-0 md:space-x-3 sm:border-b sm:font-medium sm:font-poppins sm:text-sm">
      <Dropdown 
        title="Products" 
        options={[
          'New Arrival', 
          'Mens Clothing', 
          'Womens Clothing', 
          { title: 'BestSellers', options: ['Tshirt', 'Blue Jeans', 'Checkered Shirt'] },
          'Cards', 
          'Calendars', 
          'Phonecases', 
          'Hats'
        ]} 
      />
      <Dropdown title="Start Selling" options={['Print on demand', 'Setup your business', 'Sell custom products', ' Integrations', 'Shipping and Delivery', 'Partner Services', 'Move your products']} />
      <Dropdown title="Tools and apps" options={['Overview', 'Personalization Studio', 'Autofile sync', 'Design Maker', 'Creation tools', 'Analytics']} />
      <Dropdown title="Pricing" options={['Payment and Pricing', 'Subscription plans', 'Diploy+', 'Platinum', 'Offers']} />
      <Dropdown title="Resources" options={['Resource Center ', 'Academy', 'Customer Reviews', 'Blogs', 'Newsroom', 'Help Center']} />
      <Dropdown title="Pro sellers" options={['Diploy Connect', 'Logistics', 'Workflow', 'Procurement']} />
    </div>
  );
};