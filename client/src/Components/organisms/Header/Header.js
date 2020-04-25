import React from "react";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <h1 className="Header__brand">Gille Epie</h1>
        <ul className="Header__items">
          <li className="Header__item">
            <a className="Header__link" href="/">
              Facebook
            </a>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="/">
              Twitter
            </a>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="/">
              Youtube
            </a>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="/">
              Instagram
            </a>
          </li>
        </ul>
        <button className="Header__burger"></button>
      </div>
    </header>
  );
};

export default Header;
