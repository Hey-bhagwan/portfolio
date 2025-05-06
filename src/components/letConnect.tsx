import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi"
import ContactForm from "./form"

export const LetConnect = () => {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-12 pt-10 grid grid-cols-1 md:grid-cols-2 w-full justify-center items-start pb-15">
            <div className="flex flex-col items-start justify-text">
                <p className="text-4xl font-extrabold pt-15 uppercase mb-5">
                    LET'S CONNECT
                </p>
                <div className="text-l font-thin mb-2 text-center flex items-center justify-center">
                    <span>Say hello at</span>
                    <span className="border-b border-[#D3E97A] ml-2">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushupa29@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ayushupa29@gmail.com
                        </a>
                    </span>
                </div>
            <div>
                <span>For more info, here is my</span>
                <span className="border-b border-[#D3E97A] ml-2">
                    <a
                        href="https://drive.google.com/file/d/11g3yHumE9Y6cWu6TgwilHo4SgFbPfyjw/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </span>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6 text-[#D3E97A]">
                <span >
                    <a
                        href="https://www.linkedin.com/in/ayush-upadyay"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin className="text-xl" />
                    </a>
                </span>
                <span >
                    <a
                        href="https://www.instagram.com/__ayush_up?igsh=bHl0cjAxamthZzd4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiInstagram className="text-xl" />
                    </a>
                </span>
                <span >
                    <a
                        href="https://github.com/Hey-bhagwan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub className="text-xl" />
                    </a>
                </span>
            </div>
            </div>
            <div className="mt-10 md:mt-0">
                <ContactForm />
            </div>
        </div>
    )
}