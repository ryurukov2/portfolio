import { VscGithub } from "react-icons/vsc";

const ProjectCard = ({
  title,
  technologies,
  icons,
  summary,
  liveLink,
  repoLink,
  demo,
  BiLogoReact,
}) => {
  let el = []
  console.log(technologies)
  console.log(icons)
  for(let tech in technologies) {
    console.log(tech)
    
  }
  return (
    <div className="flex max-w-md flex-wrap text-center justify-items-center bg-gray-600 text-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img
        src="src/assets/projectTracker.png"
        alt="img"
        className="max-h-48 object-contain"
      />

      <div className="grow p-4">
        <button className="bg-green-700 px-4 py-2 rounded-md">
          <a href={liveLink} className="text-blue-300">
            View the website live
          </a>
        </button>
      </div>
      <div className="flex w-full items-center justify-items-center space-x-4">
        <div className="grow justify-items-center">
          <button className="flex m-auto flex-row gap-2 flex-wrap justify-items-center justify-center items-center bg-black px-2 py-2 rounded-md">
            <VscGithub className="inline" />
            Frontend code
          </button>
          <div className="flex flex-row flex-wrap justify-evenly">
            {/* <BiLogoReact /> */}
          {icons?.map((Icon, idx) => (
            <Icon key={idx} className=""/>
          ))}
          </div>
        </div>
        <div className="grow">
          <button className="flex flex-row gap-2 flex-wrap justify-items-center justify-center items-center bg-black px-2 py-2 rounded-md">
            <VscGithub className="inline" />
            Backend code
          </button>
          <div className="">
            <BiLogoReact />
          </div>
        </div>
      </div>
      <div className="whitespace-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        veritatis eius, culpa non commodi quisquam illo fugit praesentium
        ratione omnis beatae ut doloremque amet harum numquam aut natus
        consectetur saepe.
      </div>
    </div>
  );
};

export default ProjectCard;
