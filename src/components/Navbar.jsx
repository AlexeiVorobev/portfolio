
import React, { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillMail,
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
          ? "fixed w-full h-20 shadow-xl z-[100] px-3 bg-[#ecf0f3]"
          : "fixed w-full h-20 z-[100] px-3 bg-transparent"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex gap-4 items-center">
          <a href="#">
            <div className="text-lg">
              <span className="text-[#5651e5] font-bold">Alex</span>
              <span className="font-bold text-gray-600">Dev</span>
            </div>
          </a>
          <LanguageSwitcher />
        </div>
        <div>
          <ul className="hidden md:flex">
            <a href="#">
              <li className="ml-10 text-sm border-b border-[gray] border-opacity-0 uppercase hover:border-opacity-50">
                {t("navbar.home")}
              </li>
            </a>
            <a href="#about">
              <li className="ml-10 text-sm border-b border-opacity-0 border-[gray] uppercase hover:border-opacity-50">
                {t("navbar.about")}
              </li>
            </a>
            <a href="#skills">
              <li className="ml-10 text-sm border-b border-opacity-0 border-[gray] uppercase hover:border-opacity-50">
                {t("navbar.skills")}
              </li>
            </a>
            <a href="#projects">
              <li className="ml-10 text-sm border-b border-opacity-0 border-[gray] uppercase hover:border-opacity-50">
                {t("navbar.projects")}
              </li>
            </a>
            <a  href="#contact">
              <li className="ml-10 text-sm border-b border-opacity-0 border-[gray] uppercase hover:border-opacity-50">
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
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="#">
                <div onClick={() => setNav(false)}>ALEX</div>
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
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
              <a href="#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {t("navbar.skills")}
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
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s connect
              </p>

              <div className="flex items-center justify-start gap-4 my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillGithub />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillMail />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
