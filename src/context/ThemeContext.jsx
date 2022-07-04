import { createContext, useState } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState("light");

  const handleClickButton = (e) => {
    if (darkmode == "light") {
      setDarkmode("dark");
      localStorage.setItem("darkmode", "dark");
    } else {
      setDarkmode("light");
      localStorage.setItem("darkmode", "light");
    }
  };
  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("darkmode") == "dark") {
      setDarkmode("dark");
    } else {
      setDarkmode("light");
    }
  });

  const data = { handleClickButton, darkmode };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
