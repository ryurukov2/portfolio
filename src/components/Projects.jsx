import { Modal } from "./Modal";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
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

  const projects = [
    {
      title: "Project Tracker",
      summary:
        "A website where users can add projects and tasks with various importance and track their progress. It supports CRUD operations and uses token authentication. ",
      technologies: ["React", "Tailwind"],
      icons: [BiLogoReact, BiLogoTailwindCss],
      githubLinks: [
        "https://github.com/ryurukov2/learningReact-REST",
        "https://github.com/ryurukov2/React-REST-backend",
      ],
      liveLink: "https://project-1.example.com",
      demo: "demo1.mp4",
    },
    {
      title: "Project 2",
      summary: "This is project 2",
      technologies: ["React", "Tailwind"],
      githubLinks: [
        "https://github.com/project-1",
        "https://github.com/ryurukov2/React-REST-backend",
      ],
      liveLink: "https://project-1.example.com",
    },
    {
      title: "Project 3",
      summary: "This is project 3",
      technologies: ["React", "Tailwind"],
      githubLinks: [
        "https://github.com/project-1",
        "https://github.com/ryurukov2/React-REST-backend",
      ],
      liveLink: "https://project-1.example.com",
    },
    {
      title: "Project Tracker 2",
      summary: "ananas",
      technologies: ["React", "Tailwind"],
      icons: [BiLogoReact, BiLogoTailwindCss],
      githubLinks: [
        "https://github.com/project-1",
        "https://github.com/ryurukov2/React-REST-backend",
      ],
      liveLink: "https://project-1.example.com",
      demo: "demo1.mp4",
    },
  ];
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
      click {isClickedOn ? "true" : "false"} / transition{" "}
      {isInTransition ? "true" : "false"} / hover{" "}
      {isHoveredCard ? "true" : "false"} /{boxRef.current?.offsetLeft}
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
