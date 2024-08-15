import React from 'react';

const ScrollToTopButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      href="#top"
      onClick={handleClick}
      className="fixed bottom-5 right-5 bg-cyan-500 text-white rounded-full p-3 shadow-lg transition-transform duration-300 hover:bg-cyan-600 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 15l-7-7-7 7" />
      </svg>
    </a>
  );
};

export default ScrollToTopButton;
