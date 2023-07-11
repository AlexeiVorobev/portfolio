import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-8">

      <div className="container mx-auto px-4">
      <div className="border-t border-neutral-700 mb-4" />
        <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between">
          <div className="text-gray-100">
            <h4 className="text-lg font-bold text-gray-350">Alexei Vorobev</h4>
            <p className="text-sm">Full-Stack Web Developer</p>
          </div>
          <div className="flex items-center justify-center md:justify-end my-4 w-full sm:w-[80%]">
            <a href="https://github.com/AlexeiVorobev" target="_blank">
              <div className="rounded-full text-xl text-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillGithub />
              </div>
            </a>
            <div className="rounded-full text-xl text-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiFillLinkedin />
            </div>
            <div className="rounded-full text-xl text-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiFillMail />
            </div>
          </div>
        </div>
        <div className=" text-gray-400 text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
