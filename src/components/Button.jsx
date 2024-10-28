import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-poppins font-medium text-[18px] rounded-[10px] outline-none shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ${styles}`}
      aria-label="Get Started"
    >
      Get Started
    </button>
  );
};

export default Button;
