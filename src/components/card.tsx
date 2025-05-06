// Importing icons from react-icons
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Card component to display a project
// Props:
// - pic: image URL of the project
// - topic: project title
// - pera: project description
// - year: year the project was created
// - liveDemo (optional): URL for live demo
// - gitHub: GitHub repo URL
export const Card = ({
  pic,
  topic,
  pera,
  year,
  liveDemo,
  gitHub
}: {
  pic: string;
  topic: string;
  pera: string;
  year: string;
  liveDemo?: string;
  gitHub: string;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full items-center justify-center text-center my-10">
      
      {/* -------- Image Section -------- */}
      <div className="flex rounded-3xl bg-neutral-800 h-full w-full items-center justify-center">
        <img
          src={pic}
          alt="photo"
          className="object-cover w-[70%] rounded-2xl"
        />
      </div>

      {/* -------- Content Section -------- */}
      <div className="py-17 h-full w-full px-5 flex flex-col items-start justify-center">
        {/* Project Title */}
        <p className="text-4xl font-semibold pt-15">{topic}</p>

        {/* Project Description */}
        <p className="text-l font-thin pt-2 justify-text">{pera}</p>

        {/* Project Year */}
        <div className="py-4 text-xl font-medium">Project year: {year}</div>

        {/* Links: Live Demo & GitHub */}
        <div className="flex space-x-6 pt-2">
          {/* Conditionally render Live Demo link if available */}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[#D3E97A] border-b"
              style={{ color: "#D3E97A" }}
            >
              <span>Live Demo</span>
              <FiExternalLink className="text-sm mt-[2px]" />
            </a>
          )}

          {/* GitHub Link */}
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 border-b"
            style={{ color: "#D3E97A" }}
          >
            <span>See on GitHub</span>
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
