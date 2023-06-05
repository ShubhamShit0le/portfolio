import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me1 from "../assets/me1.png";
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <>
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          {/* <p className="text-gray-500 text-center max-w-md">
            Front End Development is building out the visual components of a
            website. Using HTML, CSS ,Javascript and ReactJS , I build
            fast, interactive websites.
          </p> */}
          <div className="mx-auto">
            <Link
              to="about"
              smooth
              duration={200}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={me1}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
    </>
  );
};
export default Hero;
