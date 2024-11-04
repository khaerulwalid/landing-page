import "remixicon/fonts/remixicon.css";
import Navlink from "../NavLink/Navlink";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const styleCloseAndToggle =
    "text-2xl text-white cursor-pointer transition-colors duration-300";

  return (
    <header className=" fixed w-full top-0 left-0 bg-black-color z-fixed">
      <nav className=" xl:container relative h-header flex justify-between items-center mx-6">
        <a href="#" className="flex items-center gap-1">
          <i className="ri-building-3-line text-first-color text-2xl"></i>
          <span className="text-white font-semibold transition-colors duration-300">
            Construction Wall
          </span>
        </a>

        <div
          className={`fixed top-0 ${
            isOpen ? "right-0 translate-x-0" : "right-0 translate-x-full"
          } bg-black-color w-[80%] h-screen border-l-2 border-black transition-transform duration-500 pt-[4.5rem] px-[3.5rem] pb-0`}
        >
          <ul className="flex flex-col gap-16">
            <li>
              <Navlink href="#home">Home</Navlink>
            </li>
            <li>
              <Navlink href="#aboutus">About Us</Navlink>
            </li>
            <li>
              <Navlink href="#services">Services</Navlink>
            </li>
            <li>
              <Navlink href="#project">Project</Navlink>
            </li>
            <li>
              <Navlink href="#contactus" isButton={true}>
                Contact Us
              </Navlink>
            </li>
          </ul>

          {/* Nav Close */}
          <div
            className={`${styleCloseAndToggle} absolute top-4 right-4`}
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        {/* Toggle Meu */}
        <div className={styleCloseAndToggle} onClick={() => setIsOpen(true)}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
