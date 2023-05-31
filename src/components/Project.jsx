import { useNavigate , useParams} from "react-router-dom"

const Project = () => {
    const { id } = useParams()
    const to = useNavigate();
    
  return (
    <div className="project-page">
      <button onClick={() => to(-1)} >Back</button>
      <div className="project-title">
      <h1>{id}</h1>
        {/* Project title content */}
      </div>
      <div className="project-description">
        {/* Project description content */}
      </div>
      <div className="project-technology">
        {/* Project technology content */}
      </div>
      <div className="project-snippets">
        {/* Project snippet images */}
      </div>
    </div>
  );
};

export default Project;
