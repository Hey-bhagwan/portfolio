// Importing necessary components and assets
import { AboutMe } from "../components/about_me";
import MyImage from "../assets/1000010080.jpg";
import { Tag } from "../components/tag";
import { LetConnect } from "../components/letConnect";

// About component: Displays detailed personal information and skills
export const About = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16">
            {/* About Me Section with full content and no button */}
            <div className="mt-20">
                <AboutMe showContent={true} showButton={false} />
            </div>

            {/* Profile Image and Skills Section */}
            <div className="grid grid-cols-1 gap-4 w-full px-10 mt-20">
                {/* Profile Image */}
                <div className="md:w-full w-1/3 flex justify-center">
                    <img  
                        src={MyImage}
                        alt="Ayush Upadhyay"
                        className="h-[70vh] w-[60vh] object-cover rounded-2xl"
                    />
                </div>

                {/* Capabilities Text and Tags */}
                <div className="flex flex-col md:flex-row w-full items-start justify-center mt-10">
                    {/* Section Heading */}
                    <div className="text-4xl font-extrabold w-full">
                        My Capabilites 
                    </div>

                    {/* Description and Tech Tags */}
                    <div className="grid grid-cols-1 w-full">
                        {/* Capabilities Description */}
                        <div className="text-xl font-thin w-full">
                            I am a full-stack developer with strong proficiency in the MERN stack and hands-on experience working with PostgreSQL and Prisma ORM. 
                            I build scalable and efficient web applications using Next.js and TypeScript, and I’m also skilled in working with modern backend frameworks like Hono. 
                            With foundational knowledge in AWS cloud services, I can manage deployments and infrastructure effectively. 
                            Additionally, I have a solid understanding of Data Structures and Algorithms (DSA), which enables me to write optimized and reliable code.
                        </div>

                        {/* Tech Skill Tags */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                            <Tag tag="MERN Stack" />
                            <Tag tag="Next.js" />
                            <Tag tag="TypeScript" />
                            <Tag tag="PostgreSQL" />
                            <Tag tag="Prisma ORM" />
                            <Tag tag="AWS" />
                            <Tag tag="Data Structures" />
                            <Tag tag="Algorithms" />
                            <Tag tag="Hono" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Divider (visual separator) */}
            <div className="border-b border-gray-400 w-full mt-15"></div>

            {/* Let's Connect Section */}
            <div id="connect" className="w-full">
                <LetConnect />
            </div>
        </div>
    );
};
