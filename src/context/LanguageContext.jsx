import { createContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    lan: "ES",
    btnCode: "ver codigo",
    btnApp: "ver app",
    titleOne: "mi-portafolio",
    /*tech*/
    reactText: "React y CSS",
    sassText: "HTML, SASS y JavaScript",
    jsText: "HTML, CSS y JavaScript",
    styled: "React y styled-component",
    DuoFron: "HTML y CSS",
    /*first project*/
    textOneFirst: "Una aplicación que fue desarrollada en ",
    textOneSecond: " tiene un dark mode, y algunas asombrosas opciones más.",
    /*second project*/
    titleTwo: "app-blogr",
    textTwoFirst:
      "Una pequeña aplicación tipo landing page que fue desarrollada con ",
    textTwoSecond: " el diseño pertenece a Front end Mentor.",

    /*thri project*/
    titleThree: "piedra-papel-tijera",
    textThreeFirst: "Un juego que fue desarrollado en   ",
    textThreeSecond:
      ", el juego trata de elegir entre 3 opciones piedra, papel o tijera.",

    /*four project*/
    titleFour: "easybank",
    textFourFirst: "Una aplicación que fue desarrollado con ",
    textFourSecond: ". El diseño es de Front end Mentor.",

    /*five project*/
    titleFive: "app-tareas-lista",
    textFiveFirst:
      "Una aplicación de tareas que contiene también un pomodoro fue desarrollado con  ",
    textFiveSecond: ". Tiene muchas opciones más.",

    /*six project*/
    titleSix: "administrador-lading-page",
    textSixFirst: "Una aplicación que fue desarrollado con  ",
    textSixSecond:
      ". En este proyecto aprendí a usar “max-width”, el diseño es de Front end Mentor.",
    /*seven project*/
    titleSeven: "buscar-pokemon",
    textSevenFirst:
      "Una aplicación simple, Que permite buscar algunos pokemon. Fue desarrollado con   ",
    textSevenSecond: ". La API que fue consumida es de POKEAPI.",
    /*eig project*/
    titleEig: "app-tiempo",
    textEigFirst: "Una aplicación que fue desarrollado con  ",
    textEigSecond: ". Permite ver el tiempo consumido una API.",
    /*nine project*/
    titleNine: "generador-de-consejos",
    textNineFirst:
      "Un modal que te da grandes consejos de un modo aleatorio, Esta consume un api además que se desarrolló con ",
    /*ten project*/
    titleTen: "calificación-interactiva ",
    textTenFirst:
      "Un modal que simula la interacción de un usuario al ponerle una valoración a un producto. Fue desarrollado con ",
    /*elev project*/
    titleElev: "gráfico-gastos",
    textElevFirst:
      "Una aplicación que permite visualizar un gráfico de forma interactiva en Mobile y en desktop. Fue desarrollado en ",
    /*Twl project*/
    titleTwl: "modal-orden-pedido",
    textTwlFirst:
      "Un pequeño modal donde el diseño fue de Front end Mentor. Se desarrolló con ",
  },
  en: {
    btnCode: "view code",
    btnApp: "view app",
    lan: "EN",
    /*tech*/
    reactText: "React and CSS",
    sassText: "HTML, SASS and JavaScript",
    jsText: "HTML, CSS and JavaScript",
    styled: "React and styled-component",
    DuoFron: "HTML ans CSS",
    /*first project*/
    titleOne: "my-portfolio",
    textOneFirst: "An app that was built in ",
    textOneSecond: " has a dark mode, and some other awesome options.",
    /*second project*/
    titleTwo: "app-blogr",
    textTwoFirst:
      "A small landing page type application that was developed with  ",
    textTwoSecond: " the design belongs to Front end Mentor.",

    /*thri project*/
    titleThree: "rock-paper-scissors",
    textThreeFirst: "A game that was developed in  ",
    textThreeSecond:
      " the game tries to choose between 3 options rock, paper or scissors.",
    /*four project*/
    titleFour: "easybank",
    textFourFirst: "An app that was developed with ",
    textFourSecond: ". The design is from Front-end mentor.",
    /*five project*/
    titleFive: "app-task-list",
    textFiveFirst:
      "A homework app that also contains a pomodoro was developed with ",
    textFiveSecond: ". You have many more options.",
    /*six project*/
    titleSix: "manage-lading-page",
    textSixFirst: "An application that was developed with  ",
    textSixSecond:
      ". In this project I learned to use “max-width”, the design is from Front end Mentor.",
    /*seven project*/
    titleSeven: "poke-search",
    textSevenFirst:
      "A simple application, which allows you to search for some pokemon. It was developed with  ",
    textSevenSecond: ". The API that was consumed is from POKEAPI.",
    /*eig project*/
    titleEig: "app-weather",
    textEigFirst: "An application that was developed with ",
    textEigSecond: ". Allows you to see the time consumed by an API.",
    /*nine project*/
    titleNine: "advice-generator",
    textNineFirst:
      "A modal that gives you great advice in a random way, It consumes an additional api that was developed with  ",
    /*ten project*/
    titleTen: "interactive-rating",
    textTenFirst:
      "A modal that simulates a user's interaction when giving a product a rating. It was developed with ",
    /*elev project*/
    titleElev: "expense-chart",
    textElevFirst:
      "An application that allows you to view a graph interactively on Mobile and desktop. It was developed in ",
    /*Twl project*/
    titleTwl: "modal-order-sumary",
    textTwlFirst:
      "A small modal where the design was from Front end Mentor. It was developed with ",
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
