import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            {t("navbar.about")}
          </p>
          <h2 className="py-4">{t("about.h_1")}</h2>
          <p className="py-2 text-gray-600">// {t("about.sub_1")}</p>
          <p className="py-2 text-gray-600">{t("about.p_1")}</p>
          <p className="py-2 text-gray-600">{t("about.p_2")}</p>
          <p className="py-2 text-gray-600">{t("about.p_3")}</p>
          <a href="#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
            {t("about.checkout")}
            </p>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 ease-in duration-300">
          <img
            className=""
            src="https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=cHyyR9-8"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
