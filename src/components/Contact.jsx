import React from "react";
import contactImg from "../assets/contact.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="w-full lg:h-[100vh]"
      
    >
      <div className="max-w-[1240px] flex flex-col justify-center m-auto px-2 h-full">
        <h1 className="py-4 uppercase">{t("contact.h_1")}</h1>
        <a href="mailto:alexvorobevv@gmail.com">
          <h2 className="font-light uppercase text-gray-400">
            alexvorobevv@gmail.com
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Contact;
