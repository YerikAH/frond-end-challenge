import { createContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    lan: "ES",
    btnCode: "ver codigo",
    btnApp: "ver app",
    title: "app-tareas-lista",
    text: "Un juego que fue desarrollado con HTML, CSS y JavaScript, un juego muy conocido se trata de elegir entre papel, tijera o piedra, el programa tambien eligira uno.",
  },
  en: {
    btnCode: "view code",
    btnApp: "view app",
    lan: "EN",
    title: "app-task-list",
    text: "A play was development with HTML, CSS and JavaScript, a game is very know for people about of choice in paper, scicces or rock, the app too choince one.",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    e.preventDefault();
    if (e.target.value === "es") {
      e.target.value = "en";
      setLanguage("es");
      setTexts(translations.es);
      localStorage.setItem("language", "es");
    } else {
      e.target.value = "es";
      setLanguage("en");
      setTexts(translations.en);
      localStorage.setItem("language", "en");
    }
  };
  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("language") == "en") {
      setLanguage("en");
      setTexts(translations.en);
    } else {
      setLanguage("es");
      setTexts(translations.es);
    }
  });

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
