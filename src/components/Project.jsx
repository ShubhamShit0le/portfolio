import { useNavigate , useParams} from "react-router-dom"
const Project = (props) => {
    const { id } = useParams()
    const to = useNavigate();
    return (
        <div> 
            <h1>{id}</h1>
            <button onClick={() => to(-1)} >Back</button>
        </div>
    )
}

export default Project
