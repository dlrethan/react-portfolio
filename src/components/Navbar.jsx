import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/panda-7-logo-png-transparent.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#97A275] text-[#FFD5BA]">
      <div>
        <img src={Logo} alt="Panda Logo" style={{ width: "50px" }}></img>
      </div>

      <ul className=" hidden md:flex text-2xl ">
        <li>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} offset={-100} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="Work" smooth={true} duration={500}>
            Recent Projects
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500}>
            Contact Me!
          </Link>
        </li>
      </ul>

      {/* Hamburg */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#97A275] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="Skills"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="Work"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Recent Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
            Contact Me!
          </Link>
        </li>
      </ul>

      {/* social */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0072b1]">
            <a
              className="flex justify-between items-center w-full text-xl text-[#FFD5BA] "
              href="https://www.linkedin.com/in/ethan-de-la-rosa-65422024b/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-xl text-[#FFD5BA] "
              href="https://github.com/dlrethan"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#32201C]">
            <a
              className="flex justify-between items-center w-full text-xl text-[#FFD5BA] "
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#1B191A]">
            <a
              className="flex justify-between items-center w-full text-xl text-[#FFD5BA] "
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
