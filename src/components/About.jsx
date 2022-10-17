import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#97A275] text-[#FFD5BA]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#F2711B]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right text-3xl font-extrabold px-5">
            <p>
              Hello there, I'm Ethan pleasure to meet you feel free to take a
              look around my website as well as previous projects !
            </p>
          </div>
          <div className="text-xl px-5 font-semibold">
            <p>
              I want to create projects that make the world a better and more
              convenient place. It is a dream of mine to work on features that
              will be used by millions. I love coding because it shows me how
              computers work and the logic behind programming functional
              full-stack web applications has always intrigued me. As I've
              worked on learning these new concepts I've fallen in love with the
              problem solving process. I learned through the bootcamp offered at
              UCR, on top of putting countless hours into practicing my craft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
