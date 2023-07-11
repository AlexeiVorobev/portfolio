import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const projectItem = (project) => {
  const { t } = useTranslation();
  return (
    <div className="mb-16">
      <div className="border-t border-neutral-700 mb-4" />
      <div className="my-12">
        <h2>{project.title}</h2>
        <h3 className="text-lg font-bold text-gray-400 pt-1">{project.sub}</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <a href={project.demo} target="_blank">
          <div className="box-glow">
            <img src={project.img} alt="" />
          </div>
        </a>
        <div>
          <p className="text-xl mb-8">{project.desc}</p>
          <h3 className="">{t("projects.technologies")}</h3>
          <p>{project.stack}</p>
          <div className="flex gap-12">
            <a
              className="text-neutral-100 hover:text-glow hover:text-neutral-100"
              href={project.demo}
              target="_blank"
            >
              <div className="flex items-center gap-2 text-xl font-bold mt-8 uppercase">
                <div>{t("projects.demo")}</div>
                <div>
                  <FiArrowUpRight />
                </div>
              </div>
            </a>
            <a
              className="text-neutral-100 hover:text-glow hover:text-neutral-100"
              href={project.code}
              target="_blank"
            >
              <div className="flex items-center gap-2 text-xl font-bold mt-8 uppercase">
                <div>{t("projects.code")}</div>
                <div>
                  <FiArrowUpRight />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectItem;
