import { useState } from "react";
import TemporaryDrawer from "./Drawer";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const scrollToProductInfo = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="p-2 text-black sticky z-50 bg-white top-0 border-b-2 transition-all duration-300 sm:px-24 lg:px-32">
            <div className="flex justify-between items-center">
                {/* Left Section: Logo or Drawer */}
                <div className="flex items-center">
                    <div className="xl:hidden sm:mr-2">
                        <TemporaryDrawer />
                    </div>
                    <div>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold font-dm-sans">
                            diploy
                        </p>
                    </div>
                </div>

                {/* Right Section: Menu Items */}
                <div className=" flex items-center space-x-2 text-sm font-semibold font-dm-sans cursor-pointer">
                    <button
                        type="button"
                        className="hidden lg:items-center lg:flex lg:px-3 lg:py-2 lg:text-md lg:font-semibold lg:text-center lg:text-black lg:rounded-full lg:hover:bg-gray-200"
                    >
                        <HeadsetMicIcon />
                        Contact us
                    </button>

                    <div className="relative z-50">
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className="hidden md:items-center md:flex md:px-2 md:py-2 md:text-md md:font-semibold md:text-center md:text-black md:rounded-full md:hover:bg-gray-200"
                        >
                            <LanguageIcon />
                            <span className="ml-2">EN/INR</span>
                            <ExpandMoreIcon className={`ml-2 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 z-40 mt-2 w-auto bg-white border border-gray-200 rounded-md shadow-lg">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-slate-200" />
                                <ul className="py-1 text-sm">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Language - EN</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Currency - INR</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        className="hidden md:items-center md:flex md:px-1 md:py-2 md:text-md md:font-semibold md:text-center md:text-black md:rounded-full md:hover:bg-gray-200"
                    >
                        <ShoppingCartIcon />
                        Cart
                    </button>

                    <button
                        type="button"
                        className="hidden lg:items-center lg:flex lg:px-3 lg:py-2 lg:text-md lg:font-semibold lg:text-center lg:text-black lg:rounded-full lg:hover:bg-gray-200"
                    >
                        <PersonIcon />
                        Sign in
                    </button>

                    <button
                        type="button"
                        className="items-center flex px-3 py-2 text-md font-semibold text-center text-white rounded-full bg-black hover:text-gray-400"
                    >
                        Sign up for free
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isDropdownOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" />
            )}
        </div>
    );
};
