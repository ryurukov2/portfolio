import ProjectCard from "./ProjectCard";

export function Projects({ projects }) {
  return (
    <div className="grid grid-cols-2 px-20 mx-20 gap-20 justify-around">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
