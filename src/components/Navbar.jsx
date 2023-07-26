import React, { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full transition-all py-4 shadow-xl z-[100] px-3 bg-[#121212] border-b border-neutral-900"
          : "fixed w-full transition-all py-10 z-[100] px-3 bg-transparent border-b border-transparent"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex gap-4 items-center">
          <a href="#">
            {/* <div className="text-lg hover:text-glow">Alexei Vorobev</div> */}
            {/* <div className="text-lg hover:text-glow"><span className="tracking-tight">AV</span> studio</div> */}
            <div className="text-lg hover:text-glow"><span className="">Alex Develops</span></div>
          </a>
          <LanguageSwitcher />
        </div>
        <div>
          <ul className="hidden md:flex">
            <a href="#">
              <li className="ml-8 text-md hover:text-glow">
                {t("navbar.home")}
              </li>
            </a>
            <a href="#about">
              <li className="ml-8 text-md hover:text-glow">
                {t("navbar.about")}
              </li>
            </a>
            <a href="#projects">
              <li className="ml-8 text-md hover:text-glow">
                {t("navbar.projects")}
              </li>
            </a>
            <a href="#contact">
              <li className="ml-8 text-md hover:text-glow">
                {t("navbar.contact")}
              </li>
            </a>
          </ul>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={(e) => {
          if (e.target.id === "overlay") {
            setNav(false);
          }
        }}
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
        id="overlay"
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#2b2b2b] p-7 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="#">
              <div className="text-lg hover:text-glow"><span className="">AlexDev</span></div>
              </a>
              <div onClick={handleNav} className="p-3 cursor-pointer">
                <AiOutlineClose size={22} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">{t("navbar.cta_1")}</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="#">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t("navbar.home")}
                </li>
              </a>
              <a href="#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t("navbar.about")}
                </li>
              </a>
              <a href="#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t("navbar.projects")}
                </li>
              </a>
              <a href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t("navbar.contact")}
                </li>
              </a>
            </ul>
            <div className="pt-40 ">
              <div className="text-neutral-300">
                <h4 className="text-md font-bold text-gray-350">
                  Alexei Vorobev
                </h4>
                <p className="text-sm">Full-Stack Web Developer</p>
              </div>
              <div className="flex items-center justify-start gap-7 my-4 w-full sm:w-[80%]">
                <a href="https://github.com/alexvorobevv" target="_blank">
                  <div className="cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillGithub />
                  </div>
                </a>
                {/* <div className="cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillLinkedin />
                </div> */}
                <a href="mailto:alexvorobevv@gmai.com">
                  <div className="cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
