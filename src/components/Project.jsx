import { useEffect, useState } from 'react'
import { useNavigate , useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore";
import db from "../firebaseConfig/index"

const Project = () => {
    const { id } = useParams();
    const [project,setProject] = useState({
      title:"",
      technology:"",
      description:""
    });
    const to = useNavigate();
    useEffect(()=>{
      const colRef = doc(db, "Projects",id);
      const data = getDoc(colRef);
      data.then((ret)=>{
        // project = Object.assign({}, ret.data());
        setProject(ret.data());
        // project.title = ret.data().title;
        // project.description = ret.data().description;
        // project.technology = ret.data().technology;
      });
    },[])
  return (
    <div className="project-page">
      <button onClick={() => to(-1)} >Back</button>
      <div className="project-title">
      <h1>{id}</h1>
        {project.title}
      </div>
      <div className="project-description">
        {project.description}
      </div>
      <div className="project-technology">
        {project.technology}
      </div>
      <div className="project-snippets">
        {/* Project snippet images */}
      </div>
    </div>
  );
};

export default Project;
