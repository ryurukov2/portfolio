import { GhButton } from "./GhButton";
import { useEffect, useRef, useState } from "react";
import { VscGithub } from "react-icons/vsc";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoDjango,
  BiLogoJavascript,
  BiLogoHtml5,
} from "react-icons/bi";
const iconMap = {
  BiLogoReact: BiLogoReact,
  BiLogoTailwindCss: BiLogoTailwindCss,
  BiLogoDjango: BiLogoDjango,
  BiLogoJavascript: BiLogoJavascript,
  BiLogoCss3: BiLogoCss3,
  BiLogoHtml5: BiLogoHtml5,
};

function GhButtonsLayout({
  technologies,
  icons,
  githubLinks,
  handleMouseLeaveCard,
}) {
  return (
    <div className="flex w-full items-center justify-items-center space-x-4">
      {technologies.length === 1 ? (
        <div className="grow justify-items-center">
          <GhButton
            handleMouseLeaveCard={handleMouseLeaveCard}
            text={"Code repository"}
            target={githubLinks[0]}
          />
          <div className="flex flex-row flex-wrap justify-evenly">
            {icons[0]?.map((Icon, idx) => {
              const Ic = iconMap[Icon];
              return <Ic key={idx} />;
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="grow justify-items-center">
            <GhButton
              handleMouseLeaveCard={handleMouseLeaveCard}
              text={"Frontend Code"}
              target={githubLinks[0]}
            />
            <div className="flex flex-row flex-wrap justify-evenly">
              {icons[0]?.map((Icon, idx) => {
                const Ic = iconMap[Icon];
                return <Ic key={idx} />;
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
              {icons[1]?.map((Icon, idx) => {
                const Ic = iconMap[Icon];
                return <Ic key={idx} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
const ProjectCard = ({
  title,
  summary,
  technologies,
  icons,
  githubLinks,
  liveLink,
  images,
  demo,
  setIsClickedOn,
  handleMouseEnterCard,
  handleMouseLeaveCard,
  BiLogoReact,
  index,
  projectImg
}) => {
  return (
    <div
      className="flex max-w-md h-full relative flex-wrap text-center bg-gray-600 text-white p-6 rounded-lg hover:shadow-lg duration-300 ease-in-out transition-all delay-100 border-gray-600 border-4 hover:border-gray-400"
      // hover:max-w-full hover:h-full
    >
      <h1 className="whitespace-normal m-auto">{title}</h1>
      <img
        src={projectImg}
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
            View the project live
          </a>
        </button>
      </div>
      <GhButtonsLayout
        technologies={technologies}
        icons={icons}
        githubLinks={githubLinks}
        handleMouseLeaveCard={handleMouseLeaveCard}
        key={index}
      />
      <div className="whitespace-normal m-auto">{summary}</div>
    </div>
  );
};

export default ProjectCard;
