// Import assets and components
import MyImage from "../assets/1000002111.jpg";
import { Card } from "../components/card";
import Medium from "../assets/Medium.png";
import { AboutMe } from "../components/about_me";
import { LetConnect } from "../components/letConnect";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import LH from "../assets/LearningHub.png";

// Home component: Main landing page of the portfolio
export const Home = () => {
  // Ref for scrolling to the connect section
  const connectRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll to "Let's Connect" section
  const scrollToConnect = () => {
    connectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full min-h-[80vh] border-b border-gray-400 items-center justify-between px-10 pt-16">
        {/* Left Section - Text and Buttons */}
        <div className="flex flex-col md:w-1/2 w-full items-start justify-center space-y-4 py-8">
          {/* Greeting & Name */}
          <div className="text-4xl font-black">
            <p>HI, I AM</p>
            <p>AYUSH UPADHYAY.</p>
          </div>

          {/* Short Description */}
          <div className="text-xl font-thin">
            A India based software engineer with a passion for creating
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-4">
            {/* Contact Me Button - Scrolls to Connect section */}
            <button
              className="flex items-center gap-3 bg-[#D4F46C] text-black px-5 py-3 rounded-full font-medium hover:opacity-90 transition"
              onClick={scrollToConnect}
            >
              <span>CONTACT ME</span>
              <div className="bg-black text-white p-2 rounded-full">
                <ArrowUpRight size={16} />
              </div>
            </button>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/ayush-upadyay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1c1c1c] p-3 rounded-full text-[#D3E97A] hover:opacity-80 transition"
            >
              <FiLinkedin size={20} />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Hey-bhagwan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1c1c1c] p-3 rounded-full text-[#D3E97A] hover:opacity-80 transition"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="md:w-1/2 w-full flex justify-center py-4">
          <img
            src={MyImage}
            alt="Ayush Upadhyay"
            className="h-[70vh] object-contain rounded-2xl bg-black"
          />
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="flex flex-col items-start px-8 border-b border-gray-400" id="projects">
        <div>
          <div className="text-4xl font-extrabold pt-15 uppercase">
            Featured Projects
          </div>
          <div className="text-l font-thin pt-2">
            A collection of my projects that I have worked on.
          </div>
        </div>

        {/* Project Cards */}
        <div className="w-full mt-12 px-3">
          {/* Medium Clone Project */}
          <Card
            pic={Medium}
            topic="Medium"
            year="2025"
            pera="The platform offers secure user authentication, a rich-text editor for creating and editing articles, and a responsive design that works seamlessly across all devices. Users can comment on posts, like or bookmark articles, and manage their content through a personalized dashboard. Additional features include search and filtering, fast performance through CDN integration, and a scalable, secure backend for smooth data handling."
            liveDemo="https://medium-snowy-one.vercel.app/"
            gitHub="https://github.com/Hey-bhagwan/Medium"
          />

          {/* Learning Hub Project */}
          <Card
            pic={LH}
            topic="Learning Hub"
            year="2025"
            pera="An online learning platform offering self-paced courses in relevant skills/subjects to enhance expertise."
            gitHub="https://github.com/Hey-bhagwan/LearningHub"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="pt-10 pb-15 border-b border-gray-400">
        <AboutMe />
      </div>

      {/* Let's Connect Section */}
      <div ref={connectRef} id="connect">
        <LetConnect />
      </div>
    </div>
  );
};
