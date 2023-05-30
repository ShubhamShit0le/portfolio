import React from "react";
import code from "../assets/code2.png";

const ProjectCard = (props) => {
  const { title, technology, description } = props.project;

  return (
    <div
      style={{ backgroundImage: `url(${code})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
        <span className=" text-lg font-bold text-white tracking-wider">
          {title}
        </span>
        <p className="text-center">
          A {title} {description} {technology}
        </p>
        <div className="pt-8 text-center">
          <a href="/">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              View
            </button>
          </a>
          <a href="/">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
