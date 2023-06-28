"use client"
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({color}) => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

   // Get the stored language from local storage
   const storedLanguage = localStorage.getItem("i18nextLng").substring(0,2) || 'ru';
  return (
    <div>
      <select
      style={{color: color}}
      value={storedLanguage}
        className="bg-transparent"
        onChange={(e) => {
          handleChangeLanguage(e.target.value);
        }}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
