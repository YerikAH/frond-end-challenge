import React, { useContext } from "react";
import "./Content.css";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import settings from "../svg/ham-light.svg";
import quit from "../svg/exit.svg";
function Content() {
  const { darkmode } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const handleClick = (e) => {
    let some = e.target.nextElementSibling;
    some.style.setProperty("opacity", "1");
    some.style.setProperty("visibility", "visible");
  };
  const handleExit = (e) => {
    let some = e.target.parentNode;
    some.style.setProperty("opacity", "0");
    some.style.setProperty("visibility", "hidden");
  };
  return (
    <main className={darkmode}>
      <div className="">
        <div className="grid-container">
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
          <div className="child-grid">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="settings"
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="pathColor"
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#4A4C5B"
              />
            </svg>

            <div className="hover">
              <img
                src={quit}
                alt="quit"
                className="btnExit"
                onClick={handleExit}
              />
              <a className="viewApp">{texts.btnApp}</a>
              <a className="viewCode">{texts.btnCode}</a>
            </div>
            <h1>{texts.title}</h1>
            <p>{texts.text}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
