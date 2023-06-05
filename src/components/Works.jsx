import ProjectCard from './ProjectCard';
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import db from "../firebaseConfig/index"

const Works = (props) => {
  const [projects,setProjects] = useState([]);
  useEffect(()=>{
    const colRef = collection(db, "Projects");
    const data = getDocs(colRef);
    data.then((ret)=>{ret.forEach(doc => {
      setProjects(old => [...old,doc]);
    })
  })
  },[])
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
              projects.map((project) => <ProjectCard id={project.id} project = {project.data()} />)
            }
          </div> 
        </div>
      </div>
  );
};
export default Works;