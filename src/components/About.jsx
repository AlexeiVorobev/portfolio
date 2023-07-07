import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="py-4">{t("navbar.about")}</h1>
          <p className="py-2">// {t("about.sub_1")}</p>
          <p className="py-2">{t("about.p_1")}</p>
          <p className="py-2">{t("about.p_2")}</p>
          <p className="py-2">{t("about.p_3")}</p>
          <a href="#projects">
          </a>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center ease-in duration-300">
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
