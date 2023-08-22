import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-neutral-300">
            {t("hero.hello_1")}{" "}
            <span className="text-[#5651e5]">{t("hero.name")}</span>
          </h1>
          <h1 className="py-4 text-neutral-300">{t("hero.hello_2")}</h1>
          <div className="border-solid border-[2px] border-neutral-400 rounded-md py-2 w-[200px] mx-auto mt-2">
            <a href="#projects" className="text-neutral-300">Смотреть проекты</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
