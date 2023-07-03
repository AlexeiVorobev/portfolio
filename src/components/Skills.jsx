import React from "react";
import SkillItem from "./SkillItem"
import { useTranslation } from "react-i18next";

import cssImg from '../assets/skills/css.png'
import javaScriptImg from '../assets/skills/javascript.png'
import reactImg from '../assets/skills/react.png'
import nodejsImg from '../assets/skills/node.png'
import mongoImg from '../assets/skills/mongo.png'
import tailwindImg from '../assets/skills/tailwind.png'
import gitHubImg from '../assets/skills/github1.png'
import typeScriptImg from '../assets/skills/typescript.png'

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {t("navbar.skills")}
        </p>
        <h2 className="py-4">{t("skills.h")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           <SkillItem title="CSS" img={cssImg} />
           <SkillItem title="JavaScript" img={javaScriptImg} />
           <SkillItem title="React" img={reactImg} />
           <SkillItem title="TypeScript" img={typeScriptImg} />
           <SkillItem title="NodeJS" img={nodejsImg} />
           <SkillItem title="MongoDB" img={mongoImg} />
           <SkillItem title="Tailwind CSS" img={tailwindImg} />
           <SkillItem title="Github" img={gitHubImg} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
