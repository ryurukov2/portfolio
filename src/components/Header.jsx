import { FaGithub, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="logo text-2xl font-bold">
        <a href="/">MyPortfolio</a>
      </div>
      <div className="space-x-4">
        <a
          href="https://github.com/ryurukov2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub className="inline w-6 h-6" />
        </a>
        <a href="mailto:youremail@gmail.com" aria-label="Email">
          <FaEnvelope className="inline w-6 h-6" />
        </a>
      </div>
    </header>
  );
};
export default Header;
