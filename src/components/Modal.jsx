import OutsideAlerter from "../functions/OutsideAlerter";
import { GhButton } from "./GhButton";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoDjango,
  BiLogoJavascript,
  BiLogoHtml5,
} from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
const iconMap = {
  BiLogoReact: BiLogoReact,
  BiLogoTailwindCss: BiLogoTailwindCss,
  BiLogoDjango: BiLogoDjango,
  BiLogoJavascript: BiLogoJavascript,
  BiLogoCss3: BiLogoCss3,
  BiLogoHtml5: BiLogoHtml5,
  SiSqlite: SiSqlite,
};
export function Modal({
  isClickedOn,
  handleCloseModalClick,
  handleTransitionEnd,
  modalStyles,
}) {
  return (
    <div
      className={`absolute ${
        isClickedOn ? `opacity-100` : `opacity-0`
      } bg-gray-600 rounded-lg transition-[transform,height,width,opacity] delay-200 duration-500`}
      style={modalStyles}
    >
      {isClickedOn && (
        <OutsideAlerter
          handleCloseModalClick={handleCloseModalClick}
          isClickedOn
        >
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onTransitionEnd={() => handleTransitionEnd()}>
      <div className="bg-gray-600 text-white p-6 rounded-lg max-w-3xl w-full relative">
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={handleCloseModalClick}
        >
          &times;
        </button>
        <h1 className="text-3xl font-bold mb-6 text-center">{isClickedOn.title}</h1>
        <img
          src={isClickedOn.images}
          alt="Project"
          className="w-full h-auto object-contain mb-6"
        />
        <div className="mb-6">
          <p className="text-lg">{isClickedOn.extendedSummary}</p>
        </div>
        {isClickedOn.exampleData && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Example Data</h2>
            <p className="text-lg">{isClickedOn.exampleData}</p>
          </div>
        )}
        {isClickedOn.hostedOn && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Hosted On</h2>
            <p className="text-lg">{isClickedOn.hostedOn}</p>
          </div>
        )}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap">
            {isClickedOn.technologies[0].map((tech, index) => (
              <span
                key={index}
                className="bg-gray-800 text-white px-3 py-1 rounded-full mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <a
            href={isClickedOn.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 px-6 py-3 rounded-md text-blue-300 hover:bg-green-800 transition duration-300 ease-in-out"
          >
            View the Project Live
          </a>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">GitHub Links</h2>
          <ul>
            {isClickedOn.githubLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline hover:text-blue-400 transition duration-300 ease-in-out"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <GhButtonsLayout
          technologies={technologies}
          icons={icons}
          githubLinks={githubLinks}
          key={isClickedOn.id}
        /> */}
      </div>
    </div>
        </OutsideAlerter>
      )}
    </div>
  );
}
