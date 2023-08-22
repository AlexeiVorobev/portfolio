import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="max-w-[1240px] text-center h-[40vh] lg:h-[70vh] mx-auto"
      
    >
       <div className="border-t border-neutral-700 mb-4" />
      <div className=" flex flex-col justify-center m-auto px-2 h-full">
        <h2 className="py-4 uppercase">{t("contact.h")}</h2>
        <a href="mailto:alexdevelops@outlook.com">
          <h3 className="font-light uppercase text-gray-400">
            alexdevelops@outlook.com
          </h3>
        </a>
      </div>
      
    </div>
  );
};

export default Contact;
