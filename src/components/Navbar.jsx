import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center bg-gray-900 px-4 lg:px-20">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="hidden sm:flex flex-1 justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium text-white text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:text-blue-400 transition-colors duration-300`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          aria-label="Toggle menu"
          className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
          onClick={() => setToggle((prev) => !prev)}
        >
          <img
            src={toggle ? close : menu}
            alt="menu icon"
            className="w-[28px] h-[28px] object-contain transition-transform duration-300 transform hover:scale-110"
          />
        </button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-800 bg-opacity-90 absolute top-20 right-4 mx-4 my-2 min-w-[160px] rounded-xl shadow-lg transform transition-all duration-300 ease-in-out ${
            toggle ? "translate-y-0 opacity-100" : "translate-y-[-20px] opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium text-white text-[16px] mb-4 last:mb-0 ${
                  index === navLinks.length - 1 ? "mr-0" : ""
                } hover:text-blue-400 transition-colors duration-300`}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
