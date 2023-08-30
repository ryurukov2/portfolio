import { Projects } from "./components/Projects";

import ContactForm from "./components/ContactForm";
import MainLayout from "./components/MainLayout";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";

function App() {
  const projects = [
    {
      title: "Project 1",
      summary: "This is project 1",
      technologies: ["React", "Tailwind"],
      githubLink: "https://github.com/project-1",
      liveLink: "https://project-1.example.com",
      demo: "demo1.mp4",
    },
    {
      title: "Project 1",
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
    {
      title: "Project 1",
      summary: "This is project 1",
      technologies: ["React", "Tailwind"],
      githubLink: "https://github.com/project-1",
      liveLink: "https://project-1.example.com",
    },
  ];
  return (
    <div className="App bg-gray-900 text-white">
      <BrowserRouter>
        <MainLayout>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects projects={projects}/>
          </div>
          <div id="contact">
            <ContactForm />
          </div>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
