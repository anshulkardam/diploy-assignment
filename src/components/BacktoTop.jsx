import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={`fixed bottom-2 right-2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ${isScrolled ? "animate-slideUp" : "hidden"}`}
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 15l-7-7-7 7"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
