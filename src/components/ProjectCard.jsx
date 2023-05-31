import React from "react";

import { useNavigate} from "react-router-dom";
const ProjectCard = (props) => {
  console.warn(props.project);
  const { id, title, technology } = props.project;
  const to = useNavigate();
  
  return (
    <div
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="group-hover:opacity-100 flex justify-center items-center flex-col">
        <span className=" text-lg font-bold text-white tracking-wider">
          {title}
        </span>
        <p className="text-center">
          {technology}
        </p>
        
        <div className="pt-8 text-center">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" onClick={()=>to(`/project/${id}`)}>
              View
            </button>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
