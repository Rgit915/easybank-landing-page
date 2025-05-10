import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const links = ["Home", "About", "Contact", "Blog", "Careers"];
  return (
    <>
      <header className="relative z-50 flex justify-between items-center w-full bg-white shadow p-8">
        <nav className="flex justify-between items-center w-full">
          <img src={logo} alt="Easybank logo" />
          <ul className="hidden md:flex md:justify-around md:items-center w-1/3 gap-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="relative custom-underline after:content-[''] after:absolute after:left-0 after:top-full after:mt-10 after:h-1 after:w-0  hover:after:w-full after:transition-all after:duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button className="request-button hidden md:flex transition ">
            Request Invite
          </button>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer"
              aria-label={showMenu ? "Close menu" : "Open menu"}
            >
              <img
                src={showMenu ? closeIcon : hamburgerMenu}
                alt={showMenu ? "Close menu" : "Open menu"}
              />
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        {showMenu && (
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-[90%] bg-white p-6 rounded-sm shadow-lg z-50 transition-all duration-300 ease-in-out scale-100 md:hidden">
            <ul className="flex flex-col gap-4 items-center">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-dark-blue font-normal text-center text-[18px] tracking-[-0.14px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      {showMenu && (
        <div
          className="fixed inset-0 bg-gradient-to-b from-primary-dark-blue to-[hsla(233,26%,24%,0)] bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ease-in-out opacity-100"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
