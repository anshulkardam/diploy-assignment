import React, { useState } from 'react';

const Dropdown = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const handleMouseEnter = () => {
        setTimeout(() => {
            setIsOpen(true);
        }, 200);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);

    };
    console.log("isOpen ", isOpen)
    console.log("open is", open)
    return (
        <div className="relative inline-block text-left mx-2">

            <button
                className="text-black py-3 sm:px-1 md:px-2 lg:px-3 xl:px-4 flex  focus:outline-none hover:bg-gray-200 group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {title}
                <svg className="w-4 h-6 text-black ml-1 transition-transform duration-300 transform group-hover:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
            </button>




            {(isOpen || open) && (
                <div
                    className="absolute z-30 p-5 bg-white w-auto shadow-lg ring-1 ring-white ring-opacity-5 whitespace-nowrap "
                    onMouseEnter={() => { setOpen(true) }}
                    onMouseLeave={() => {
                        setIsOpen(false)
                        setOpen(false)
                    }}
                >
                    <div className="absolute left-1/4 transform -translate-x-1/2 -top-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-white" />
                    <div className="">
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
                </div>
            )}
            {/* Overlay */}
            {(isOpen || open) && (
                <div className="fixed inset-0 bg-black opacity-10 z-20"
                  
                />
            )}
        </div>
    );
};

export const Menubar = () => {
    return (
        <div className="hidden sticky z-40 top-14 bg-white xl:block sm:px-2 md:px-3 lg:pl-32 sm:space-x-0 md:space-x-3   sm:border-b sm:font-medium sm:font-poppins sm:text-sm">
            <Dropdown title="Products" options={['BestSellers', 'Consultation App', 'Chat App', 'E-commerce', 'Portfolio', 'Blogging', 'Ed-tech', 'Health & Wellness']} />
            <Dropdown title="Tools and apps" options={['Dashboard', 'Landing Page', 'Analytics', 'E-commerce Integration', 'SEO Tools', 'Responsive Design', 'Social Media Integration', 'Custom Forms', 'User Management']} />
            <Dropdown title="Pricing" options={['Payments and Pricing', 'Subscription Plans', 'Diploy+', 'Diploy+ Gold', 'Platinum', 'Offers']} />
            <Dropdown title="Resources" options={['Success Stories', 'Blogs', 'FAQs', 'Webinars & Workshops', 'Guides & Tutorials']} />
            <Dropdown title="Gallery" options={['Our Portfolio ', 'Product Images', 'Customer Reviews', 'Showcases', 'Design Process', 'Video Gallery']} />
            <Dropdown title="Diploy Connect" options={['Diploy Connect', 'Logistics', 'Workflow', 'Procurement']} />
        </div>
    );
};
