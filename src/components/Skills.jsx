import React, { useState } from "react";
import Css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Html from "../assets/html.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="Skills " className="bg-[#97A275] text-[#FFD5BA]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  ">
        <div>
          <p className="text-4xl  font-bold  border-b-4 inline border-[#F2711B]">
            Experience / Skills
          </p>
          <p className="py-4 text-xl font-bold ">
            // I love working with these technologies!
          </p>
        </div>
        {/* container for icons */}
        <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-4 text-center font-bold text-lg py-14 ">
          <div className=" my-10 hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript Logo"
            />
            <p className="text-xl py-4">JavaScript</p>
          </div>
          <div className="my-10 hover:scale-105 duration-300">
            <img className="w-20 mx-auto " src={ReactLogo} alt="React Logo" />
            <p className="text-xl py-4">React </p>
          </div>
          <div className="my-10 hover:scale-105 duration-300">
            <img className="w-20 mx-auto" src={Css} alt="CSS Logo" />
            <p className="text-xl py-4">CSS</p>
          </div>
          <div className="  my-10 hover:scale-105 duration-300">
            <img className="w-20 mx-auto" src={Html} alt="HTML Logo" />
            <p className="text-xl py-4">HTML</p>
          </div>
          <div className=" my-10 hover:scale-105 duration-300">
            <img className="w-20 mx-auto" src={Github} alt="GITHUB Logo" />
            <p className="text-xl py-4">Github & Quality Control</p>
          </div>
          <div className=" my-10 hover:scale-105 duration-300">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Logo" />
            <p className="text-xl py-4">Tailwind and other CSS Frameworks!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
