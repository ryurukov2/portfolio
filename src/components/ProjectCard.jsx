import { BiLogoReact } from "react-icons/bi";

const ProjectCard = ({
  title,
  technologies,
  summary,
  hostedLink,
  repoLink,
  demo,
}) => {
  return (
    <div className="flex max-w-md flex-wrap text-center justify-items-center bg-gray-600 text-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img
        src="src/assets/projectTracker.png"
        alt="img"
        className="max-h-48 object-contain"
      />
      <div className="">
        <BiLogoReact />
      </div>
      <div className="whitespace-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        veritatis eius, culpa non commodi quisquam illo fugit praesentium
        ratione omnis beatae ut doloremque amet harum numquam aut natus
        consectetur saepe.
      </div>

      <div className="flex flex-wrap space-x-4">
        <button className="bg-green-700 rounded-md">
        <a href={repoLink} className="text-green-400">
          GitHub
        </a>
        </button>
        <button className="bg-green-700 rounded-md">
          <a href={hostedLink} className="text-blue-300">
            View the website live!
          </a>
        </button>
      </div>
      <div className="flex space-x-4">
        <button>Frontend repository</button>
        <button>Backend repository</button>
      </div>
    </div>
  );
};

export default ProjectCard;
