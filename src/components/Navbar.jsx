import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div className={`p-2.5 bg-slate-100 text-black sticky z-50 top-0 transition-all duration-300 ${isScrolled ? "rounded-full w-3/5 mx-auto shadow-lg" : "w-full"
    }`}>
    <div className={`flex justify-between mx-52 ${isScrolled ? "mx-8" : ""}`}>
      <div>
        <p className="text-3xl font-medium  font-pacifico">
          Diploy
        </p>
      </div>
      <div className={`items-center space-x-5 text-sm flex font-semibold font-montserrat cursor-pointer ${isScrolled ? " space-x-2" : ""}`}>
        <p className="underline underline-offset-4">Home</p>
        <p className={`hover:underline hover:underline-offset-4 ${isScrolled ? "block" : "hidden"}`}>Products</p>
        <p className={`hover:underline hover:underline-offset-4 ${isScrolled ? "hidden" : "block"}`}>About Us</p>
        <p className={`hover:underline hover:underline-offset-4 ${isScrolled ? "hidden" : "block"}`}>Privacy Policy</p>
        <button type="button" className="items-center flex px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-800">
          Contact us
          <svg className="w-4 h-4 text-white mt-0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
}