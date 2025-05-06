import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";


export const Card = ({pic,topic,pera,year,liveDemo, gitHub}:{
    pic:string,
    topic:string,
    pera:string,
    year:string,
    liveDemo ?:string,
    gitHub:string
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full  items-center justify-center text-center my-10">
            {/* Image Section */}
            <div className="flex rounded-3xl bg-neutral-800  h-full w-full items-center justify-center">
                <img 
                src={pic}
                alt="photo"
                className=" object-cover w-[70%]  rounded-2xl" />
            </div>
      
            {/* Content Section */}
            <div className="py-17 h-full w-full px-5 flex flex-col items-start justify-center">
            <p className="text-4xl font-semibold pt-15 u">
                {topic}
            </p>
            <p className="text-l font-thin pt-2 justify-text">
                {pera}
            </p>
            <div className="py-4 text-xl font-medium">
                Project year: {year}
            </div>
            <div className="flex space-x-6 pt-2">
                {/* Live Demo Link */}
                {liveDemo && (
                    <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-[#D3E97A] border-b b-[#D3E97A]"
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
                className="flex items-center space-x-1 border-b b-[#D3E97A]"
                style={{ color: "#D3E97A" }}
                >
                <span>See on GitHub</span>
                <FaGithub className="text-xl" />
                </a>
            </div>
        </div>
      </div>
      
    )
}