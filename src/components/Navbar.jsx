import { useState } from "react";

import { ZenomLogo, close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ changeHeader }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleScrollToSection = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      // Get the vertical offset of the target element relative to the document
      const offsetTop = targetElement.offsetTop - 60;

      // Scroll the entire page to the specified offset
      window.scrollTo({ top: offsetTop });
    }
  };
  return (
    <nav className="w-full flex ss:py-5 py-2 justify-between items-center navbar">
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title
                ? changeHeader
                  ? "text-white"
                  : "text-black"
                : "text-slate-700"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.title);
              handleScrollToSection(nav.id);
            }}
          >
            <span>{nav.title}</span>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(!toggle);
                  handleScrollToSection(nav.id);
                }}
              >
                <span>{nav.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
