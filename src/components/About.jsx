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
                src="https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=cHyyR9-8"
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
