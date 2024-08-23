import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const LanguageContext = createContext();

const Laun = ({ children }) => {
  const [language, setLanguage] = useState("English");

  const menuTranslations = {
    English: ["Home", "Movies", "TV Shows", "Sports", "Live"],
    French: ["Accueil", "Films", "Séries TV", "Sports", "En direct"],
    German: ["Zuhause", "Filme", "TV-Sendungen", "Sport", "Live"],
    Russian: ["Главная", "Фильмы", "ТВ-шоу", "Спорт", "Прямой эфир"],
    Spanish: ["Inicio", "Películas", "Programas de TV", "Deportes", "En vivo"],
    Chinese: ["主页", "电影", "电视节目", "体育", "直播"],
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, menuTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};
Laun.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default Laun;
