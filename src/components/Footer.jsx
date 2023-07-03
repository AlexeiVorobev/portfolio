import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between">
          <div className="text-white">
            <h4 className="text-lg font-bold">Alexei Vorobev</h4>
            <p className="text-sm">Full-Stack Web Developer</p>
          </div>
          <div className="flex items-center justify-center md:justify-end my-4 w-full sm:w-[80%]">
            <a href="https://github.com/AlexeiVorobev" target="_blank">
              <div className="rounded-full text-xl text-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillGithub />
              </div>
            </a>
            <div className="rounded-full text-xl text-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiFillLinkedin />
            </div>
            <div className="rounded-full text-xl text-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiFillMail />
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4 text-sm text-gray-400 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Alexei Vorobev. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
