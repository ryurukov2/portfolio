import ProjectCard from "./ProjectCard";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";



export function Projects() {
  const projects = [
    {
      title: "Project 1",
      summary: "This is project 1",
      technologies: ["React", "Tailwind"],
      icons: [BiLogoReact, BiLogoTailwindCss],
      githubLink: "https://github.com/project-1",
      liveLink: "https://project-1.example.com",
      demo: "demo1.mp4",
    },
    {
      title: "Project 2",
      summary: "This is project 1",
      technologies: ["React", "Tailwind"],
      githubLink: "https://github.com/project-1",
      liveLink: "https://project-1.example.com",
    },
    {
      title: "Project 3",
      summary: "This is project 1",
      technologies: ["React", "Tailwind"],
      githubLink: "https://github.com/project-1",
      liveLink: "https://project-1.example.com",
    },
    {
      title: "Project 1",
      summary: "This is project 1",
      technologies: ["React", "Tailwind"],
      githubLink: "https://github.com/project-1",
      liveLink: "https://project-1.example.com",
    },
  ];
  return (
    // <div className="grid grid-cols-2 px-20 mx-20 gap-20 justify-around">
    <div className="flex flex-row flex-wrap px-20 mx-20 gap-20 justify-around">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} BiLogoReact={BiLogoReact}/>
      ))}
    </div>
  );
}
