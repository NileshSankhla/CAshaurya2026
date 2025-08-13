import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ scrollTo, isMobile }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // to detect active route

  const linksLeft = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Why CA", path: "/whyca" },
  ];
  const linksRight = [
    { name: "Responsibilities", path: "/responsibilities" },
    { name: "Incentives", path: "/incentives" },
    { name: "FAQs", path: "/faqs" },
  ];
  const allLinks = [...linksLeft, ...linksRight];

  // If mobile, we scroll to section, else we use normal Link
  const NavItem = ({ name, path }) => {
    const isActive = location.pathname === path;

    if (isMobile) {
      // Mobile version: scroll on click + close menu
      return (
        <button
          onClick={() => {
            scrollTo(path.replace("/", "") || "home"); // map "/" to "home"
            setMenuOpen(false);
          }}
          className={`relative group font-medium text-lg tracking-wide px-1 transition duration-300 block lg:inline-block ${
            isActive ? "text-yellow-400" : "text-white"
          }`}
        >
          <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-500">
            {name}
          </span>
          <span className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-red-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
        </button>
      );
    }

    // Desktop version: normal router Link
    return (
      <Link
        to={path}
        onClick={() => setMenuOpen(false)}
        className={`relative group font-medium text-lg tracking-wide px-1 transition duration-300 block lg:inline-block ${
          isActive ? "text-yellow-400" : "text-white"
        }`}
      >
        <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-500">
          {name}
        </span>
        <span className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-red-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
      </Link>
    );
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <nav className="bg-black/80 sm:bg-black/40 text-white w-full px-6 sm:px-10 lg:px-20 h-20 flex items-center relative flex-col lg:flex-row">
          {/* Mobile Navbar: Logo left + Hamburger right */}
          <div className="flex lg:hidden w-full items-center justify-between px-6 h-20 z-50 relative">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src="/logos/Shaurya_Logo.png" alt="Logo" className="w-14 h-auto" />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="w-8 h-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Sliding Menu (Right to Left) with blur */}
          <div
            className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 backdrop-blur-md bg-black flex flex-col items-center space-y-6 py-6 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {allLinks.map(({ name, path }, idx) => (
              <NavItem key={idx} name={name} path={path} />
            ))}
          </div>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex w-full items-center justify-between relative text-[18px]">
            {/* Left tabs */}
            <div className="flex space-x-8 xl:space-x-20 flex-shrink min-w-0 max-w-[40%] truncate">
              {linksLeft.map(({ name, path }, idx) => (
                <NavItem key={idx} name={name} path={path} />
              ))}
            </div>

            {/* Center logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src="/logos/Shaurya_Logo.png" alt="Logo" className="w-14 h-auto" />
              </Link>
            </div>

            {/* Right tabs */}
            <div className="flex space-x-8 xl:space-x-20 flex-shrink min-w-0 max-w-[40%] truncate justify-end">
              {linksRight.map(({ name, path }, idx) => (
                <NavItem key={idx} name={name} path={path} />
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to push content below fixed nav */}
      <div className="h-20 w-full" />
    </>
  );
};

export default Navbar;
