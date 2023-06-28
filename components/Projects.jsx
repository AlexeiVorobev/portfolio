import React from "react";
import daysImg from "../public/assets/projects/days.jpg";
import ProjectItem from "./ProjectItem";
import storeImg from "../public/assets/projects/alex-store.jpg";
import personal from "../public/assets/projects/personal-website.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Journaling App"
            desc="React + Express"
            img={daysImg}
            url="/days"
          />
          <ProjectItem
            title="Fashion store"
            desc="React + Express"
            img={storeImg}
            url="/store"
          />
           <ProjectItem
            title="Personal website"
            desc="NextJS + TailwindCSS"
            img={personal}
            url="/personal"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
