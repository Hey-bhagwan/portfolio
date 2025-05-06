// Importing navigation and icon components
import { useNavigate } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

// AboutMe component
// Props:
// - showContent: whether to show social links and resume download
// - showButton: whether to show the "More about me" navigation button
export const AboutMe = ({ showContent = false, showButton = true }) => {
    const navigate = useNavigate(); // Hook to navigate between routes

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-center items-start mx-auto px-4 sm:px-6 lg:px-12'>
            {/* Section Heading */}
            <div className='text-4xl font-extrabold pt-15 uppercase mb-5'>
                ABOUT ME
            </div>

            {/* Description and Buttons Column */}
            <div className='pt-2 flex flex-col items-start justify-text'>
                {/* Main Intro Paragraph */}
                <p className='text-2xl font-bold mb-2'>
                    I'm a passionate B.Tech CSE 3rd-year student with strong expertise in full-stack development, 
                    including the MERN stack (MongoDB, Express.js, React, Node.js) and modern frameworks like Next.js.
                    I also have experience with relational databases, working with PostgreSQL 
                    and Prisma ORM for efficient data management.
                </p>

                {/* Secondary Paragraph */}
                <p className='text-l font-thin mb-2'>
                    Beyond web development, I have a solid foundation in Java and Data Structures & Algorithms (DSA), 
                    which helps me write optimized and scalable code.
                    My curiosity drives me to explore new technologies and improve my problem-solving skills.
                </p>

                {/* "More about me" Navigation Button (conditionally rendered) */}
                {showButton && (
                    <button
                        onClick={() => navigate('/about')}
                        className='text-[#D3E97A] border-b b-[#D3E97A] text-l font-medium mb-4'
                    >
                        More about me
                    </button>
                )}

                {/* Social Links and Resume Button (conditionally rendered) */}
                {showContent && (
                    <div className='flex mt-6'>
                        {/* Download Resume Button */}
                        <a href="" className='flex items-center mx-4 text-[#D3E97A] mb-4'>
                            <button className='flex items-center space-x-1 border b-[#D3E97A] px-3 py-1 rounded-2xl'>
                                <span>Download Resume</span>
                                <FiDownload className="text-xl" />
                            </button>
                        </a>

                        {/* GitHub Link */}
                        <a 
                            href="https://github.com/Hey-bhagwan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center mx-4 text-[#D3E97A] mb-4'
                        >
                            <FiGithub className="text-xl" />
                        </a>

                        {/* LinkedIn Link */}
                        <a 
                            href="https://www.linkedin.com/in/ayush-upadyay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center mx-4 text-[#D3E97A] mb-4'
                        >
                            <FiLinkedin className="text-xl" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
};
