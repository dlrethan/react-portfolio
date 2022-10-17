import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#97A275] ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#F2711B] text-2xl font-bold">Hi, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#FFF0D6]">
          Ethan De La Rosa
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#FFD5BA]">
          I'm an aspiring full stack developer.
        </h2>
        <p className=" text-[#FFD5BA] py-3 max-w-[700px] text-2xl">
          I have been interested in computers since I was a little kid. My dream
          was always to work in tech. I love making projects and problem
          solving, my main focus is making functional and responsive full-stack
          web apps.
        </p>
        <div>
          <button className="text-[#FFF0D6] group text-xl border-2 px-5 py-3 my-2 flex items-center hover:bg-[#F2711B] hover:border-[#F2711B] duration-200">
            See What I've Made.
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
