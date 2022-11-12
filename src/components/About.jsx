import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FF5858]">
              About
            </p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="">
              Hi I'm Saurabh, nice to meet you. Please take a look around.
            </p>
          </div>

          <div>
            Looking for a challenging role in a reputable organization to
            utilize my technical, database, and management skills for the growth
            of the organization as well as to enhance my skills about new and
            emerging trends in the IT sector.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
