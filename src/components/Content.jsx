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
              <a
                target="_blank"
                href="https://yerikah.github.io/briefcase/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>
              <a
                target="_blank"
                href="https://github.com/YerikAH/briefcase"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleOne}</h1>
            <p>
              {texts.textOneFirst}
              <i className="tech">{texts.reactText}</i>
              {texts.textOneSecond}
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/challenge-front-end/Blogr/public/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/challenge-front-end/tree/main/Blogr"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleTwo}</h1>
            <p>
              {texts.textTwoFirst}
              <i className="tech">{texts.sassText}</i>
              {texts.textTwoSecond}
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/challenge-front-end/rock-paper-scissors/public/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/challenge-front-end/tree/main/rock-paper-scissors"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleThree}</h1>
            <p>
              {texts.textThreeFirst}
              <i className="tech">{texts.jsText}</i>
              {texts.textThreeSecond}
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/easybank-frontend-mentor/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/easybank-frontend-mentor"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleFour}</h1>
            <p>
              {texts.textFourFirst}
              <i className="tech">{texts.styled}</i>
              {texts.textFourSecond}
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/my-task-app/public/#"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/my-task-app"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleFive}</h1>
            <p>
              {texts.textFiveFirst}
              <i className="tech">{texts.jsText}</i>
              {texts.textFiveSecond}
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/challenge-front-end/manage-landing-page/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/challenge-front-end/tree/main/manage-landing-page"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleSix}</h1>
            <p>
              {texts.textSixFirst}
              <i className="tech">{texts.jsText}</i>
              {texts.textSixSecond}
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/poke-search/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/poke-search"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleSeven}</h1>
            <p>
              {texts.textSevenFirst}
              <i className="tech">{texts.jsText}</i>
              {texts.textSevenSecond}
            </p>
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
              <a
                target="_blank"
                href="https://github.com/YerikAH/app-weather"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://yerikah.github.io/app-weather/public/"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleEig}</h1>
            <p>
              {texts.textEigFirst}
              <i className="tech">{texts.jsText}</i>
              {texts.textEigSecond}
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/challenge-front-end/advice-generator-app/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/challenge-front-end/tree/main/advice-generator-app"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleNine}</h1>
            <p>
              {texts.textNineFirst}
              <i className="tech">{texts.jsText}</i>.
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/challenge-front-end/interactive-rating/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/challenge-front-end/tree/main/interactive-rating"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleTen}</h1>
            <p>
              {texts.textTenFirst}
              <i className="tech">{texts.jsText}</i>.
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/challenge-front-end/expenses/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/challenge-front-end/tree/main/expenses"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleElev}</h1>
            <p>
              {texts.textElevFirst}
              <i className="tech">{texts.jsText}</i>.
            </p>
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
              <a
                target="_blank"
                href="https://yerikah.github.io/challenge-front-end/modal/"
                className="viewApp"
              >
                {texts.btnApp}
              </a>

              <a
                target="_blank"
                href="https://github.com/YerikAH/challenge-front-end/tree/main/modal"
                className="viewCode"
              >
                {texts.btnCode}
              </a>
            </div>
            <h1>{texts.titleTwl}</h1>
            <p>
              {texts.textTwlFirst}
              <i className="tech">{texts.DuoFron}</i>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
