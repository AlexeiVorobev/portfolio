import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="w-full md:h-screen p-2 max-w-[1240px] m-auto flex items-center">
      <div className="">
        <div className="border-t border-neutral-700 my-8" />
        <h1 className="py-4">{t("navbar.about")}</h1>
        <div className="flex items-center">
          <div className="md:grid grid-cols-2 ">
            <div className="">
              {/* Left */}
              <p className="text-xl text-[#bebebe] my-8">
                {t("about.p")}
              </p>
              <p className="text-xl text-[#bebebe] my-8">
                {t("about.p2")}
              </p>
              <p className="text-xl text-[#bebebe] my-8">
                {t("about.p3")}
              </p>
              <div className="grid mt-4 grid-cols-2">
                <div>
                  <h3 className="text-[1.5rem]">Front End</h3>
                  <ul className="text-[#bebebe] text-xl mb-8">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[1.5rem]">Back End</h3>
                  <ul className="text-[#bebebe] text-xl mb-8">
                    <li>Node JS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="w-full h-auto m-auto flex items-center justify-center ease-in duration-300">
              <img
                className=""
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
