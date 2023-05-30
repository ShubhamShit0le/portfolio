import React from 'react';
import ProjectCard from './ProjectCard';



const Works = () => {
    const Projects =
    [
      {
        "id":"1",
        "title":"STL in C++",
        "technology":"C++",
      },
      {
        "id":"2",
        "title":"CVFS",
        "technology":"C",
      }
    ]
    /*
    Projects = select id,title,technology from projects;
    */
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
              Projects.map((project) => <ProjectCard key = {project.id} project = {project} />)
            }
          </div> 
        </div>
      </div>
  );
};
export default Works;