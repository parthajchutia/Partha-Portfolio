import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll"; // Use react-scroll for smooth scrolling
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-grey-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className="text-3xl font-bold text-pjc m-4">Partha Jyoti Chutia</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex">
        <Link to="/" className="p-5 text-xl text-white">Home</Link>
        
        
          <ScrollLink to="experience" smooth={true} duration={500} className="p-5  text-xl text-white cursor-pointer">
            Experience
          </ScrollLink>
        
        <Link to="/ProjectCard" className="p-5 text-xl text-white">Projects</Link>  
        <Link to="/about" className="p-5 text-xl text-white">About</Link>
        <li className="p-5 text-xl text-white">Contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="block text-white md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className="text-3xl text-pjc font-bold m-4">Partha Jyoti Chutia</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2 text-white">
            <Link to="/" onClick={() => setNav(false)}>
              Home
            </Link>
          </li>
          <li className="p-2 text-white">
            <ScrollLink to="experience" smooth={true} duration={500} onClick={() => setNav(false)}>
              Experience
            </ScrollLink>
          </li>
          <li className="p-2 text-white">
            <Link to="/ProjectCard" onClick={() => setNav(false)}>
              Projects
            </Link>
          </li>
          <li className="p-2 text-white">
            <Link to="/about" onClick={() => setNav(false)}>
              About
            </Link>
          </li>
          <li className="p-2 text-white">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
