import { useEffect, useState } from "react";

const scrollTo = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("projects");

  const handleScroll = () => {
    const sections = ["projects", "about", "contact"];
    let current;
    const offset = window.innerHeight / 3;

    for (const section of sections) {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();

      if (rect.top <= offset && rect.bottom >= offset) {
        current = section;
        break;
      }
    }

    setActiveSection(current || sections[0]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="p-6 fixed top-0 bottom-0 flex items-center justify-center text-lg">
      <div className="flex p-6 flex-col items-center space-y-4 fading-line">
        <ul className="space-y-2 text-contrast">
          <li
            onClick={() => scrollTo("projects")}
            className={`focus:outline-none hover:cursor-pointer ${
              activeSection === "projects" ? "underline" : ""
            }`}
          >
            Projects
          </li>
          <li
            onClick={() => scrollTo("about")}
            className={`focus:outline-none hover:cursor-pointer ${
              activeSection === "about" ? "underline" : ""
            }`}
          >
            About Me
          </li>
          <li
            onClick={() => scrollTo("contact")}
            className={`focus:outline-none hover:cursor-pointer ${
              activeSection === "contact" ? "underline" : ""
            }`}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
