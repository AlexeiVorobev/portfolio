import React from "react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import profileImg from '@/public/assets/profile.jpg'
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div class="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
            <Image className="" src={profileImg} />
          </div>

          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Alex</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full-stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full-stack web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently
            I'm focused on building responsive full stack web applications.
          </p>
          <div className="flex items-center justify-between max-w-[240px] m-auto py-4">
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiFillGithub />
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiFillMail />
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
