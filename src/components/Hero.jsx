import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-cover"
      style={{ backgroundImage: "url('')" }}
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div className="w-[400px]">
          <img
            src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
        <div>
          <h1 className="py-4 text-neutral-300">{t("hero.hello")}</h1>
          <a href="#projects" className="block border-solid border-[2px] border-neutral-400 rounded-sm py-2 max-w-[240px] mx-auto mt-2 uppercase">
            {t("hero.button")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
