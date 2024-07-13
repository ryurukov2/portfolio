import { Modal } from "./Modal";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectData from '../config/projectsData.json';
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

export function Projects() {
  const boxRef = useRef(null);
  // const [isHovered, setIsHovered] = useState(false);
  const [isClickedOn, setIsClickedOn] = useState(false);
  const [isHoveredCard, setIsHoveredCard] = useState(0);
  const [isInTransition, setIsInTransition] = useState(false);
  const [hoveredElementOffsetX, setHoveredElementOffsetX] = useState(null);
  const [hoveredElementOffsetY, setHoveredElementOffsetY] = useState(null);
  const modalStyles = {
    width: isClickedOn ? "100%" : `0px`,
    height: isClickedOn ? "100%" : `0px`,
    left: `${hoveredElementOffsetX}px`,
    top: `${hoveredElementOffsetY}px`,
    transform: isClickedOn
      ? `translate(-${hoveredElementOffsetX}px, -${hoveredElementOffsetY}px)`
      : "none",
  };
  const iconMap = {
    BiLogoReact: <BiLogoReact />,
    BiLogoTailwindCss: <BiLogoTailwindCss />
  };
  const projects = projectData;
  
  const setModalPosition = () => {
    setHoveredElementOffsetX(boxRef.current.offsetLeft);
    setHoveredElementOffsetY(boxRef.current.offsetTop);
  };
  const handleCardClickEvent = (e, project) => {
    if (!isInTransition) {
      if (!isHoveredCard) {
        handleMouseEnterCard(e);
      }
      setIsClickedOn(project);
      setIsInTransition(true);
    }
  };
  const handleMouseEnterCard = (e) => {
    boxRef.current = e.currentTarget;
    if (!isInTransition) {
      setModalPosition();
    }
    setIsHoveredCard(true);
  };
  const handleMouseLeaveCard = () => {
    setIsHoveredCard(null);
  };
  const handleCloseModalClick = () => {
    setIsClickedOn(false);
    setIsInTransition(true);
  };
  const handleTransitionEnd = () => {
    setIsInTransition(false);
    if (isClickedOn === false) {
      setModalPosition();
    }
  };

  return (
    // <div className="grid grid-cols-2 px-20 mx-20 gap-20 justify-around">
    <div className="w-10/12 inline-block">
      {/* click {isClickedOn ? "true" : "false"} / transition{" "}
      {isInTransition ? "true" : "false"} / hover{" "}
      {isHoveredCard ? "true" : "false"} /{boxRef.current?.offsetLeft} */}

      <h1 className="text-4xl mb-8">Here are some of my projects:</h1>
      <div className="flex relative group flex-row flex-wrap justify-around gap-20 transition-transform 2xl:justify-between">
        {projects.map((project, index) => (
          <div
            className={`relative peer`}
            id={index}
            key={index}
            onMouseOver={(e) => handleMouseEnterCard(e)}
            onClick={(e) => handleCardClickEvent(e, project)}
            onMouseLeave={() => handleMouseLeaveCard()}
          >
            <ProjectCard
              {...project}
              setIsClickedOn={setIsClickedOn}
              handleMouseEnterCard={handleMouseEnterCard}
              handleMouseLeaveCard={handleMouseLeaveCard}
              BiLogoReact={BiLogoReact}
            />
          </div>
        ))}
        {(isHoveredCard || isInTransition || isClickedOn) && (
          <Modal
            isClickedOn={isClickedOn}
            handleCloseModalClick={handleCloseModalClick}
            handleTransitionEnd={handleTransitionEnd}
            modalStyles={modalStyles}
          />
        )}
      </div>
    </div>
  );
}
