import React from "react";
import profileImg from "../assets/profile.jpg";
import { useTranslation } from "react-i18next";
import imageSrc from "../assets/headshotexample.png";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className="w-screen h-screen text-center"
      style={{ background: "linear-gradient(to right, #1d1d26 0%, #090909 100%)" }}
    >
      <div className="max-w-[1240px] mx-auto h-full flex justify-center items-center relative">
        <div>
          <p className="py-4 text-gray-300 text-left text-[3.75rem] font-bold">
            {t("hero.hello")}
          </p>
        </div>
        <div className="h-full overflow-hidden">
          <img className="pt-12 relative z-20" src={imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
