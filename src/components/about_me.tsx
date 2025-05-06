import { useNavigate } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

export const AboutMe = ({showContent = false, showButton = true}) => {
    const navigate = useNavigate();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-center items-start mx-auto px-4 sm:px-6 lg:px-12 '>
            <div className='text-4xl font-extrabold pt-15 uppercase mb-5'>
                ABOUT ME
            </div>
            <div className='pt-2 flex flex-col items-start justify-text'>
                <p className='text-2xl font-bold mb-2'>I'm a passionate B.Tech CSE 3rd-year student with strong expertise in full-stack development, 
                   including the MERN stack (MongoDB, Express.js, React, Node.js) and modern frameworks like Next.js.
                   I also have experience with relational databases, working with PostgreSQL 
                   and Prisma ORM for efficient data management.</p>
                <p className='text-l font-thin mb-2'>Beyond web development, I have a solid foundation in Java and Data Structures & Algorithms (DSA), which helps me write optimized and scalable code.
                    My curiosity drives me to explore new technologies and 
                    improve my problem-solving skills.</p>

                {showButton && (
                    <button
                        onClick={() => navigate('/about')}
                        className='text-[#D3E97A] border-b b-[#D3E97A] text-l font-medium mb-4'>
                        More about me
                    </button>
                )}
                
                {showContent && (
                    <div className='flex mt-6'>
                        <a 
                            href=""
                            className='flex items-center mx-4 text-[#D3E97A]  mb-4'>
                                <button className='flex items-center space-x-1 border b-[#D3E97A] px-3 py-1 rounded-2xl'>
                                    <span>Download Resume</span>
                                    <FiDownload className="text-xl" />
                                </button>
                        </a>
                        <a 
                            href="https://github.com/Hey-bhagwan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center mx-4 text-[#D3E97A]  mb-4'>
                            <FiGithub className="text-xl bg-[D3E97A] " />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ayush-upadyay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center mx-4 text-[#D3E97A]  mb-4'>
                            <FiLinkedin className="text-xl" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}