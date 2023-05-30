const ProjectCard = (props) => {
  const { id, title, technology } = props.project;

  
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
          <a to='/project/${title}'>
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
