import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import profileImg from "../assets/profile.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2">
            <img alt="Profile picture" className="" src={profileImg} />
          </div>

          <p className="text-sm font-bold italic text-gray-600">
            {t("hero.photo_sub")}
          </p>
          <h1 className="py-4 text-gray-300">
            {t("hero.hello_1")}{" "}
            <span className="text-[#5651e5]">{t("hero.name")}</span>
          </h1>
          <h1 className="py-4 text-gray-300">{t("hero.hello_2")}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">{t("hero.p")}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
