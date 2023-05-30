<<<<<<< HEAD
import React from "react";

import { NavLink } from "react-router-dom";

=======
import { useNavigate } from "react-router-dom";
>>>>>>> b33cefdf3c316f597ad4fad834a599f68e066b17
const ProjectCard = (props) => {
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
          {id} {technology}
        </p>
        
        <div className="pt-8 text-center">
<<<<<<< HEAD
           <NavLink to ="/project">

           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >
              View
            </button>
            
           </NavLink>
          
        
          <a href="/">
=======
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" onClick={()=>to(`/project/${id}`)}>
              View
            </button>
>>>>>>> b33cefdf3c316f597ad4fad834a599f68e066b17
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
