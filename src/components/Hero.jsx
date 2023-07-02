import React from "react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import profileImg from '../assets/profile.jpg'
import { useTranslation } from "react-i18next";

const Hero = () => {
  const {t} = useTranslation()
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
            <img alt="Profile picture" className="" src={profileImg} />
          </div>

          <p className="uppercase text-sm tracking-widest text-gray-600">
            {t("hero.photo_sub")}
          </p>
          <h1 className="py-4 text-gray-700">
          {t("hero.hello_1")} <span className="text-[#5651e5]">{t("hero.name")}</span>
          </h1>
          <h1 className="py-4 text-gray-700">{t("hero.hello_2")}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
           {t("hero.p")}
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

export default Hero;
