import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] text-black py-100px px-0 md:px-10 lg:px-0"
    >
      Home
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#FF5858]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Saurabh Singh Negi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Tech enthusiast who loves to create user friendly products and explore
          new technologies
        </p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex gap-3 items-center hover:bg-[#FF5858] hover:border-[#FF5858]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
