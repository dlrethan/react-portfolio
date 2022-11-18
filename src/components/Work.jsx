import React from "react";
import FightingGame from "../assets/fightingGame.png";
import PassGen from "../assets/passwordGen.png";
import Quiz from "../assets/quiz.png";
import CheapGame from "../assets/cheapGameFinder.png";

const Work = () => {
  return (
    <div
      name="Work"
      className=" w-full md:h-screen bg-[#97A275] text-[#FFD5BA] "
    >
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#F2711B]">
            Work
          </p>
          <p className="py-8 text-xl font-bold">// Check out my Projects!</p>
        </div>
        {/* card cOntainer */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div
            style={{ backgroundImage: `url(${FightingGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#F2711B] tracking-wide">
                Html Canvas, JavaScript, CSS
              </span>
              <div>
                <a href="https://pandas-fighting-game.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#F2711B]  font-bold text-2xl">
                    Live App
                  </button>
                </a>
                <a href="https://github.com/dlrethan/fighting-game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#F2711B] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PassGen})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#F2711B] tracking-wide">
                HTML, JavaScript, CSS
              </span>
              <div>
                <a href="https://dlrethan.github.io/Password-Generator/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#F2711B]  font-bold text-2xl">
                    Live App
                  </button>
                </a>
                <a href="https://github.com/dlrethan/Password-Generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#F2711B] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CheapGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#F2711B] tracking-wide">
                JavaScript, HTML, Tailwind
              </span>
              <div>
                <a href="https://dlrethan.github.io/Project-1/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#F2711B]  font-bold text-2xl">
                    Live App
                  </button>
                </a>
                <a href="https://github.com/dlrethan/Project-1">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#F2711B] font-bold text-2xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
