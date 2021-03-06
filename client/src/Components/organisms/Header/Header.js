import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

const Header = () => {

  const [socialItems, setSocialItems] = useState([])
  const [isScrollTop, setIsScrollTop] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY !== 0 ? setIsScrollTop(false) : setIsScrollTop(true)
    })
    axios.get("http://localhost:27017/api/socials")
      .then(res => {
        setSocialItems(res.data)
      })
  }, []);

  const handleClick = () => {
    document.querySelector('.Menu').classList.add('Menu--active')
  }

  return (
    <header className={isScrollTop === true ? 'Header' : 'Header Header--active'}>
      <div className="Header__wrapper content-wrapper">
        <div className="Header__container">
          <Link to="/">
            <h1 className="Header__brand">Gilles Epie</h1>
          </Link>
          <ul className="Header__items">
            {socialItems.map((socialItem, id) =>
              <li className="Header__item" key={id}>
                <a className="Header__link" href={socialItem.url} target="_blank" rel="noopener noreferrer">{socialItem.name}</a>
              </li>
            )}
          </ul>
        </div>
        <button className="Header__burger" onClick={() => {handleClick()}}></button>
      </div>
    </header>
  );
};

export default Header;
