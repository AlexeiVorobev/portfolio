import React from "react";
import daysImg from "../assets/projects/days.jpg";
import ProjectItem from "./ProjectItem";
import storeImg from "../assets/projects/alex-store.jpg";
import personalImg from "../assets/projects/personal-website.jpg";
import doersImg from "../assets/projects/doers.jpg"

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Days: Journaling App"
            desc="React + Express"
            img={daysImg}
            demo="https://alexeivorobev.github.io/days"
            github="https://github.com/alexeivorobev/days"
          />
          <ProjectItem
            title="Alex: Fashion Store"
            desc="React + Express"
            img={storeImg}
            demo="https://alexeivorobev.github.io/alex-store"
            github="https://github.com/alexeivorobev/alex-store"
          />
           <ProjectItem
            title="Personal Website"
            desc="React + Tailwind CSS"
            img={personalImg}
            demo="https://alexeivorobev.github.io/portfolio"
            github="https://github.com/alexeivorobev/portfolio"
          />
           <ProjectItem
            title="Doers: Todo App"
            desc="JavaScript + CSS"
            img={doersImg}
            demo="https://alexeivorobev.github.io/doers/dist/"
            github="https://github.com/alexeivorobev/doers"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
