import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import logo from "../svg/logo.svg";
import logoLight from "../svg/logo-light.svg";
import moon from "../svg/moon.svg";
import sun from "../svg/sun.svg";
import "./Nav.css";

function Nav() {
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { handleClickButton, darkmode } = useContext(ThemeContext);
  return (
    <nav className={darkmode}>
      <div className="container-nav">
        <div className="nav-child">
          <img src={logo} className="logo-light" alt="logo" />
          <img src={logoLight} alt="logo" className="logo-dark" />
        </div>
        <div className="nav-child">
          <button className="circle-option" value="en" onClick={handleLanguage}>
            {texts.lan}
          </button>
          <div className="circle-option" onClick={handleClickButton}>
            <img className="moon" src={moon} alt="moon" />
            <img className="sun" src={sun} alt="sun" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
