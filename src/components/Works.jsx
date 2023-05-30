import React from 'react';
import ProjectCard from './ProjectCard';



const Works = () => {
    const Project ={
        "title":"STL",
        "technology":"C++",
        "description":"this project is reseach and development built in"
    }
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

       {
        <ProjectCard  project = {Project} />
       }
          
        </div>
      </div>
  );
};
export default Works;