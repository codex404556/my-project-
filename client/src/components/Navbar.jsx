import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 text-gray-700 backdrop-blur-lg py-3 md-py-4"
            : "py-3 md:py-4 bg-gradient-to-b from-slate-800 to-white-200/800]"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            alt="logo"
            className={`h-9 ${isScrolled && "invert opacity-80"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
              
            </a>
          ))}
          <button
            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } transition-all`}
          >
            Dashpord
          </button>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <img
            src={assets.searchIcon}
            alt="search"
            className={`${
              isScrolled && "invert"
            } h-7 transition-all duration-500`}
          />
          <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <img
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src={assets.menuIcon}
            alt="menu-icon"
            className={`${isScrolled && "invert"} h-5`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-9 right-9"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
          </button>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
            Dashpord
          </button>

          <button className="bg-balck hover:bg-primary-300 text-white px-8 py-2.5 rounded-full transition-all duration-500">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
