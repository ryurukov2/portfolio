import { GhButton } from "./GhButton";
import { useEffect, useRef, useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import projectTrackerImage from '../images/projectTracker.png';
const iconMap = {
  BiLogoReact: <BiLogoReact />,
  BiLogoTailwindCss: <BiLogoTailwindCss />
};
const ProjectCard = ({
  title,
  summary,
  technologies,
  icons,
  githubLinks,
  liveLink,
  demo,
  setIsClickedOn,
  handleMouseEnterCard,
  handleMouseLeaveCard,
  BiLogoReact,
}) => {
  return (
    <div
      className="flex max-w-md h-full relative flex-wrap text-center bg-gray-600 text-white p-6 rounded-lg hover:shadow-lg duration-300 ease-in-out transition-all delay-100"
      // hover:max-w-full hover:h-full
    >
      <h1 className="whitespace-normal m-auto">{title}</h1>
      <img
        src={projectTrackerImage}
        alt="img"
        className="max-h-48 object-contain m-auto"
      />
      <div className="grow p-4">
        <button
          className="bg-green-700 px-4 py-2 rounded-md"
          onMouseOver={(e) => {
            e.stopPropagation();
          }}
        >
          <a href={liveLink} className="text-blue-300">
            View the website live
          </a>
        </button>
      </div>
      <div className="flex w-full items-center justify-items-center space-x-4">
        <div className="grow justify-items-center">
          <GhButton
            handleMouseLeaveCard={handleMouseLeaveCard}
            text={"Frontend Code"}
            target={githubLinks[0]}
          />
          <div className="flex flex-row flex-wrap justify-evenly">
            {icons?.map((Icon, idx) => {
              const Ic = iconMap[Icon];
              return Ic
})}
          </div>
        </div>
        <div className="grow">
          <GhButton
            handleMouseLeaveCard={handleMouseLeaveCard}
            text={"Backend Code"}
            target={githubLinks[1]}
          />
          <div className="flex flex-row flex-wrap justify-evenly">
            <BiLogoReact />
          </div>
        </div>
      </div>
      <div className="whitespace-normal m-auto">
        {summary}
      </div>
    </div>
  );
};

export default ProjectCard;
