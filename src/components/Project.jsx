import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore";
import db from "../firebaseConfig/index"
const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    title: "",
    technology: "",
    description: ""
  });
  const to = useNavigate();
  useEffect(() => {
    const colRef = doc(db, "Projects", id);
    const data = getDoc(colRef);
    data.then((ret) => {

      setProject(ret.data());

    });
  })
  return (
    <div className='w-full h-screen bg-[#0a192f]'>

      <button className='float-left btn btn-danger m-4 ' onClick={() => to(-1)}>Back</button>
      <div className="project-page  container">


        <div className="project-title text-5xl font-bold text-gray-300 pt-5">
          <h1>
            {project.title}
          </h1>
        </div>

        <div className="project-technology text-gray-300 py-4" >
          <h1 className=' project-technology text-4xl  text-gray-300 '>Technology : {project.technology} </h1>
        </div>

        <div className="project-description text-4xl  inline text-gray-300  " >
          {project.description}
        </div>

      </div>

    </div>
  );
};

export default Project;
