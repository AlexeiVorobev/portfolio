import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setStoredLanguage(lang)
    localStorage.setItem("i18nextLng", lang);
  };

  const [storedLanguage, setStoredLanguage] = useState(null)
  
  
  useEffect(() => {
    setStoredLanguage(localStorage.getItem("i18nextLng").substring(0,2) || 'ru')
    
  }, [])

  return (
    <div >
      <select
      value={storedLanguage}
        className="bg-transparent cursor-pointer hover:text-glow"
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
